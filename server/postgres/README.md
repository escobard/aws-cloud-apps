# Database

## Quickstart 

[Docker](https://www.docker.com/) is required. [Node.js v14+](https://nodejs.org/en/) is optional.

Run the following commands to build & run a PostgreSQL database on a Docker container, available on `localhost:5432`:

`docker build -t yourname/yourappname:latest -f docker/Dockerfile .`

`docker run --name docker_postgres -e POSTGRES_PASSWORD=password -p 5432:5432 -t yourname/yourappname:latest`

## Scripts

### Recommended - Start PostgreSQL & pgAdmin with Docker Compose

`docker-compose up`

Navigate to `localhost:8080` to browse the database.

Login to pgadmin with the username and password in the [Docker Compose YAML](compose.yml).

Set up a connection to the database, using the container name as the host, container port as the port and username / password in the [Docker Compose YAML](compose.yml).

For more detailed instructions, feel free to read through [Running PostgreSQL with Docker](https://towardsdatascience.com/how-to-run-postgresql-and-pgadmin-using-docker-3a6a8ae918b5).

### Run Docker commands with NPM scripts

#### PostgreSQL with 

`npm run docker`

#### Docker compose 

`npm run start`

## Libraries, Frameworks & Tools

[Postgres](https://www.postgresql.org/)

[Docker](https://www.docker.com/)
