import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone';
import {ApolloServerPluginLandingPageGraphQLPlayground} from 'apollo-server-core';
import {typeDefs} from './schemas/schema.js';
import mongoose from 'mongoose';
import {mongo_url} from './utils/url.js';
await mongoose.connect(mongo_url);
import jwt from 'jsonwebtoken';
import {resolvers} from './resolvers/resolve.js';
const server=new ApolloServer({

    typeDefs,
    resolvers,
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground
    ],
    introspection: true
})
const { url } = await startStandaloneServer(server, {
    context: async ({ req }) => {
        const {authorization} = req.headers;
        if(authorization){
            const {userId} = jwt.verify(authorization,process.env.JWT_SECRET);
            return {userId};
        }
    },
    listen: { port: 4000 },
});
  console.log(`🚀  Server ready at ${url}`);