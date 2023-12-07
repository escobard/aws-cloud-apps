# API

A simple GraphQL API with CRUD operations for notes.

## Requirements
[Node.js v20+](https://nodejs.org/en/) is required. 

A valid `.env` is required. Refer to `.env.example` for the environment variables that the application expects.

## Quickstart

With the following commands, you can quickly populate environment variables from `.env` within a bash terminal:

```
set -a && source .env && set +a
```

With the environment variables present in your terminal, start the API by running:

`npm start`

## Scripts

### Development mode

To run the API with hot reload and real-time compilation on code updates, start the API by running:

`npm run dev`

### Docker

To run the API with docker, you can build and run the API by running:

`docker build --build-arg DB_HOST --build-arg DB_PORT --build-arg DB_NAME --build-arg DB_USER --build-arg DB_PASSWORD -t escobard/graphql:latest -f docker/Dockerfile .`

`docker run --name graphql -p 4000:4000 -t escobard/graphql:latest`

## Libraries Frameworks 

[GraphQL](https://graphql.org/)

[Apollo Server](https://www.apollographql.com/docs/apollo-server/)

[Knex](https://knexjs.org/)
