# integration-tests &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/master/LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/escobard/cloud-apps#pull-requests)

An integration test boilerplate, designed as a starting point for your API tests, built with JavaScript, Jest and Supertest. Forked from  [escobard/integration-tests](https://github.com/escobard/integration-tests). This application expects the project's API to be available on `localhost:4000` and PostgreSQL to be available on `localhost:5432`.

## Quickstart
[Node.js v20.9.0+](https://nodejs.org/en/) must be installed.

`npm install`
`npm start`

## Scripts

### Run a single test

`npm run test nameOfTestFile`

### Run all available tests

`npm run test`

### Run tests in order

Jest will run tests in the order outlined within [/tests/testInOrder.test.js](/tests/testInOrder.test.js).

`npm start`

### Run tests in watch mode

Run unit tests with hot reload and real-time compilation on code updates:

`npm run test:watch`

### Run tests in a Docker container

[Docker](https://www.docker.com/) is required. 

Use this approach if you want to run the tests in a container, without installing Node.js. It is common to use this approach in a CI/CD pipeline.

Build the docker image: `docker build -t your-user-name/integration-tests:latest -f docker/Dockerfile.ci .`
Run the docker image: `docker run --name integration-tests -t your-user-name/integration-tests:latest`

## Tools and frameworks

[Node.js](https://nodejs.org/en)  
[Jest](https://jestjs.io/)  
[Supertest](https://www.npmjs.com/package/supertest)    
[Docker](https://www.docker.com/)