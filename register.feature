Feature: Sign-up new user Flow

  Background:
    Given Go to the sign up page

  Scenario: Happy Path
    When user enters valid email
    And user checks the agreement checkbox
    And user clicks Next button
    And user enters password
    And user clicks Next button
    And user enters firstname and lastname
    And user clicks Register button
    Then user sees successfully registered page
    And user signs in with registered user data
    And user validates registration is successful

  Scenario: Email Missing Control
    Given user should be on email page
    When user clicks Next button
    Then user sees tooltip warning message about missing email "message"
    
  Scenario: Email Format Control
    Given user should be on email page
    When user enters invalid email format
    And user clicks Next button
    Then user sees tooltip warning message about email format "message"

  Scenario: Existing Email Control
    Given user should be on email page
    When user enters existing email address
    And user checks the agreement checkbox
    And user clicks Next button
    Then user sees notification message about already exist email "message"

  Scenario: User Agreement Control
    Given user should be on email page
    When user enters valid email
    And user clicks Next button
    Then user sees tooltip warning message about checkbox "message"

  Scenario: Password Char Count Control
    Given user should be on password page
    When user enters 7 characters on password field
    And user enters 7 characters on confirm password field
    And user clicks Next button
    Then user sees tooltip warning message about password format "message"

  Scenario: Password Format Control
    Given user should be on password page
    When user enters invalid value on password field
    And user enters same invalid value on confirm password field
    And user clicks Next button
    Then user sees tooltip warning message about password format "message"

  Scenario: Password Confirmation Control
    Given user should be on password page
    When user enters some value on password field
    And user enters different value on confirm password field
    And user clicks Next button
    Then user sees notification message about mismatched passwords "message"

    Scenario: Names - FirstName Missing Control
      Given user should be on names page
      When user enters some value on last name field
      And user clicks Register button
      Then user sees tooltip warning message about missing field "message"

  Scenario: Names - LastName Missing Control
    Given user should be on names page
    When user enters some value on first name field
    And user clicks Register button
    Then user sees tooltip warning message about missing field "message"

  Scenario: Names Missing Control
    Given user should be on names page
    When user clicks Register button
    Then user sees tooltip warning message about missing field "message"

    Scenario: Back Redirection Control - Names to Password Step
      Given user should be on names page
      When user clicks Back button
      Then user is redirected to password step

  Scenario: Back Redirection Control - Password to Email Step
    Given user should be on password page
    When user clicks Back button
    Then user is redirected to email step

  Scenario: Back Redirection Control - Email to Home Page Step
    Given user should be on email page
    When user clicks Back button
    Then user is redirected to home page
