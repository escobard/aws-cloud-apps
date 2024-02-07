# cloud-apps-2023 &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/master/LICENSE) [![CircleCI Status](https://circleci.com/gh/escobard/cloud-apps-2023.svg?style=shield&circle-token=44b8bfb398b6a0882a7ba006c3643dc12c38e81d)](https://app.circleci.com/pipelines/github/escobard/cloud-apps-2023) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/escobard/cloud-apps-2023#pull-requests) 


A simple, responsive web application to take notes, built with JavaScript, designed as starting point to build complex web applications. Each application in the system can be run independently with Docker or npm. Unit, integration and end-to-end (e2e) tests are available. Development, release, integration and e2e test environments can be simulated with Docker Compose. 

This project is a modernized version of [cloud-apps](https://github.com/escobard/cloud-apps), deployed to AWS.

A new note can be created in a few simple steps:

#### 1. Add note

![Add note](docs/images/add_note.png)

#### 2. Create and save note

![Create note](docs/images/create_note.png)

#### 3. New note created

![Note created](docs/images/note_created.png)

The diagram below outlines the network created by Docker Compose for development and release environments, including application connections, ports, routes and tools:

![System overview](docs/diagrams/system_overview.png)

# Table of contents

* [Quickstart](https://github.com/escobard/cloud-apps?tab=readme-ov-file#quickstart)
* [Technical Highlights](https://github.com/escobard/cloud-apps?tab=readme-ov-file#technical-highlights)
* [Application docs](https://github.com/escobard/cloud-apps?tab=readme-ov-file#application-docs)
* [How to contribute](https://github.com/escobard/cloud-apps?tab=readme-ov-file#how-to-contribute)
* [Tools and frameworks](https://github.com/escobard/cloud-apps?tab=readme-ov-file#tools-and-frameworks)
* [License](https://github.com/escobard/cloud-apps?tab=readme-ov-file#license)

## Quickstart

### Recommended - Run environments with Docker Compose

[Docker](https://www.docker.com/) must be installed.

#### Development
`docker-compose -f dev.yaml up`

#### Release
`docker-compose -f release.yaml up`

#### Integration tests
`docker-compose -f integration-tests.yaml up --exit-code-from integration`

#### End to end tests
`docker-compose -f e2e-tests.yaml up --no-attach node-chrome --exit-code-from e2e`

### Run environments with NPM and Docker Compose

[Node.js v20.9.0 or higher](https://nodejs.org/en/) and [Docker](https://www.docker.com/) are required.
        
#### Development        
 `npm run dev`            
  
#### Production        
 `npm run start`   
 
#### Integration tests

`npm run integration-tests`

#### End to End tests

`npm run e2e-tests`

#### Data migrations

`npm run migrations`

#### Data tests

`npm run data-tests`

### Run applications with NPM or Docker

Find detailed instructions on how to run each application within the [Application docs](https://github.com/escobard/cloud-apps?tab=readme-ov-file#application-docs).

## Core concepts

1. [Modernized version of cloud-apps](https://github.com/escobard/cloud-apps?tab=readme-ov-file#container-orchestration-for-scale)
2. Automated database migrations
3. Automated database unit tests
4. End to end tests with Playwright
5. GraphQL to simplify RESTful endpoints

### Modernized version of cloud-apps

As a modernized version of [cloud-apps](https://github.com/escobard/cloud-apps), this project shares the same core concepts, including"

1. [Container orchestration for scale](https://github.com/escobard/cloud-apps?tab=readme-ov-file#container-orchestration-for-scale)
2. [Automated test pyramid](https://github.com/escobard/cloud-apps?tab=readme-ov-file#automated-test-pyramid)
3. [Blueprint for automated tests with CircleCI](https://github.com/escobard/cloud-apps?tab=readme-ov-file#blueprint-for-automated-tests-with-circleci)
4. [Full stack system built with JavaScript](https://github.com/escobard/cloud-apps?tab=readme-ov-file#full-stack-system-built-with-javascript)
5. [Starting point for more complicated use cases](https://github.com/escobard/cloud-apps?tab=readme-ov-file#starting-point-for-more-complicated-use-cases)


## Application docs

[UI](https://github.com/escobard/cloud-apps/blob/master/client/ui)  
[API](https://github.com/escobard/cloud-apps/blob/master/server/api)  
[Database](https://github.com/escobard/cloud-apps/tree/master/server/postgres)  
[Integration tests](https://github.com/escobard/cloud-apps/tree/master/server/tests)  
[End to end tests](https://github.com/escobard/cloud-apps/tree/master/client/tests)

## Tools and frameworks

[Node.js](https://nodejs.org/en)  
[Docker](https://www.docker.com/)     
[Docker Compose](https://docs.docker.com/compose/)  
[CircleCI](https://circleci.com)  
[React](https://react.dev/)  
[Next.js](https://nextjs.org/)
[Express.js](https://expressjs.com/)  
[Swagger](https://swagger.io/)  
[PostgreSQL](https://www.postgresql.org/)  
[Jest](https://jestjs.io/)  
[Supertest](https://www.npmjs.com/package/supertest)    
[Playwright](https://playwright.dev/)

## How to contribute

### Commits

Our commits follow the [Angular commit styleguide](https://gist.github.com/brianclements/841ea7bffdb01346392c). Each commit should be carefully thought out and only contain files affected within the scope of the commit message.

### Branching

A branch's name should reference a story and the type of work being committed.

### Pull Requests

Each pull request must pass a review from another contributor and all automated tests.

### Issues

Feel free to open an issue ticket, please leave a screenshot and a detailed instructions on how to replicate the issue.

## License

This repository is protected under the [MIT License](https://choosealicense.com/licenses/mit/).
