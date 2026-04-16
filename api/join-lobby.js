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
  const { lobbyCode, player } = req.body;
  
  try {
    await connectToDatabase();
    // Находим лобби, которое еще не началось
    const lobby = await Lobby.findOne({ code: lobbyCode.toUpperCase(), status: 'waiting' });
    
    if (!lobby) {
      return res.status(404).json({ error: 'Lobby not found or already started' });
    }
    
    // Проверка на дубликаты (чтобы не пушить одного и того же игрока)
    const exists = lobby.players.find(p => p.id === player.id.toString());
    if (!exists) {
      lobby.players.push({
        id: player.id.toString(),
        name: player.name,
        isBot: false
      });
      await lobby.save();
    }
    
    res.status(200).json(lobby);
  } catch (err) {
    console.error('Join Lobby Error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
