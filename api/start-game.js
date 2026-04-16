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
});

const Lobby = mongoose.models.Lobby || mongoose.model('Lobby', LobbySchema);

export default async function (req, res) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');
  const { lobbyCode, hostId } = req.body;

  try {
    await connectToDatabase();
    const lobby = await Lobby.findOne({ code: lobbyCode.toUpperCase() });

    if (!lobby) return res.status(404).json({ error: 'Lobby not found' });
    if (lobby.hostId !== hostId.toString()) return res.status(403).json({ error: 'Only host can start the game' });
    if (lobby.players.length < 2) return res.status(400).json({ error: 'Need at least 2 players to start' });

    lobby.status = 'playing';
    await lobby.save();

    res.status(200).json({ status: 'playing' });
  } catch (err) {
    console.error('Start Game Error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
