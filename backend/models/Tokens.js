import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const tokenSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
  expireAt: {
    type: Date,
    default: Date.now,
    expires: 1800,
  },
});
export default mongoose.model('Token', tokenSchema);
