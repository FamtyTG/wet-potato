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
  status: { type: String, default: 'waiting' },
  createdAt: { type: Date, default: Date.now, expires: 86400 } // Auto-delete in 24h
});

const Lobby = mongoose.models.Lobby || mongoose.model('Lobby', LobbySchema);

export default async function (req, res) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');
  const { lobbyCode, hostId, hostName } = req.body;

  try {
    await connectToDatabase();
    // Create lobby in MongoDB
    const lobby = await Lobby.create({
      code: lobbyCode.toUpperCase(),
      hostId: hostId.toString(),
      players: [{ 
        id: hostId.toString(), 
        name: hostName, 
        isBot: false 
      }]
    });
    
    res.status(200).json(lobby);
  } catch (err) {
    console.error('Create Lobby Error:', err);
    res.status(500).json({ error: err.message });
  }
}
