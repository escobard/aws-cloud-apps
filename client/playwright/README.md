# Playwright end-to-end tests

## Quickstart

[Node.js v20.9.0 or higher](https://nodejs.org/en/) is required. [Playwright](https://playwright.dev/) must be installed as a global dependency. To install playwright globally, run `npx -y playwright@1.41.1 install --with-deps`.

### Run tests

`npx playwright test`

### Run matching files

`npx playwright test nameOfYourTestFile`

### Show test reports

`npx playwright show-report`

### Run tests in UI mode

Recommended for real time and step by step test debugging. 

`npx playwright test --ui`

### Run tests with Docker

Build the docker image: `docker build -t yourusername/e2e:latest -f docker/Dockerfile .`

Run the docker image: `docker run --name e2e -t yourusername/e2e:latest`