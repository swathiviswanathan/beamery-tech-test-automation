import { webpageUrl } from "../testConfig";
import DriverHandler from "../utils/driverHandler";
import { homePageLocators } from "../utils/locators";
import { headerTexts, windowTitles } from "../utils/constants";

class HomePage {
  get signInButton() {
    return $(homePageLocators.siginButton);
  }

  get homePageHeader() {
    return $(homePageLocators.headerText);
  }

  openHomePage() {
    DriverHandler.openWebPage(webpageUrl);
  }

  verifyHomePage() {
    DriverHandler.verifyWebPageTitle("Home Page", windowTitles.homePage);
    DriverHandler.verifyHeaderText(
      this.homePageHeader,
      "Home Page header",
      headerTexts.homePage
    );
  }

  clickHomePageSignin() {
    DriverHandler.verifyAndClick(this.signInButton, "Signin button");
  }
}
export default new HomePage();
