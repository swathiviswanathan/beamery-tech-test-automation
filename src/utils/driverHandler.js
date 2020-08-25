import { Element } from "@wdio/sync";
import { pauseTime } from "../testConfig";

function pauseExecution(time) {
  return function (target, key, descriptor) {
    const original = descriptor.value;

    descriptor.value = function (...args) {
      browser.pause(time);
      return original.apply(this, args);
    };

    return descriptor;
  };
}

class DriverHandler {
  openWebPage(webPageUrl) {
    browser.url(webPageUrl);
  }

  @pauseExecution(pauseTime)
  verifyAndClick(element, elementName) {
    try {
      element.waitForExist({ timeout: 5000 });
      expect(element).toBeDisplayed();
      element.click();
    } catch (error) {
      throw new Error(
        `Element - ${elementName} -  click failed with error type - ${error.name}`
      );
    }
  }

  @pauseExecution(pauseTime)
  verifyAndEnter(element, elementName, value) {
    try {
      element.waitForExist({ timeout: 5000 });
      expect(element).toBeDisplayed();
      element.clearValue();
      element.setValue(value);
    } catch (error) {
      throw new Error(
        `Entering value to element - ${elementName} - failed with error type - ${error}`
      );
    }
  }

  @pauseExecution(pauseTime)
  verifyAndSelectDropdown(element, elementName, value) {
    try {
      element.waitForExist({ timeout: 5000 });
      expect(element).toExist();
      element.selectByAttribute("value", value);
    } catch (error) {
      throw new Error(
        `Selecting value from dropdown - ${elementName} - failed with error type - ${error.name}`
      );
    }
  }

  @pauseExecution(pauseTime)
  verifyHeaderText(element, elementName, expectedText) {
    try {
      element.waitForExist({ timeout: 5000 });
      expect(element).toBeDisplayed();
      expect(element).toHaveTextContaining(expectedText);
    } catch (error) {
      throw new Error(
        `Verifying text of header - ${elementName} - failed with error type - ${
          error.name
        }. Expected - ${expectedText}, Actual - ${element.getText()}`
      );
    }
  }

  @pauseExecution(pauseTime)
  verifyIfTextDisplayed(element, elementName, expectedText) {
    try {
      element.waitForExist({ timeout: 5000 });
      expect(element).toBeDisplayed();
      expect(element).toHaveTextContaining(expectedText);
    } catch (error) {
      throw new Error(
        `Verifying text of element - ${elementName} - failed with error type - ${
          error.name
        }. Expected - ${expectedText}, Actual - ${element.getText()}`
      );
    }
  }

  @pauseExecution(pauseTime)
  verifyIfAllTextsAreDisplayed(element, elementName, expectedTextArray) {
    try {
      element.waitForExist({ timeout: 5000 });
      expect(element).toBeDisplayed();
      expectedTextArray.forEach((textString) => {
        expect(element).toHaveTextContaining(textString);
      });
    } catch (error) {
      throw new Error(
        `Verifying the presence of list of texts in - ${elementName} - failed with error type - ${
          error.name
        }. Actual - ${element.getText()}`
      );
    }
  }

  @pauseExecution(pauseTime)
  verifyWebPageTitle(pageName, expectedTitle) {
    try {
      browser.waitUntil(() => browser.getTitle().includes(expectedTitle), {
        timeout: 8000,
        timeoutMsg: "expected header text is not displayed until 5s",
      });
      expect(browser).toHaveTitleContaining(expectedTitle);
    } catch (error) {
      throw new Error(
        `Page title verification for ${pageName} failed. Actual - ${browser.getTitle()} , Expected - ${expectedTitle}`
      );
    }
  }
}

export default new DriverHandler();
