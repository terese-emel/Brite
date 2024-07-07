Feature: IMDb Navigation and Actions

  @chrome @firefox  # Tags to run these tests on Chrome and Firefox browsers
  Scenario: Navigate to Nicolas Cage profile and verify Upcoming movie
    Given I am on the IMDb homepage
    When I search for "Nicolas Cage"
    Then I should see Nicolas Cage in the search results
    When I click on the first search result
    Then I am on Nicolas Cage's profile page
    When I unfold the "Credits" section
    Then I see the "Upcoming" tab
    When I click on the "Upcoming" tab
    Then the "Upcoming" tab is active
    When I click on the first movie with the 'Completed' tag
    Then I am on the movie page