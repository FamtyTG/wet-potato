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
  status: { type: String, default: 'waiting' }
}, { strict: false });

const Lobby = mongoose.models.Lobby || mongoose.model('Lobby', LobbySchema);

export default async function (req, res) {
  const { code } = req.query;
  if (!code) return res.status(400).json({ error: 'Code required' });

  try {
    await connectToDatabase();
    const lobby = await Lobby.findOne({ code: code.toUpperCase() });
    
    if (!lobby) {
      return res.status(404).json({ error: 'Lobby not found' });
    }
    
    res.status(200).json(lobby);
  } catch (err) {
    console.error('Get Lobby Error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
