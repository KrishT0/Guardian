import CryptoJS from "crypto-js";
import User from "../models/User.js";
import Vault from "../models/Vault.js";
import jwt from 'jsonwebtoken';
import { AuthenticationError } from "apollo-server-core";
import {} from 'dotenv/config'
import mongoose from "mongoose";
import Tokens from "../models/Tokens.js";
import { verifyEmail } from '../utils/email_verify.js';
import SibApiV3Sdk from 'sib-api-v3-sdk';
import Otp from "../models/Otp.js";
const defaultClient = SibApiV3Sdk.ApiClient.instance; 
const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.EMAIL_API_KEY;
export const resolvers={
    Query:{
        vaultData: async(_,n,context)=>{
            if(!context.userId){
                throw Error("You must be logged in.")
            }
            const vaultData=await Vault.find({userId: context.userId}); 
            const result=vaultData.map(v=>{
                return {
                    _id: v._id,
                    name: v.vault.name,
                    email: v.vault.email,
                    websiteUrl: v.vault.websiteUrl,
                    password: v.vault.password
                }
            })
            return result;
        }
    },
    Mutation:{
        register : async(_,{userNew})=>{
            if(!verifyEmail(userNew.email)){
                // console.log(verifyEmail(userNew.email))
                throw Error("Invalid details");
            }
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
            if(!verifyEmail(userNew.email)){
                throw Error("Invalid details");
            }
            const user = await User.findOne({email : userSignin.email });
            if (!user) throw new AuthenticationError("User dosen't exists with that email")
            const hashedPassword=CryptoJS.SHA256(userSignin.master_password,).toString(CryptoJS.enc.Base64);
            const doMatch = hashedPassword===user.master_password;
            if (!doMatch) throw new AuthenticationError("email or password is invalid")
            const token = jwt.sign({ userId: user._id },process.env.JWT_SECRET,{expiresIn: '30m'})
            const dataToken=new Tokens({
                token: token,
                userId: user._id
            })
            await dataToken.save();
            return { token }
        },
        logout: async(_, { userEmail })=>{
            if(!verifyEmail(userNew.email)){
                throw Error("Invalid details");
            }
            const user= await User.findOne({email : userEmail });
            if(!user) throw new AuthenticationError("No such user exists.");
            const userToken = await Tokens.findOne({userId: user._id});
            if (!userToken) throw new AuthenticationError("You are not logged in.")
            await userToken.deleteOne();
            return "User logged out successfully"
        },
          createVaultDoc: async(_,{vaultDoc},context)=>{
            if(!context.userId){
                throw Error("You must be logged in.")
            }
            if(!verifyEmail(vaultDoc.email)){
                throw Error("Invalid details");
            }
            const user = await Tokens.findOne({email : vaultDoc.email});
             
             const updatedData={
                userId: context.userId,
                vault: {
                    ...vaultDoc,
                },
                _id: new mongoose.Types.ObjectId()
             }
             try{               
                    const vault=new Vault(updatedData);
                    await vault.save();
                    return {
                    message: "Password added successfully",
                    data: {
                        _id: updatedData._id
                    }
                };
             }catch(err){
                return {
                    message: err,
                }
             } 
        },
        updateVaultDoc:async (_,{vaultDoc},context)=>{
            const id=new mongoose.Types.ObjectId(vaultDoc._id);
            if(!context.userId){
                throw Error("You must be logged in.")
            }
            const editedData=vaultDoc.vault;
            let updateData = {};
            if (editedData.email) updateData['vault.email'] = editedData.email;
            if (editedData.password) updateData['vault.password'] = editedData.password;
            if (editedData.name) updateData['vault.name'] = editedData.name;
            if (editedData.websiteUrl) updateData['vault.websiteUrl'] = editedData.websiteUrl;

           const res= await Vault.findOneAndUpdate({_id: id},{$set: updateData},{new: true})
            return "Updated Successfully"
        },
        resetPassword: async (_,{userEmail})=>{
            const apiInstance=new SibApiV3Sdk.TransactionalEmailsApi();
            const sender={
                email: "guardian@gmail.com",
                name: "Your guardians",
            };
            const reciever=[
                {
                    email: userEmail,
                }
            ];
            try{
                const code=Math.floor(100000 + Math.random() * 900000);
                const otp=new Otp({
                    userEmail: userEmail,
                    otp: code
                })
                await otp.save();
                const sendEmail=await apiInstance.sendTransacEmail({
                    sender,
                    to: reciever,
                    subject: "Reset Password",
                    textContent: `Please reset your password with this otp:- ${code}. It is only valid for 5 mins.`
                })
                return {
                    message: "Email send",
                    data: {
                        id: sendEmail
                    },
                }
            }catch(error){
                return {
                    message: "Error in sending mail",
                }
            }
        },
        verifyOtp: async(_,{otpCredentials})=>{
            if(!otpCredentials){
                throw Error("Invalid Data");
            }
            const user = await Otp.findOne({userEmail : otpCredentials.email});
            if(!user){
                throw Error("Invalid Data");
            }
            if(user.otp !== otpCredentials.otp){
                throw Error("Incorrect otp");
            }
            return {
                message: "Otp verified successfully"
            }
        },
        updatePassword: async(_,{userDetails}) => {
            if(!userDetails){
                throw Error("Invalid Data");
            }
            try{
                console.log(userDetails.email);
                const user = await User.findOne({email : userDetails.email });
                if(!user){
                    throw Error("Invalid Data");
                }
                const hashedPassword=CryptoJS.SHA256(userDetails.master_password).toString(CryptoJS.enc.Base64);
                user.master_password=hashedPassword;
                await user.save();
            }catch(error){
                return {
                    message: error,
                }
            }
            return {
                message: "Password updates successfully"
            }
        }
    }
}