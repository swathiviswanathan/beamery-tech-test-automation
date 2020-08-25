# Beamery - Automation practice automation framework - Cucumber WebdriverIO

Framework uses:

- webdriver.io
- cucumberjs
- JavaScript

## Installation

Required pacakages are mentioned in package.json file which can be installed using,

    npm install

Please ensure you have node (https://nodejs.org/en/) installed in your machine.

Allure (https://docs.qameta.io/allure/) is used for report generation, which can be installed using

    brew install allure

## Test Execution

Tests are written in BDD format which can be executed using the script below,

    npm run test

Tests are grouped as test suites mentioned in `wdio.config.js`,

    suites: {
      regression: ["./src/features/**/*.feature"],
      happyPaths: ["./src/features/**/registration.feature"],
      unHappyPaths: ["./src/features/**/registrationUnhappyPaths.feature"],
    },

individual test suites can be executed as below

    npx wdio wdio.conf.js --suite happyPaths

### Notes

1. For visual monitoring of execution and to handle website performance issues, the test execution is currently slowed down using `pauseTime` parameter mentioned in `src/testConfig.js`. Currently it is set to 2000ms.

2. The created/used emailID, password and its completion status for every scenario is saved in `src/testData/userDetails.txt` file for later use if required.

3. In case of failures screenshots are captured and can be viewed as part of allure reports. This is achieved using `afterScenario` hooks provided by webdriver.io. Please refer `wdio.config.js` file.

4. For easy reference the execution is recorded and saved as `beamery_execution.gif` & `beamery_allure_report.gif`

## Test Report Generation

Allure, a flexible lightweight multi-language test report tool is used for report generation, running the below script "post execution" will generate HTML report detailing test execution status/

    npm run test-allure

Note: Please trigger this script after one execution completion, as allure requires result details to generate reporter.

## Framework maintenance

For ease of use the project is structured as below,

`src/features/_.feature` - tests written in BDD cucumber format
`src/stepDefinitions/_.step.js` - step definitions for the test steps in feature files
`src/pages/\*.page.js` - page files are created for every webpage that needs to be tested
`src/utils/locators.js` - for easy maintenance, xpaths to web elements are not hardcoded and are kept in this locator file.
`src/testConfig.js` - non-sensitive test data required for execution are placed in this file.

`wdio.conf.js` - all configurations in regards to the automation frameworks are maintained using this file. Reference: https://webdriver.io/docs/configurationfile.html

I believe the other files are self-explanatory and wont be used often relatively.

### Observations on Tech Task website

Please find below few observations I had that I feel worth mentioning.

1. Currently it is possible to change the email ID in Registration page regarldess of what was provided in the previous screen (login page)

2. If the user faced error in registration page, the reloaded page shows only mandatory fields to be re-enterd. Eg: Second address line field is disappeared on error screen.
