const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI;

let cached = global.mongoose;
if (!cached) cached = global.mongoose = { conn: null, promise: null };

async function connectToDatabase() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, { bufferCommands: false }).then((m) => m);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

const LobbySchema = new mongoose.Schema({
  code: { type: String, unique: true },
  hostId: String,
  players: [{ 
    id: String, 
    name: String, 
    isBot: { type: Boolean, default: false } 
  }],
  status: { type: String, default: 'waiting' }
});

const Lobby = mongoose.models.Lobby || mongoose.model('Lobby', LobbySchema);

export default async function (req, res) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');
  const { lobbyCode, hostId } = req.body;

  try {
    await connectToDatabase();
    const lobby = await Lobby.findOne({ code: lobbyCode.toUpperCase() });

    if (!lobby) {
      return res.status(404).json({ error: 'Lobby not found' });
    }

    // Строгая проверка: только хост может добавлять ботов
    if (lobby.hostId !== hostId.toString()) {
      return res.status(403).json({ error: 'Only lobby host can add bots' });
    }

    // Генерация бота
    const bot = {
      id: "bot_" + Date.now(),
      name: "PotatoBot_" + Math.floor(Math.random() * 100),
      isBot: true
    };

    lobby.players.push(bot);
    await lobby.save();

    res.status(200).json(bot);
  } catch (err) {
    console.error('Add Bot Error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
