// export const homePageSignin = '//a[@class="login"]';

export const homePageLocators = {
  siginButton: '//a[@class="login"]',
  headerText: "//h1",
};

export const authenticationPageLocators = {
  headerText: "//h1",
  createEmail: '//input[@id="email_create"]',
  createAccBtn: '//button[@id="SubmitCreate"]',
  enterEmail: '//input[@id="email"]',
  enterPwd: '//input[@id="passwd"]',
  signinBtn: '//button[@id="SubmitLogin"]',
  createAccErr: '//div[@class="alert alert-danger"]',
};

export const createAccPageLocators = {
  headerText: "//h1",
  selectMrTitle: '//div[@id="uniform-id_gender1"]',
  selectMrsTitle: '//div[@id="uniform-id_gender2"]',
  enterFirstName: '//input[@id="customer_firstname"]',
  enterLastname: '//input[@id="customer_lastname"]',
  enterEmail: '//input[@id="email"]',
  enterPassword: '//input[@id="passwd"]',
  selectDobDay: '//select[@id="days"]',
  selectDobMonth: '//select[@id="months"]',
  selctDobYear: '//select[@id="years"]',
  signupNews: '//div[@id="uniform-newsletter"]',
  specialOffers: '//div[@id="uniform-optin"]',
  addressFirstName: '//input[@id="firstname"]',
  addressLastName: '//input[@id="lastname"]',
  addressComapany: '//input[@id="company"]',
  enterAddress: '//input[@id="address1"]',
  addressLine2: '//input[@id="address2"]',
  addressCity: '//input[@id="city"]',
  addressState: '//select[@id="id_state"]',
  addressPostCode: '//input[@id="postcode"]',
  adrressCountry: '//select[@id="id_country"]',
  addInformation: '//textarea[@id="other"]',
  homePhone: '//input[@id="phone"]',
  mobilephone: '//input[@id="phone_mobile"]',
  assignAddressAlias: '//input[@id="alias"]',
  registerBtn: '//Button[@id="submitAccount"]',
  duplicateRegistrationErr: '//div[@id="create_account_error"]',
  createAccErr: '//div[@class="alert alert-danger"]',
};

export const accOverviewPageLocators = {
  headerText: "//h1",
  signOutBtn: '//a[@class="logout"]',
};
