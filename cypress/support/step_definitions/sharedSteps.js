import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the IMDb homepage", () => {
  cy.visit("https://www.imdb.com/", { timeout: 60000 });
});

When("I open the navigation menu using navigation drawer icon", () => {
  cy.get('[id="imdbHeader-navDrawerOpen"]').click();
});

When(
  "I navigate to the {string} section under {string}",
  (itemText, sectionName) => {
    cy.get('[data-testid="nav-link-category"] span')
      .contains(sectionName)
      .click()
      .get("span")
      .get(".ipc-list-item__text")
      .contains(itemText)
      .click();
  }
);

When("I clear the pre-selected birthday filter", () => {
  cy.get("[data-testid^=selected-input-chip-list-birthday]")
    .click()
    .get("[data-testid=adv-search-expand-all]").should("be.visible")
    .click({ force: true });
});

Then("I take a screenshot of the {string}", (screenshotFileName) => {
  cy.screenshot(screenshotFileName);
});

When("I submit the search", () => {
  cy.get("button").get("[data-testid=adv-search-get-results]")
    .wait(1000)
    .should("be.visible")
    .click();
});

Then("I am on the movie page", () => {
  cy.url().should("contains", "/title/");
});
