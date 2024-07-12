Feature: Tentacle Input Validation

  Scenario Outline: Tentacle input validation
    Given I am on the page with the tentacle input form
    When I enter <tentacle_count> in the "Number of tentacles" field
    And I click the "Send" button
    Then the form should <submission_status>
    And the error message should be <error_message>

    Examples:
      | tentacle_count | submission_status | error_message                                  |
      | 50            | successful       |                                               |
      | 9             | unsuccessful     | Tentacle count must be at least 10              |
      | 101           | unsuccessful     | Tentacle count cannot exceed 100               |
      | hello         | unsuccessful     | Please enter a valid number for tentacles     |
      |               | unsuccessful     | Tentacle count is required                    |
