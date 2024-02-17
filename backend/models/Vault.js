import mongoose from 'mongoose';
const Schema=mongoose.Schema;
const vaultSchema=new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    vault: 
        {
            email: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required : true,
            },
            phone_number: {
                type: String
            },
            password: {
                type: String,
                required: true,
            },
        }
    
},{timestamps: true})
export default mongoose.model("Vault",vaultSchema);