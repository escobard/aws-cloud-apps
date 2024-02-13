# Playwright end-to-end tests

An end to end test boilerplate, designed as a starting point for your end to end tests, built with JavaScript and Playwright. This application expects the project's UI to be available on `localhost:3000`, API to be available on `localhost:4000` and PostgreSQL to be available on `localhost:5432`.

## Quickstart

[Node.js v20.9.0 or higher](https://nodejs.org/en/) is required. [Playwright](https://playwright.dev/) must be installed as a global dependency. To install playwright globally, run `npx -y playwright@1.41.1 install --with-deps`.

Install and run the application with the following commands:

`npm install`
`npm start`

### Run tests

`npx playwright test`

### Run matching test files

`npx playwright test nameOfYourTestFile`

### Show test reports

`npx playwright show-report`

### Run tests in UI mode

Recommended for development and debugging. 

`npx playwright test --ui`

### Run tests in a Docker container

Use this approach if you want to run the tests in a container, without installing Node.js. It is common to use this approach in a CI/CD pipeline.

Build the docker image: `docker build -t yourusername/e2e:latest -f docker/Dockerfile .`

Run the docker image: `docker run --name e2e -t yourusername/e2e:latest`