import mongoose from "mongoose";
import { users } from "../fake.js";
const User=mongoose.model('User');
export const resolvers={
    Query:{
        users: ()=>users
    },
    Mutation:{
        signup : async(_,userNew)=>{
            const user=await User.findOne({email : userNew.email })
            if(!user){
                throw Error("User already exists");
            }
            
        }
    }
}