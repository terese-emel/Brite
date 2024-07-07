import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const baseUrl = "https://www.imdb.com/";

Given("I am on the Imdb website", () => {
  cy.visit(baseUrl);
});

When("I open the navigation menu using navigation drawer icon", () => {
  cy.get('[id="imdbHeader-navDrawerOpen"]').click();
});

Given('I navigate to the "Born Today" section', () => {
  // Replace with appropriate selector to navigate to Born Today section (e.g., cy.get("[data-testid='born-today-link']").click())
  cy.get("[id='imdbHeader-navDrawerOpen']")
    .click()
    .get('[data-testid="nav-link-category"] span')
    .contains("Celebs")
    .click()
    .get("[href='/feature/bornondate/?ref_=nv_cel_brn']")
    .click();
});

When("I clear the pre-selected birthday filter", () => {
  cy.get("[data-testid^=selected-input-chip-list-birthday]").click().get("[data-testid=adv-search-expand-all]")
    .click({ force: true });
});

When("I submit the search", () => {
  cy.get("[data-testid^=adv-search-get-results]")
    .wait(1000)
    .should("be.visible")
    .click();
});

Then("I am on the movie page", () => {
  cy.url().should("contains", "/title/");
});
