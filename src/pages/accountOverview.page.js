import DriverHandler from "../utils/driverHandler";
import { accOverviewPageLocators } from "../utils/locators";
import { headerTexts, windowTitles } from "../utils/constants";

class AccOverview {
  get authenticationHeader() {
    return $(accOverviewPageLocators.headerText);
  }

  get signOutButton() {
    return $(accOverviewPageLocators.signOutBtn);
  }

  verifyAccOverviewPage() {
    DriverHandler.verifyWebPageTitle(
      "Account Overview Page",
      windowTitles.accOverviewPage
    );
    DriverHandler.verifyHeaderText(
      this.authenticationHeader,
      "Account Overview Header",
      headerTexts.accountOveriewPage
    );
  }

  signOut() {
    DriverHandler.verifyAndClick(this.signOutButton, "Sign Out Button");
  }
}

export default new AccOverview();
