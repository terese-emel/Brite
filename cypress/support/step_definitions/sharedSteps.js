import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const baseUrl = "https://www.imdb.com/";


Given("I am on the Imdb website", () => {
  cy.visit(baseUrl);
});

When("I open the navigation menu using navigation drawer icon", () => {
  cy.get('[id="imdbHeader-navDrawerOpen"]').click();
});



Then("I am on the movie page", () => {
  cy.url().should("contains", "/title/");
});
