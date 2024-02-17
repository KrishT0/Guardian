import { guardian_encrypt } from 'guardian-vte';
import CryptoJS from 'crypto-js';
import User from '../models/User.js';
import Vault from '../models/Vault.js';
import jwt from 'jsonwebtoken';
import { AuthenticationError } from 'apollo-server-core';
import {} from 'dotenv/config';
import mongoose from 'mongoose';
import Tokens from '../models/Tokens.js';
import { verifyEmail } from '../utils/email_verify.js';
export const resolvers = {
  Query: {
    vaultData: async (_, n, context) => {
      if (!context.userId) {
        throw Error('You must be logged in.');
      }
      const vaultData = await Vault.find({ userId: context.userId });
      const result = vaultData.map((v) => {
        if (v.vault.phone_number) {
          return {
            _id: v._id,
            name: v.vault.name,
            email: v.vault.email,
            phone_number: v.vault.phone_number,
            password: v.vault.password,
          };
        } else {
          return {
            _id: v._id,
            name: v.vault.name,
            email: v.vault.email,
            password: v.vault.password,
          };
        }
      });
      return result;
    },
  },
  Mutation: {
    register: async (_, { userNew }) => {
      if (!verifyEmail(userNew.email)) {
        throw Error('Invalid details');
      }
      const user = await User.findOne({ email: userNew.email });
      if (user) {
        throw Error('User already exists');
      }
      const hashedPassword = CryptoJS.SHA256(userNew.master_password).toString(
        CryptoJS.enc.Base64
      );
      const newUser = new User({
        ...userNew,
        master_password: hashedPassword,
      });
      return await newUser.save();
    },
    login: async (_, { userSignin }) => {
      if (!verifyEmail(userNew.email)) {
        throw Error('Invalid details');
      }
      const user = await User.findOne({ email: userSignin.email });
      if (!user)
        throw new AuthenticationError("User dosen't exists with that email");
      const hashedPassword = CryptoJS.SHA256(
        userSignin.master_password
      ).toString(CryptoJS.enc.Base64);
      const doMatch = hashedPassword === user.master_password;
      if (!doMatch)
        throw new AuthenticationError('email or password is invalid');
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: '30m',
      });
      const dataToken = new Tokens({
        token: token,
        userId: user._id,
      });
      await dataToken.save();
      return { token };
    },
    logout: async (_, { userEmail }) => {
      if (!verifyEmail(userNew.email)) {
        throw Error('Invalid details');
      }
      const user = await User.findOne({ email: userEmail });
      if (!user) throw new AuthenticationError('No such user exists.');
      const userToken = await Tokens.findOne({ userId: user._id });
      if (!userToken) throw new AuthenticationError('You are not logged in.');
      await userToken.deleteOne();
      return 'User logged out successfully';
    },
    createVaultDoc: async (_, { vaultDoc }, context) => {
      if (!context.userId) {
        throw Error('You must be logged in.');
      }
      if (!verifyEmail(vaultDoc.email)) {
        throw Error('Invalid details');
      }
      const user = await Tokens.findOne({ email: vaultDoc.email });

      const updatedData = {
        userId: context.userId,
        vault: {
          ...vaultDoc,
        },
        _id: new mongoose.Types.ObjectId(),
      };
      try {
        const vault = new Vault(updatedData);
        await vault.save();
        return {
          message: 'Password added successfully',
          data: {
            _id: updatedData._id,
          },
        };
      } catch (err) {
        return {
          message: err,
        };
      }
    },
    updateVaultDoc: async (_, { vaultDoc }, context) => {
      const id = new mongoose.Types.ObjectId(vaultDoc._id);
      if (!context.userId) {
        throw Error('You must be logged in.');
      }
      const editedData = vaultDoc.vault;
      if (editedData.password) {
        const container = [];
        const key =
          '10000000111001111110011011011101010001111100101100000101100011101010000111011001110110001100111010100010';
        const encrypted_password = guardian_encrypt(
          editedData.password,
          key,
          container
        );
        editedData.password = encrypted_password;
      }
      let updateData = {};
      if (editedData.email) updateData['vault.email'] = editedData.email;
      if (editedData.password)
        updateData['vault.password'] = editedData.password;
      if (editedData.name) updateData['vault.name'] = editedData.name;
      if (editedData.phone_number)
        updateData['vault.phone_number'] = editedData.phone_number;

      const res = await Vault.findOneAndUpdate(
        { _id: id },
        { $set: updateData },
        { new: true }
      );
      return 'Updated Successfully';
    },
  },
};
