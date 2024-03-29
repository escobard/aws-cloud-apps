# API

A simple GraphQL API with CRUD operations for Notes. This application expects the project's  PostgreSQL database available on `localhost:5000`.

## Quickstart

[Node.js v20+](https://nodejs.org/en/) is required. 

A valid `.env` is required. Refer to `.env.example` for the environment variables that the application expects.

With the following commands, you can quickly populate environment variables from `.env` within a bash terminal:

```
set -a && source .env && set +a
```

With the environment variables present in your terminal, start the API by running:

`npm start`

## Scripts

### Development mode

Run the API with hot reload and real-time compilation on code updates:

`npm run dev`

### Run all available unit tests

`npm run test`

### Run unit tests with coverage

`npm run test:coverage`

### Watch unit tests (development)

Run unit tests with hot reload and real-time compilation on code updates:

`npm run test:watch`

### Docker

[Docker](https://www.docker.com/) is required.

Build and run the API with the following command:

`docker build --build-arg DB_HOST --build-arg DB_PORT --build-arg DB_NAME --build-arg DB_USER --build-arg DB_PASSWORD -t your-docker-account/graphql:latest -f docker/Dockerfile .`

`docker run --name graphql -p 4000:4000 -t your-docker-account/graphql:latest`

## Libraries Frameworks 

[GraphQL](https://graphql.org/)    
[Apollo Server](https://www.apollographql.com/docs/apollo-server/)    
[Knex](https://knexjs.org/)    
[Jest](https://jestjs.io/)    
[Supertest](https://github.com/visionmedia/supertest)     
[Docker](https://www.docker.com/)