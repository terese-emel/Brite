Scenario Outline: Search <actor> Photos and Click on 2nd Photo

  Given I am on the IMDB website
  When I open the navigation menu using navigation drawer icon
  When I navigate to the "Top 250 TV Shows" section
  Then I see the "Top 250 TV Shows" list
  When I search for "Planet Earth"
  Then I see "Planet Earth" in the search results
  When I click on "Planet Earth"
  Then I am on the Planet Earth TV Show page
  When I go to the "Photos" section
  Then I see the list of photos
  When I search for photos containing "<actor>"  # Search within photos section (implementation needed)
  Then I see photos potentially containing "<actor>" # Adjust based on search implementation
  When I click on the second photo in the list
  Then I see the enlarged photo

  Examples:
    | actor |
    | Danny Trejo |
    | Bryan Cranston |  # Example with another actor