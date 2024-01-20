import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone';
import {ApolloServerPluginLandingPageGraphQLPlayground} from 'apollo-server-core';
import {typeDefs} from './schemas/schema.js';
import mongoose from 'mongoose';
import {mongo_url} from './utils/url.js';
await mongoose.connect(mongo_url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
import {resolvers} from './resolvers/resolve.js';
const server=new ApolloServer({

    typeDefs,
    resolvers,
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground
    ]
})
const { url } = await startStandaloneServer(server, {
    context: async ({ req }) => ({ token: req.headers.token }),
    listen: { port: 4000 },
  });
  console.log(`🚀  Server ready at ${url}`);