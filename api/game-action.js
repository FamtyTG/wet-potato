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
  code: String,
  hostId: String,
  players: [{ id: String, name: String, isBot: { type: Boolean, default: false } }],
  status: String,
  gameState: {
    action: String,
    targetId: String,
    timestamp: Number,
    input: String
  },
  chatState: { senderName: String, text: String, timestamp: Number },
  emoteState: { senderId: String, emote: String, timestamp: Number }
});
const Lobby = mongoose.models.Lobby || mongoose.model('Lobby', LobbySchema);

export default async function (req, res) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');
  const { lobbyCode, action, targetId, timestamp, senderName, text, senderId, emote, input } = req.body;

  try {
    await connectToDatabase();
    const lobby = await Lobby.findOne({ code: lobbyCode.toUpperCase() });
    
    if (!lobby) return res.status(404).json({ error: 'Not found' });
    
    if (action === 'chat') {
       if (!lobby.chatState || timestamp > (lobby.chatState.timestamp || 0)) {
           lobby.chatState = { senderName, text, timestamp };
           await lobby.save();
       }
    } else if (action === 'emote') {
       if (!lobby.emoteState || timestamp > (lobby.emoteState.timestamp || 0)) {
           lobby.emoteState = { senderId, emote, timestamp };
           await lobby.save();
       }
    } else {
       // Allow 'typing' action to update even if timestamps are close, to keep it fluid
       if (!lobby.gameState || timestamp >= (lobby.gameState.timestamp || 0)) {
           lobby.gameState = { action, targetId, timestamp, input };
           await lobby.save();
       }
    }
    
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
