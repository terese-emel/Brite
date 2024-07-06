import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";



When('I navigate to the "Top 250 TV Shows" section', () => {
  cy.get('[data-testid="explore-dropdown-content"] a')
    .contains("Top 250 TV Shows")
    .click(); // Adjust selector if needed
});

Then('I see the "Top 250 TV Shows" list', () => {
  cy.get(".lister-list").should("be.visible"); // Adjust selector if needed
});

When('I search for "{string}"', (searchTerm) => {
  cy.get('input[name="q"]').type(searchTerm + "{enter}");
});

Then(`I see "{string}" in the search results`, (searchTerm) => {
  cy.get(".lister-item-content a").contains(searchTerm).should("be.visible");
});

When('I click on "{string}"', (title) => {
  cy.get(".lister-item-content a").contains(title).click();
});

Then("I am on the {string} TV Show page", (title) => {
  cy.get("h1").should("contain", title); // Adjust selector if needed
});

When('I go to the "Photos" section', () => {
  cy.get('[data-testid="media-strip-item-link"]').contains("Photos").click(); // Adjust selector if needed
});

Then("I see the list of photos", () => {
  cy.get(".ipc-media-strip__item").should("be.visible"); // Adjust selector if needed
});

// Implement logic to search for photos based on actor name within the Photos section
When('I search for photos containing "{string}"', (actorName) => {
  // This step needs implementation based on IMDb's photo search functionality
  // Here are some possible approaches (might require additional research):
  //   1. Check if there's a search bar within the Photos section and use it to search for the actor name.
  //   2. Look for filters based on cast members and apply the appropriate filter for the actor.
  //   3. Investigate IMDb's API (if available) to programmatically search for photos based on the actor.
  cy.log(
    `Searching for photos containing "${actorName}" (implementation needed)`
  ); // Placeholder message
});

// Adjust based on search implementation
Then('I see photos potentially containing "{string}"', (actorName) => {
  // This step needs implementation based on how you search for photos
  // Here are some possible assertions:
  //   1. If using a search bar, verify the search results include photos.
  //   2. If using filters, check if the filtered photos are displayed.
  //   3. If using the API, assert that retrieved photos might contain the actor (check titles, captions, or other attributes).
  cy.log(
    `Verifying photos potentially containing "${actorName}" (implementation needed)`
  ); // Placeholder message
});

When("I click on the second photo in the list", () => {
  cy.get(".ipc-media-strip__item").eq(1).click(); // Select the second photo (index starts from 0)
});

Then("I see the enlarged photo", () => {
  cy.get(".modal-content").should("be.visible"); // Adjust selector if needed (verify enlarged photo modal)
});
