import mongoose from 'mongoose';
const Schema=mongoose.Schema;
const vaultSchema=new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    vault: [
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
                type: Schema.Types.Number
            },
            password: {
                type: String,
                required: true,
            },
        }
    ]
},{timestamps: true})
export default mongoose.model("Vault",vaultSchema);