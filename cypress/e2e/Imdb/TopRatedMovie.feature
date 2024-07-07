Feature: IMDb Top Box Office and Rating

  Scenario: Rate a movie in Top Box Office
    Given I am on the IMDb homepage
    When I open the navigation menu using navigation drawer icon
    When I navigate to the "Top Box Office" section under "Movies"
    Then I see the "Top Box Office" list
    When I click on the second item in the list
    When I click on the "IMDb Rating" button
    When I click on the "Rate" button
    Then I see the rating modal
    When I set the rating to 5 stars
    When I click on the "Rate" button in the modal
    Then I see a confirmation message for the rating
