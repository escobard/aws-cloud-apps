# UI

A simple React User Interface (UI) to interact with Notes CRUD operations. This application expects the project's GraphQL API to be available on `localhost:4000` and the PostgreSQL database available on `localhost:5000`.

## Quickstart

[Node.js v20+](https://nodejs.org/en/) is required.

A valid `.env` is required. Refer to `.env.example` for the environment variables that the application expects.

With the following commands, you can quickly populate environment variables from `.env` within a bash terminal:

```
set -a && source .env && set +a
```

1. `npm install`
2. `npm start`

## Scripts

### Development

Run the application in development mode with hot reload:

`npm start`

### Unit tests

Run all available unit tests:

`npm test`

### Unit tests with coverage

`npm run test:coverage`

### Unit test watch mode (development)

Run unit tests with hot reload for development:

`npm run test:watch`

### Lint

`npm run lint`

### Production

`npm run build && npm start`

### With Docker

[Docker](https://www.docker.com/) is required.

Build and run the UI with the following command:

`docker build --build-arg NEXT_PUBLIC_GRAPHQL_API -t your-docker-account/ui:latest -f docker/Dockerfile .`

`docker run --name ui -p 3000:3000 -t your-docker-account/ui:latest`

## Libraries, Frameworks & Tools

[React](https://reactjs.org/)   
[Create React App](https://create-react-app.dev/docs/getting-started/)    
[Jest](https://mochajs.org/)   
[Next.js](https://nextjs.org/)   
[Docker](https://www.docker.com/)