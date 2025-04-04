[![e2e cypress test](https://github.com/Andrei-Zayats/js-cypress/actions/workflows/e2e-cypress-tests.yml/badge.svg)](https://github.com/Andrei-Zayats/js-cypress/actions/workflows/e2e-cypress-tests.yml)

# Cypress with JavaScript

## UI tests
Repository on [github](https://github.com/Andrei-Zayats/js-cypress)

### Technologies
- Node.js 22.13.1
- Cypress 14.0.3

### How to run tests

To install all packages after cloning the repository run:
```bash
npm install
```

Add environment variables befor run tests:
```
CYPRESS_USER=tomsmith
CYPRESS_PASSWORD=SuperSecretPassword!
```

If you need video or functionality from https://cloud.cypress.io add environment variables :
```
CYPRESS_KEY=<Record Keys from cloud.cypress.io>
CYPRESS_PROJECT_ID=<Project ID from cloud.cypress.io>
```

Run tests in headless mode:
```bash
npm test
```
Open tests in the Cypress Launchpad:
```bash
npm test:dev
```