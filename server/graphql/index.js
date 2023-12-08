import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { makeExecutableSchema } from "@graphql-tools/schema";
import express from 'express';

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

await new Promise((resolve) => app.listen({ port: 4000 }, resolve));

// Our GraphQL server is listening for GraphQL operations
// on `http://localhost:4000/graphql`
console.log(`🚀 Server ready at http://localhost:4000/graphql`);

// Requests to `http://localhost:4000/health` now return "Okay!"
app.get('/health', (req, res) => {
    res.status(200).send('Okay!');
});