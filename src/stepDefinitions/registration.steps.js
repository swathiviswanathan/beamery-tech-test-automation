import { Given, When, Then } from "cucumber";
import HomePage from "../pages/home.page";
import CreateAcc from "../pages/createAccount.page";
import Authentication from "../pages/authentication.page";
import AccOverview from "../pages/accountOverview.page";

Given(/^the home page of the e-commerce shopping is opened$/, () => {
  HomePage.openHomePage();
  HomePage.verifyHomePage();
  browser.errMessageKeysArray = Array();
  browser.userDetails = Object();
});

When(/^I click the signin button on the homepage$/, () => {
  HomePage.clickHomePageSignin();
});

Then(/^the Authentication page must be displayed$/, () => {
  Authentication.verifyAuthenticationPage();
});

When(/^I enter ([^"]*) email id$/, (emailType) => {
  Authentication.createEmailAccount(emailType);
});

Then(
  /^an appropriate error message for ([^"]*)? email Id must be displayed$/,
  (emailType) => {
    Authentication.verifyErrorMessage(emailType);
  }
);

When(/^I click on create account$/, () => {
  Authentication.clickCreateAccount();
});

Then(/^the create an account page must be displayed$/, () => {
  CreateAcc.verifyCreateAnAccPage();
});

When(/^I select a title$/, () => {
  CreateAcc.selectTitle();
});

When(/^I enter ([^"]*) in ([^"]*) field$/, (input, fieldType) => {
  if (input != "" && input != null) {
    if (fieldType.includes("firstname")) {
      CreateAcc.enterFirstName(input);
    } else if (fieldType.includes("lastname")) {
      CreateAcc.enterLastName(input);
    } else if (fieldType.includes("password")) {
      CreateAcc.enterPassword(input);
    } else if (fieldType.includes("address")) {
      CreateAcc.enterAddress(input);
    } else if (fieldType.includes("city")) {
      CreateAcc.enterCity(input);
    } else if (fieldType.includes("postcode")) {
      CreateAcc.enterPostCode(input);
    } else if (fieldType.includes("mobile")) {
      CreateAcc.enterHomePhone();
      CreateAcc.enterMobilePhone(input);
    }
  } else {
    browser.errMessageKeysArray.push(fieldType);
  }
});

When(/^I select the DOB$/, () => {
  CreateAcc.selectDOB();
});

When(/^I signup for the newsletter$/, () => {
  CreateAcc.optInNewsLetter();
});

When(/^I select the special offers$/, () => {
  CreateAcc.optInSpecialOffers();
});

When(/^I enter ([^"]*) for Firstname address field$/, (input) => {
  CreateAcc.enterAddressFirstName(input);
});

When(/^I enter ([^"]*) for Lastname address field$/, (input) => {
  CreateAcc.enterAddressLastName(input);
});

When(/^I enter the company name$/, () => {
  CreateAcc.enterCompanyName();
});

When(/^I enter the second line address$/, () => {
  CreateAcc.enterSecondaryAddress();
});

When(/^I select ([^"]*) from ([^"]*) dropdown$/, (input, fieldType) => {
  if (input != "" && input != null) {
    CreateAcc.selectState(input);
  } else {
    browser.errMessageKeysArray.push(fieldType);
  }
});

When(/^I select the country$/, () => {
  CreateAcc.selectCountry();
});

When(/^I enter Additional information$/, () => {
  CreateAcc.addInformation();
});

When(/^I enter the home phone number$/, () => {
  CreateAcc.enterHomePhone();
});

When(/^I enter address alias$/, () => {
  CreateAcc.enterAddressAlias();
});

When(/^I click on register button$/, () => {
  CreateAcc.clickRegister();
});

Then(/^the account creation must successfuly complete$/, () => {
  AccOverview.verifyAccOverviewPage();
});

Then(
  /^error messages for all mandatory fields must be displayed in the page$/,
  () => {
    CreateAcc.verifyAllPossibleErrMessages();
  }
);

Then(
  /^appropriate error messages for the missed out fields must be displayed$/,
  () => {
    CreateAcc.verifyMandatoryFieldErrors();
  }
);

When(/^I click on signout button$/, () => {
  AccOverview.signOut();
});

When(/^the home page of the e-commerce shopping site must be opened$/, () => {
  Authentication.verifyAuthenticationPage();
});
