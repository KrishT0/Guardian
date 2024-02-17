import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  master_password: {
    type: String,
    required: true,
  },
  vault: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vault',
  },
});
export default mongoose.model('User', userSchema);
