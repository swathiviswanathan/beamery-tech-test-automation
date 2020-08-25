import DriverHandler from "../utils/driverHandler";
import { authenticationPageLocators } from "../utils/locators";
import { getRandomInt, getRandomString } from "../utils/helpers";
import {
  emailIdErrMessages,
  headerTexts,
  windowTitles,
} from "../utils/constants";
import {
  registeredEmailId,
  invalidEmailId,
  defaultPassword,
} from "../testConfig";

class Authentication {
  get authenticationHeader() {
    return $(authenticationPageLocators.headerText);
  }

  get createAccErr() {
    return $(authenticationPageLocators.createAccErr);
  }

  get editCreateEmail() {
    return $(authenticationPageLocators.createEmail);
  }

  get btnCreateAcc() {
    return $(authenticationPageLocators.createAccBtn);
  }

  get editEmail() {
    return $(authenticationPageLocators.enterEmail);
  }

  get editPassword() {
    return $(authenticationPageLocators.enterPassword);
  }

  get btnCreateAcc() {
    return $(authenticationPageLocators.createAccBtn);
  }

  get btnSignIn() {
    return $(authenticationPageLocators.signinBtn);
  }

  verifyAuthenticationPage() {
    DriverHandler.verifyWebPageTitle(
      "Authentication Page",
      windowTitles.authenticationPage
    );
    DriverHandler.verifyHeaderText(
      this.authenticationHeader,
      "Authentication Page",
      headerTexts.authenticationPage
    );
  }

  verifyErrorMessage(issueType) {
    let expectedErrMessage = "";
    if (issueType === "duplicate") {
      expectedErrMessage = emailIdErrMessages.duplicateEmail;
    } else {
      expectedErrMessage = emailIdErrMessages.invalidEmail;
    }

    DriverHandler.verifyIfTextDisplayed(
      this.createAccErr,
      "Create Account Error message for - " + issueType,
      expectedErrMessage
    );
  }

  createEmailAccount(emailType = "valid") {
    let emailId;
    if (emailType.includes("invalid")) {
      emailId = invalidEmailId;
    } else if (emailType.includes("existing")) {
      emailId = registeredEmailId;
    } else {
      browser.firstName = getRandomString(5);
      browser.lastName = getRandomString(5);
      emailId = browser.firstName + "@" + browser.lastName + ".com";
    }
    browser.userDetails.emailId = emailId;
    DriverHandler.verifyAndEnter(this.editCreateEmail, "CreateEmail", emailId);
  }

  clickCreateAccount() {
    DriverHandler.verifyAndClick(this.btnCreateAcc, "CreateEmailButton");
  }

  // enterEmail() {
  //   DriverHandler.verifyAndEnter(this.editEmail, "Enter Email", "abc@12.com");
  // }

  enterPassword() {
    browser.userDetails.password = defaultPassword;
    DriverHandler.verifyAndEnter(
      this.editPassword,
      "Enter Password",
      defaultPassword
    );
  }

  clickSignin() {
    DriverHandler.verifyAndClick(this.btnSignIn, "CreateEmailButton");
  }
}

export default new Authentication();
