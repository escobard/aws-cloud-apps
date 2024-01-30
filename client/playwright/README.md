# Playwright end-to-end tests

## Quickstart

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

Build the docker image with the following command:

`docker build -t yourusername/e2e:latest -f docker/Dockerfile .`

Run the docker image with the following command:

`docker run --name e2e -t yourusername/e2e:latest`