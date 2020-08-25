import DriverHandler from "../utils/driverHandler";
import { defaultPassword } from "../testConfig";
import { createAccPageLocators } from "../utils/locators";
import {
  getRandomInt,
  getRandomString,
  getRandomOption,
} from "../utils/helpers";
import {
  createAccountErrMessages,
  headerTexts,
  windowTitles,
} from "../utils/constants";

class CreateAcc {
  get createAccHeader() {
    return $(createAccPageLocators.headerText);
  }
  get mrTitle() {
    return $(createAccPageLocators.selectMrTitle);
  }

  get mrsTitle() {
    return $(createAccPageLocators.selectMrsTitle);
  }

  get editFirstName() {
    return $(createAccPageLocators.enterFirstName);
  }

  get editLastName() {
    return $(createAccPageLocators.enterLastname);
  }

  get editPassword() {
    return $(createAccPageLocators.enterPassword);
  }

  get dropdownDobDay() {
    return $(createAccPageLocators.selectDobDay);
  }

  get dropdownDobMonth() {
    return $(createAccPageLocators.selectDobMonth);
  }

  get dropdownDobYear() {
    return $(createAccPageLocators.selctDobYear);
  }

  get checkSignupNews() {
    return $(createAccPageLocators.signupNews);
  }

  get checkSpecialOff() {
    return $(createAccPageLocators.specialOffers);
  }

  get editAddFirstName() {
    return $(createAccPageLocators.addressFirstName);
  }

  get editAddLastName() {
    return $(createAccPageLocators.addressLastName);
  }

  get editCompanyName() {
    return $(createAccPageLocators.addressComapany);
  }

  get editAddress() {
    return $(createAccPageLocators.enterAddress);
  }

  get secAddress() {
    return $(createAccPageLocators.addressLine2);
  }

  get editCity() {
    return $(createAccPageLocators.addressCity);
  }

  get editState() {
    return $(createAccPageLocators.addressState);
  }

  get editPostCode() {
    return $(createAccPageLocators.addressPostCode);
  }

  get dropdownState() {
    return $(createAccPageLocators.addressState);
  }

  get dropdownCountry() {
    return $(createAccPageLocators.adrressCountry);
  }

  get editAdditionalInfo() {
    return $(createAccPageLocators.addInformation);
  }

  get editHomePhone() {
    return $(createAccPageLocators.homePhone);
  }

  get editMobilePhone() {
    return $(createAccPageLocators.mobilephone);
  }

  get editAddressAlias() {
    return $(createAccPageLocators.assignAddressAlias);
  }

  get btnCreateAcc() {
    return $(createAccPageLocators.registerBtn);
  }

  get errAlertBox() {
    return $(createAccPageLocators.createAccErr);
  }
  verifyCreateAnAccPage() {
    DriverHandler.verifyWebPageTitle(
      "Create Account Page",
      windowTitles.createAnAccPage
    );
    DriverHandler.verifyHeaderText(
      this.createAccHeader,
      "Create Account Header",
      headerTexts.createAccountPage
    );
  }

  selectTitle() {
    DriverHandler.verifyAndClick(
      getRandomOption([this.mrTitle, this.mrsTitle]),
      "Title"
    );
  }

  enterFirstName(input) {
    DriverHandler.verifyAndEnter(
      this.editFirstName,
      "FirstName",
      input.includes("random") ? browser.firstName : input
    );
  }

  enterLastName(input) {
    DriverHandler.verifyAndEnter(
      this.editLastName,
      "LastName",
      input.includes("random") ? browser.lastName : input
    );
  }

  enterPassword(input) {
    let password = input.includes("default") ? defaultPassword : input;
    browser.userDetails.password = password;
    DriverHandler.verifyAndEnter(this.editPassword, "Enter Password", password);
  }

  selectDOB() {
    DriverHandler.verifyAndSelectDropdown(
      this.dropdownDobDay,
      "Dob : day",
      getRandomInt(1, 31)
    );
    DriverHandler.verifyAndSelectDropdown(
      this.dropdownDobMonth,
      "Dob : Month",
      getRandomInt(1, 12)
    );
    DriverHandler.verifyAndSelectDropdown(
      this.dropdownDobYear,
      "Dob : Year",
      getRandomInt(1900, 2010)
    );
  }

  optInNewsLetter() {
    DriverHandler.verifyAndClick(this.checkSignupNews, "Signup News");
  }

  optInSpecialOffers() {
    DriverHandler.verifyAndClick(this.checkSpecialOff, "Special Offers");
  }

  enterAddressFirstName(input) {
    DriverHandler.verifyAndEnter(
      this.editAddFirstName,
      "Address - first name",
      input.includes("random") ? getRandomString(5) : input
    );
  }

  enterAddressLastName(input) {
    DriverHandler.verifyAndEnter(
      this.editAddLastName,
      "Address - last name",
      input.includes("random") ? getRandomString(5) : input
    );
  }

  enterCompanyName() {
    DriverHandler.verifyAndEnter(
      this.editCompanyName,
      "Company Name",
      getRandomString(10) + " Company"
    );
  }

  enterAddress(input) {
    DriverHandler.verifyAndEnter(
      this.editAddress,
      "Address",
      input.includes("random") ? getRandomString(10) : input
    );
  }

  enterSecondaryAddress() {
    DriverHandler.verifyAndEnter(
      this.secAddress,
      "Addresslines ",
      getRandomString(8) + " appartments"
    );
  }

  enterCity(input) {
    DriverHandler.verifyAndEnter(
      this.editCity,
      "City ",
      input.includes("random") ? getRandomString(6) : input
    );
  }

  enterPostCode(input) {
    DriverHandler.verifyAndEnter(
      this.editPostCode,
      "PostCode",
      input.includes("random") ? getRandomInt(10000, 99999) : input
    );
  }

  selectState(input) {
    DriverHandler.verifyAndSelectDropdown(
      this.dropdownState,
      "State",
      input.includes("random") ? getRandomInt(1, 50) : input
    );
  }

  selectCountry() {
    DriverHandler.verifyAndSelectDropdown(
      this.dropdownCountry,
      "Country",
      "21"
    );
  }

  addInformation() {
    DriverHandler.verifyAndEnter(
      this.editAdditionalInfo,
      "Addition Information",
      getRandomString(30)
    );
  }

  enterHomePhone() {
    DriverHandler.verifyAndEnter(
      this.editHomePhone,
      "Home Number",
      getRandomInt(1000000000, 9999999999)
    );
  }

  enterMobilePhone(input) {
    DriverHandler.verifyAndEnter(
      this.editMobilePhone,
      "mobile - number",
      input.includes("random") ? getRandomInt(1000000000, 9999999999) : input
    );
  }

  enterAddressAlias() {
    DriverHandler.verifyAndEnter(
      this.editAddressAlias,
      "address - alias",
      "My Home"
    );
  }

  clickRegister() {
    DriverHandler.verifyAndClick(this.btnCreateAcc, "Register");
  }

  verifyAllPossibleErrMessages() {
    const possibleErrMessages = Object.values(createAccountErrMessages);
    possibleErrMessages.forEach((value) => {
      DriverHandler.verifyIfTextDisplayed(
        this.errAlertBox,
        "Error Alert Box",
        value
      );
    });
  }

  verifyMandatoryFieldErrors() {
    const errMessageValuesArray = Object.keys(createAccountErrMessages)
      .filter((key) => browser.errMessageKeysArray.includes(key))
      .map((filteredKey) => createAccountErrMessages[filteredKey]);

    DriverHandler.verifyIfAllTextsAreDisplayed(
      this.errAlertBox,
      "Error Alert Box",
      errMessageValuesArray
    );
  }
}
export default new CreateAcc();
