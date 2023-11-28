# PostgreSQL Database

## Quickstart 

[Docker](https://www.docker.com/) is required. [Node.js v14 and above](https://nodejs.org/en/) is optional.

Run the following commands to build & run a PostgreSQL database on a Docker container, available on `localhost:5432`:

`docker build -t yourname/yourappname:latest -f docker/Dockerfile .`

`docker run --name docker_postgres -e POSTGRES_PASSWORD=password -p 5432:5432 -t yourname/yourappname:latest`

### Recommended - Start PostgreSQL & pgAdmin with Docker Compose

`docker-compose -f compose.yml up`

Navigate to `localhost:8080` to browse the database.

Login to pgadmin with the username and password in the [Docker compose yaml](compose.yml).

### Run Docker commands with NPM scripts

#### PostgreSQL with 

`npm run docker`

#### Docker compose 

`npm run start`

## Libraries, Frameworks & Tools

[Postgres](https://www.postgresql.org/)

[Docker](https://www.docker.com/)
