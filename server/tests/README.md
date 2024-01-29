# integration-tests &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/master/LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/escobard/cloud-apps#pull-requests)

An integration test boilerplate, designed as a starting point for your API tests, built with JavaScript ES6+, Jest and Supertest. Forked from  [escobard/integration-tests](https://github.com/escobard/integration-tests).

## Quickstart

### Run test application with NPM

[Node.js v20.9.0+](https://nodejs.org/en/) must be installed.

The following npm scripts are available:

### Run a single test

`npm run test nameOfTestFile`

### Run all available tests

`npm run test`

### Run tests in order

Jest will run tests in the order outlined within [/tests/testInOrder.test.js](/tests/testInOrder.test.js).

`npm start`

### Run tests in watch mode

Re-reruns tests when a test file is updated. It is recommended to use watch mode when developing tests. Find out more by reading through [Jest's watch mode documentation](https://jestjs.io/docs/en/cli#--watch).

### Run tests in a Docker container

[Docker](https://www.docker.com/) must be installed. Use this approach if you want to run the tests in a container, without installing Node.js. It is common to use this approach in a CI/CD pipeline.

`docker build -t your-user-name/integration-tests:latest -f docker/Dockerfile.ci .`
`docker run --name integration-tests -t your-user-name/integration-tests:latest`

## Tools and frameworks

[Node.js](https://nodejs.org/en)  
[Jest](https://jestjs.io/)  
[Supertest](https://www.npmjs.com/package/supertest)    
[Docker](https://www.docker.com/)

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
