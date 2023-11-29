# Database

## Quickstart 

[Docker](https://www.docker.com/) is required. [Node.js v14+](https://nodejs.org/en/) is optional.

Run the following commands to build & run a PostgreSQL database on a Docker container, available on `localhost:5432`:

`docker build -t yourname/yourappname:latest -f docker/Dockerfile .`

`docker run --name docker_postgres -e POSTGRES_PASSWORD=password -p 5432:5432 -t yourname/yourappname:latest`

## Scripts

### Recommended - Start PostgreSQL & pgAdmin with Docker Compose

Run:

`docker-compose up`

Navigate to `localhost:8080` to browse the database.

Login to pgadmin with the username and password in the [Docker Compose YAML](compose.yml).

Set up a connection to the database, using the container name as the host, container port as the port and username / password in the [Docker Compose YAML](compose.yml).

For more detailed instructions, feel free to read through [Running PostgreSQL with Docker](https://towardsdatascience.com/how-to-run-postgresql-and-pgadmin-using-docker-3a6a8ae918b5).

### Run Docker commands with NPM scripts

[Node.js v14+](https://nodejs.org/en/) is required.

#### PostgreSQL with Docker

`npm run docker`

#### Docker compose 

`npm run start`

## Data migrations

[Node.js v14+](https://nodejs.org/en/) is required. A valid `.env` is required. Refer to `.env.example` for the required environment variables. 

With the following commands, you can quickly populate environment variables from `.env` within a bash terminal:

```
set -a && source .env && set +a
```

Create a migration file by running:

`npm run migrate create my first migration`

Navigate to `/miration/my-first-migration.js`.

Add SQL query to execute under `exports.up` and the SQL query to execute in case of a rollback under `exports.down`. Refer to other migrations files within the `/migrations` directory for examples.

Run `npm run migrate-up` to execute the migration.

For more detailed instructions, feel free to read through the [official node-pg-migrate docs](https://salsita.github.io/node-pg-migrate/#/).

## Libraries, Frameworks & Tools

[Postgres](https://www.postgresql.org/)

[Docker](https://www.docker.com/)

[node-pg-migrate](https://www.npmjs.com/package/node-pg-migrate)
