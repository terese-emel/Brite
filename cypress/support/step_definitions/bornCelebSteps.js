import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I am on the IMDb homepage", () => {
  cy.visit("https://www.imdb.com/");
});

When("I click the Menu button", () => {
  cy.get("#imdb-header-menu").click();
});

And('I navigate to "Born today" section', () => {
  cy.get('a[href*="/search/name?生日="]').click(); // Adjust selector based on actual element
});

Then("I should see a search bar", () => {
  cy.get("#name-search"); // Adjust selector based on actual element
});

When("I clear the default search term", () => {
  cy.get("#name-search").clear(); // Adjust selector based on actual element
});

And('I click on the "Birthday" dropdown', () => {
  cy.get(".dropdown.birthdays").click(); // Adjust selector based on actual element
});

And('I select "Yesterday" from the dropdown', () => {
  cy.get(".dropdown-item").contains("Yesterday").click(); // Adjust selector based on actual element
});

Then("I should see a list of celebrities born yesterday", () => {
  cy.get(".lister-item-content a").should("be.visible"); // Adjust selector based on actual element
});

When("I click on the 3rd name in the list", () => {
  cy.get(".lister-item-content a").eq(2).click(); // Selects the 3rd element
});

Then("I take a screenshot of the celebrity page", () => {
  cy.screenshot("celebrity-page");
});
