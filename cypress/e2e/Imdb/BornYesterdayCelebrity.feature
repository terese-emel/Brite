Feature: Born Yesterday Celebrity Search

  Scenario: Search for yesterday's celebrity and capture screenshot of 3rd result

    Given I am on the IMDb homepage
    When I open the navigation menu using navigation drawer icon
    And I navigate to the "Celebs" section
    And I click on the "Born Today" link
    When I clear the pre-selected birthday filter
    When I open the Birthday dropdown
    Then I enter yesterday's date in the "Birthday" field
    When I submit the search
    Then I should see search results for celebrities born yesterday
    When I click on the 3rd celebrity name in the list
    Then I take a screenshot of the celebrity page
    