Feature: Verify registration journey of e-commerce site.

  Scenario: Verify a successful user registration journey by providing all valid details.
    Given the home page of the e-commerce shopping is opened
    When  I click the signin button on the homepage
    Then the Authentication page must be displayed
    When I enter a valid email id
    And I click on create account
    Then the create an account page must be displayed
    When I select a title
    And I enter a random string in firstname field
    And I enter a random string in lastname field
    And I enter a random string in password field
    And I select the DOB
    And I signup for the newsletter
    And I select the special offers
    And I enter a random string for Firstname address field
    And I enter a random string for Lastname address field
    And I enter the company name
    And I enter a random string in address field
    And I enter the second line address
    And I enter a random string in city field
    And I select a random state from state dropdown
    And I enter a random string in postcode field
    And I select the country
    And I enter Additional information
    And I enter a random number in mobilenumber field
    And I enter address alias
    And I click on register button
    Then the account creation must successfuly complete
    When I click on signout button
    Then the home page of the e-commerce shopping site must be opened

  # Scenario: Verify if mandatory details are sufficient to complete registration
  #   Given the home page of the e-commerce shopping is opened
  #   When  I click the signin button on the homepage
  #   Then the Authentication page must be displayed
  #   When I enter a valid email id
  #   And I click on create account
  #   Then the create an account page must be displayed
  #   When I select a title
  #   And I enter a random string in firstname field
  #   And I enter a random string in lastname field
  #   And I enter a default string in password field
  #   And I enter a random string in address field
  #   And I enter the second line address
  #   And I enter a random string in city field
  #   And I select a random state from state dropdown
  #   And I enter a random string in postcode field
  #   And I select the country
  #   And I enter a random number in mobilenumber field
  #   And I click on register button
  #   Then the account creation must successfuly complete
  #   When I click on signout button
  #   Then the home page of the e-commerce shopping site must be opened

  