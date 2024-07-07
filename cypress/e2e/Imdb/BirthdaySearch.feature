Feature: Birthday Search

  Scenario: Search for celebrities born today (40 years ago) and click on 1st description link

    Given I am on the IMDb homepage
    When I open the navigation menu using navigation drawer icon
    When I navigate to the "Born Today" section under "Celebs"
    Then I clear the pre-selected birthday filter
    When I unfold the "Birth date" dropdown and select "From: Today"
    Then I set "To:" date 40 years ago using the date picker
    When I submit the search
    Then I should see search results for celebrities born today (40 years ago)
    When I click on the 1st celebrity name in the list
    Then I should be on the celebrity page
    Then I should see a description containing at least one link
    When I click on the 1st link in the description
    Then I should be on the linked webpage
    Then I take a screenshot of the "linked webpage"

 