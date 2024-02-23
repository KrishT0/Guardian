import mongoose from 'mongoose';
const Schema=mongoose.Schema;
const otpSchema=new Schema({
    userEmail: {
        type: String,
        required: true
    },
    otp: {
        type: Number,
        required: true,
    },
    expireAt: {
        type: Date,
        default: Date.now,
        expires: 150,
    },
},{timestamps: true})
export default mongoose.model("Otp",otpSchema);