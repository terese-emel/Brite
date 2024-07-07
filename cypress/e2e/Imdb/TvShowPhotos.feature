Feature: IMDb TV Show Photos

  Scenario: Search Breaking Bad photos and click on 2nd photo

    Given I am on the IMDb homepage
    When I open the navigation menu using navigation drawer icon
    When I navigate to the "Top 250 TV Shows" section under "TV Shows"
    Then I see the "Top 250 TV Shows" list
    When I click on "Breaking Bad"
    Then I am on TV Show page
    When I go to the "Photos" section
    Then I see the list of photos
    When I search for photos containing "Danny Trejo"  
    Then I see photos potentially containing "Danny Trejo"
    When I click on the second photo in the list
    Then I see the enlarged photo