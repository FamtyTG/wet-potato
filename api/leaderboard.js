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

const UserStatSchema = new mongoose.Schema({
  userId: String,
  name: String,
  wins: { type: Number, default: 0 }
});
const UserStat = mongoose.models.UserStat || mongoose.model('UserStat', UserStatSchema);

export default async function (req, res) {
  try {
    await connectToDatabase();
    // Get top 20 players by wins
    const topPlayers = await UserStat.find().sort({ wins: -1 }).limit(20);
    res.status(200).json(topPlayers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
