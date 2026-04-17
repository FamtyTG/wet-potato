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
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');
  const { userId, name } = req.body;
  if (!userId) return res.status(400).json({ error: 'Missing userId' });

  try {
    await connectToDatabase();
    
    // Find and update or create
    let stat = await UserStat.findOne({ userId: userId.toString() });
    if (!stat) {
      stat = new UserStat({ userId: userId.toString(), name: name || 'Секретный шпион', wins: 1 });
    } else {
      stat.wins += 1;
      if (name) stat.name = name; // Update name to latest
    }
    await stat.save();

    res.status(200).json({ success: true, wins: stat.wins });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
