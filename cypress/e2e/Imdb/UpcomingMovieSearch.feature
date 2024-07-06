Feature: IMDb Navigation and Actions

  @chrome @firefox  # Tags to run these tests on Chrome and Firefox browsers
  Scenario: Search Nicolas Cage upcoming movie
    Given I am on the IMDB website
    When I search for 'Nicolas Cage'
    Then I click on the first search result
    Then I unfold the 'Credits' section
    Then I unfold the 'Upcoming' tab
    Then I click on the first movie with the 'Completed' tag
    Then I verify the movie page is loaded
