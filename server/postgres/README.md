# Database

TODO - re-write document and split quickstart into 3 - build / run database, run database migrations, run database tests

## Quickstart

[Node.js v20.9.0 and above](https://nodejs.org/en/) and [Docker](https://www.docker.com/) are required.

A valid `.env` file is required. Refer to `.env.example` for the required environment variables.

With the following commands, you can quickly populate environment variables from `.env` within a bash terminal:

```
set -a && source .env && set +a
```

### Build and run PostgreSQL database 

### Run database migrations

### Run Data unit tests

Runs unit tests leveraging [Jest]() and [pg]() npm libraries. Tests validate that data migrations and common SQL queries work as expected.

#### Run all tests

`npm run test`

#### Run tests in watch mode (development)

`npm run test:watch`

## Core concepts

### Data migrations

Create a migration file by running:

`npm run migrate create my first migration`

Navigate to `/miration/my-first-migration.js`.

Add SQL query to execute under `exports.up` and the SQL query to execute in case of a rollback under `exports.down`. Refer to other migrations files within the `/migrations` directory for examples.

Run `npm run migrate-up` to execute the migration.

For more detailed instructions, feel free to read through the [official node-pg-migrate docs](https://salsita.github.io/node-pg-migrate/#/).

### Recommended - Start PostgreSQL & pgAdmin with Docker Compose

Run:

`docker-compose up`

Navigate to `localhost:8080` to browse the database.

Login to pgadmin with the username and password in the [Docker Compose YAML](compose.yml).

Set up a connection to the database, using the container name as the host, container port as the port and username / password in the [Docker Compose YAML](compose.yml).

For more detailed instructions, feel free to read through [Running PostgreSQL with Docker](https://towardsdatascience.com/how-to-run-postgresql-and-pgadmin-using-docker-3a6a8ae918b5).

### Run Docker commands with NPM scripts

#### PostgreSQL with Docker

`npm run docker`

#### Docker compose 

`npm run start`


## Libraries, Frameworks & Tools

[Postgres](https://www.postgresql.org/)

[Docker](https://www.docker.com/)

[node-pg-migrate](https://www.npmjs.com/package/node-pg-migrate)
