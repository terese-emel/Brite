import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const baseUrl = "https://www.imdb.com/";


Given("I am on the IMDB website", () => {
  cy.visit(baseUrl);
});


Then("I am on the movie page", () => {
  cy.url().should("contains", "/title/");
});
