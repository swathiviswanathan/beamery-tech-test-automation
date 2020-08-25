Feature: Verify error scenaiors in registration journey of e-commerce site.

  Scenario: Verify if all error messages are displayed when mandatory fields are missed out
    Given the home page of the e-commerce shopping is opened
    When  I click the signin button on the homepage
    Then the Authentication page must be displayed
    When I enter the valid email id 
    And I click on create account
    Then the create an account page must be displayed
    When I click on register button
    Then error messages for all mandatory fields must be displayed in the page
  
  Scenario Outline: Verify individual error messages for mandatory field miss outs.
    Given the home page of the e-commerce shopping is opened
    When  I click the signin button on the homepage
    Then the Authentication page must be displayed
    When I enter the valid email id
    And I click on create account
    Then the create an account page must be displayed
    When I select a title
    And I enter <firstName> in firstname field
    And I enter <lastName> in lastname field
    And I enter <password> in password field
    And I select the DOB
    And I signup for the newsletter
    And I select the special offers
    And I enter the company name
    And I enter <address> in address field
    And I enter the second line address
    And I enter <city> in city field
    And I select <state> from state dropdown
    And I enter <postcode> in postcode field
    And I select the country
    And I enter Additional information
    And I enter <mobilenumber> in mobilenumber field
    And I enter address alias
    And I click on register button
    Then appropriate error messages for the missed out fields must be displayed

    Examples:
    |firstName|lastName|password|address|city|state|postcode|mobilenumber|
    ||cv|password123|mannaranstreet|London|22|12345|07424096924|
    |Swathi||password123|mannaranstreet|London|22|12345|07424096924|

  Scenario: Verify error messages for duplicate registration and invalid email address during account creation
    Given the home page of the e-commerce shopping is opened
    When  I click the signin button on the homepage
    Then the Authentication page must be displayed
    When I enter an existing email id
    And I click on create account
    Then an appropriate error message for duplicate email Id must be displayed
    When I enter an invalid email id
    And I click on create account
    Then an appropriate error message for invalid email Id must be displayed