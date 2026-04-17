const { Telegraf, Markup } = require('telegraf');
const mongoose = require('mongoose');

/**
 * 1. Environment Variables
 */
const BOT_TOKEN = process.env.BOT_TOKEN;
const WEB_APP_URL = process.env.WEB_APP_URL;
const TON_WALLET = process.env.TON_WALLET;
const MONGODB_URI = process.env.MONGODB_URI;

/**
 * 2. MongoDB Connection Caching (Standard Vercel pattern)
 */
let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDatabase() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    }).then((m) => m);
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

/**
 * 3. User Model
 */
const UserSchema = new mongoose.Schema({
  telegramId: { type: String, unique: true, required: true },
  firstName: String,
  username: String,
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);

/**
 * 4. Bot Initialization
 */
const bot = new Telegraf(BOT_TOKEN);

// Set Menu Commands
bot.telegram.setMyCommands([
  { command: 'start', description: '🥔 Играть в Wet Potato' },
  { command: 'help', description: '❓ Как играть' },
  { command: 'donate', description: '💎 Поддержать разраба' }
]);

/**
 * 5. Middleware: Check & Save User
 */
bot.use(async (ctx, next) => {
  if (ctx.from) {
    try {
      await connectToDatabase();
      const userExists = await User.findOne({ telegramId: ctx.from.id.toString() });
      if (!userExists) {
        await User.create({
          telegramId: ctx.from.id.toString(),
          firstName: ctx.from.first_name,
          username: ctx.from.username
        });
        console.log(`✨ New user saved: ${ctx.from.first_name}`);
      }
    } catch (err) {
      console.error('❌ Database error:', err);
    }
  }
  return next();
});

/**
 * 6. Command Handlers
 */

// Helper: Check if in group
const checkGroup = (ctx, next) => {
  if (ctx.chat.type !== 'private') {
    return ctx.reply(
      "Создавать лобби и играть можно только внутри приложения! 👇",
      Markup.inlineKeyboard([
        [Markup.button.webApp("🥔 Запустить Wet Potato", WEB_APP_URL)]
      ])
    );
  }
  return next();
};

// Start Command
bot.start(checkGroup, (ctx) => {
  ctx.replyWithHTML(
    `<b>🥔 Привет, ${ctx.from.first_name}! ✨</b>\n\n` +
    `Добро пожаловать в <b>Wet Potato Garden</b>. Успей передать горячую картошку, пока она не взорвалась! \n\n` +
    `Жми кнопку ниже, чтобы войти в игру:`,
    Markup.inlineKeyboard([
      [Markup.button.webApp("🥔 Запустить Wet Potato", WEB_APP_URL)]
    ])
  );
});

// Help Command
bot.help(checkGroup, (ctx) => {
  ctx.replyWithHTML(
    `<b>❓ Как играть в Wet Potato?</b>\n\n` +
    `1. Успей передать картошку, пока тикает таймер!\n` +
    `2. Тряси телефон или нажимай, чтобы разблокировать свайп.\n` +
    `3. Все лобби и сама игра доступны только внутри приложения!\n\n` +
    `Готов начать? 👇`,
    Markup.inlineKeyboard([
      [Markup.button.webApp("🥔 Запустить Wet Potato", WEB_APP_URL)]
    ])
  );
});

// Donate Command
bot.command('donate', checkGroup, (ctx) => {
  ctx.replyWithHTML(
    `<b>Твоя поддержка помогает картошке оставаться мокрой! 🌊🥔</b>\n\n` +
    `Это инди-проект, и каждая капля помогает серверу не высохнуть. \n\n` +
    `Поддержать проект через TON (кликни на адрес, чтобы скопировать):\n` +
    `<code>${TON_WALLET}</code>`,
    Markup.inlineKeyboard([
      [Markup.button.webApp("🌊 Вернуться в игру", WEB_APP_URL)]
    ])
  );
});

/**
 * 7. Vercel Serverless Function Handler
 */
export default async function (req, res) {
  try {
    if (req.method === 'POST') {
      await bot.handleUpdate(req.body);
      res.status(200).send('OK');
    } else {
      res.status(200).send('Bot is running...');
    }
  } catch (err) {
    console.error('❌ Webhook error:', err);
    res.status(500).send('Error');
  }
}
