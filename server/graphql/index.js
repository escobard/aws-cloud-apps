import express from 'express';
import cors from 'cors'

import { ApolloServer } from '@apollo/server';
import { makeExecutableSchema } from "@graphql-tools/schema";
import { expressMiddleware } from "@apollo/server/express4";

import typeDefs from "./typeDefs.js";
import resolvers from "./resolvers.js";


const app = express();

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    schema
});

await server.start();
app.use('/graphql', cors(), express.json(), expressMiddleware(server));

const expressServer = app.listen({ port: 4000 }, async () => {
    console.info(`🚀 Server ready at http://localhost:4000/graphql`);
});

// Requests to `http://localhost:4000/health` now return "Okay!"
app.get('/', (req, res) => {
    res.status(200).send('Healthy!');
});

export { expressServer };