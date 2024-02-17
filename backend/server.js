
import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone';
import {ApolloServerPluginLandingPageGraphQLPlayground} from 'apollo-server-core';
import {typeDefs} from './schemas/schema.js';
import mongoose from 'mongoose';
import {mongo_url} from './utils/url.js';
await mongoose.connect(mongo_url);
import jwt from 'jsonwebtoken';
import {resolvers} from './resolvers/resolve.js';
import {parse, print, getIntrospectionQuery} from 'graphql';
import Tokens from './models/Tokens.js';
// format introspection query same way as apollo tooling do
const introspectionQuery = print(parse(getIntrospectionQuery()));
const server=new ApolloServer({

    typeDefs,
    resolvers,
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground
    ],
    introspection: true
})
const { url } = await startStandaloneServer(server, {
    context: async({ req }) => {
        const isIntrospectionQuery = req.body && req.body.operationName === 'IntrospectionQuery';

        if (isIntrospectionQuery) {
            return {};
        }
        if(!req.headers.authorization){
            return {
                userId: null
            }
        }
        console.log(req.headers.authorization);
        const token = req.headers.authorization || '';
        console.log(token);
        const {userId} = jwt.verify(token,process.env.JWT_SECRET);
        const userToken = await Tokens.findOne({userId: userId});
        console.log(userToken);
        if(!userToken){
            return { userId: "" };
        };
        return {userId};
    },
    listen: { port: 4000 },
});
  console.log(`🚀  Server ready at ${url}`);