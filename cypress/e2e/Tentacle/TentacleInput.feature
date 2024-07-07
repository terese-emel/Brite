

Feature: Tentacle Input Validation

  Scenario: Entering a valid number within the range (10-100)
    Given I am on the page with the tentacle input form
    When I enter a valid number between 10 and 100 (e.g., 50) in the "Number of tentacles" field
    And I click the "Send" button
    Then the form should submit successfully 
    And there should be no error message displayed for the tentacles field

  Scenario: Entering a number less than the minimum (9)
    Given I am on the page with the tentacle input form
    When I enter a number less than the minimum (e.g., 9) in the "Number of tentacles" field
    And I click the "Send" button
    Then the form should not submit 
    And there should be an error message displayed for the tentacles field indicating it's below the minimum

  Scenario: Entering a number greater than the maximum (101)
    Given I am on the page with the tentacle input form
    When I enter a number greater than the maximum (e.g., 101) in the "Number of tentacles" field
    And I click the "Send" button
    Then the form should not submit 
    And there should be an error message displayed for the tentacles field indicating it's above the maximum

  Scenario: Entering non-numeric characters
    Given I am on the page with the tentacle input form
    When I enter non-numeric characters (e.g., "hello") in the "Number of tentacles" field
    And I click the "Send" button
    Then the form should not submit 
    And there should be an error message displayed for the tentacles field indicating it requires a number

  Scenario: Leaving the field empty
    Given I am on the page with the tentacle input form
    When I click the "Send" button without entering any value
    Then the form should not submit 
    And there should be an error message displayed for the tentacles field indicating it's required
