import { users } from "../fake.js";
// import {SHA256} from 'crypto-js'
import CryptoJS from "crypto-js";
import User from "../models/User.js";
import Vault from "../models/Vault.js";
import jwt from 'jsonwebtoken';
import { AuthenticationError } from "apollo-server-core";
import {} from 'dotenv/config'
export const resolvers={
    Query:{
        users: ()=>users
    },
    Mutation:{
        register : async(_,{userNew})=>{
            const user=await User.findOne({email : userNew.email })
            if(user){
                throw Error("User already exists");
            }
            const hashedPassword=CryptoJS.SHA256(userNew.master_password).toString(CryptoJS.enc.Base64);
            const newUser=new User({
                ...userNew,
                master_password: hashedPassword
            })
            return await newUser.save();
        },
        login: async (_, { userSignin }) => {
            const user = await User.findOne({email : userSignin.email });
            if (!user) throw new AuthenticationError("User dosen't exists with that email")
            const hashedPassword=CryptoJS.SHA256(userSignin.master_password,).toString(CryptoJS.enc.Base64);
            console.log(userSignin.master_password,user.master_password)
            const doMatch = hashedPassword===user.master_password;
            if (!doMatch) throw new AuthenticationError("email or password is invalid")
            const token = jwt.sign({ userId: user._id },process.env.JWT_SECRET)
            return { token }
        },
          createVaultDoc: async(_,{vaultDoc},context)=>{
            if(!context.userId){
                throw Error("You must be logged in.")
            }
             
             const vault=new Vault(vaultDoc);
             await vault.save();
             return "Password added successfully";
        }
    }
}