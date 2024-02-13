# PostgreSQL Database

A simple PostgreSQL database to serve as the source of persistence for the project.

## Quickstart

[Docker](https://www.docker.com/) is required.

Install and run the application with the following command:

`docker-compose -f compose.yml up`

Navigate to `localhost:8080` to browse the database.

Login to pgadmin with the username and password in the [Docker Compose YAML](compose.yml).

Set up a connection to the database, using the container name as the host, container port as the port and username / password in the [Docker Compose YAML](compose.yml).

For step-by-step instructions, feel free to read through [Running PostgreSQL with Docker](https://towardsdatascience.com/how-to-run-postgresql-and-pgadmin-using-docker-3a6a8ae918b5).

## Scripts

### Docker

#### Build and run PostgreSQL database

Build the docker image: `docker build -t your-docker-account/postgres:latest -f Dockerfile .`

Run the docker image: `docker run --name postgres -e POSTGRES_PASSWORD=postgres_password -p 5432:5432 -t your-docker-account/postgres:latest`

#### Build and run PostgreSQL database with PGAdmin

`docker-compose -f compose.yml up`.

#### Build and run PostgreSQL database and then run migrations

`docker-compose -f migrations.yml up`

#### Build and run PostgreSQL database, then run migrations and unit tests

`docker-compose -f migration-tests.yaml up --exit-code-from migration_tests`

### NPM

[Node.js v20.9.0 or higher](https://nodejs.org/en/) is required.

A valid `.env` file is required. Refer to `.env.example` for the required environment variables.

With the following commands, you can quickly populate environment variables from `.env` within a bash terminal:

```
set -a && source .env && set +a
```

#### Data migrations

Create a migration file by running:

`npm run migrate create my first migration`

Navigate to `/migration/my-first-migration.js`.

Add SQL query to execute under `exports.up` and the SQL query to execute in case of a rollback under `exports.down`. Refer to other migrations files within the `/migrations` directory as examples.

Run `npm run migrate-up` to execute the migration.

Run `npm run migrate-down` to roll back the most recent migration.

For more detailed instructions, feel free to read through the [official node-pg-migrate docs](https://salsita.github.io/node-pg-migrate/#/).

#### Run Data unit tests

Runs unit tests leveraging [Jest](https://jestjs.io/) and [pg](https://www.npmjs.com/package/pg) npm libraries. Tests validate that data migrations and common SQL queries work as expected.

`npm run test`

#### Run tests in watch mode (development)

`npm run test:watch`

## Libraries, Frameworks & Tools

[Postgres](https://www.postgresql.org/)     
[Docker](https://www.docker.com/)     
[pgAdmin](https://www.pgadmin.org/)    
[node-pg-migrate](https://www.npmjs.com/package/node-pg-migrate)   
[Jest](https://jestjs.io/)   
[pg](https://www.npmjs.com/package/pg)