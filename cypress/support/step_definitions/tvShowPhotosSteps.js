import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

When('I navigate to the "Top 250 TV Shows" section', () => {
  cy.get('[data-testid="nav-link-category"] span')
    .contains("TV Shows")
    .click()
    .get(".ipc-list-item__text")
    .contains("Top 250 TV Shows")
    .click();
});

Then('I see the "Top 250 TV Shows" list', () => {
  cy.get(".ipc-metadata-list").should("be.visible");
});

When("I click on {string}", (title) => {
  cy.get("h3").get(".ipc-title__text").contains(title).click();
});

Then("I am on TV Show page", (title) => {
  cy.url().should("contains", "/title/");
});

When('I go to the "Photos" section', () => {
  cy.get("h3").get(".ipc-title__text").contains("Photos").click();
});

Then("I see the list of photos", () => {
  cy.get("[data-testid=mv-gallery-button]")
    .click()
    .get("[data-testid=section-images]")
    .should("be.visible");
});

// Implement logic to search for photos based on actor name within the Photos section
When("I search for photos containing {string}", (actorName) => {
  cy.get("[data-testid=image-chip-dropdown-test-id]")
    .click()
    .get("[id=Person-filter-select-dropdown]")
    .get("select")
    .first()
    .select("nm0001803")
    .get('button[title="Close Prompt"]')
    .click();
});

Then("I see photos potentially containing {string}", (actorName) => {
  cy.get(`img[alt*="${actorName}"]`).should("be.visible");
});

When("I click on the second photo in the list", () => {
  cy.get("img").should("be.visible").eq(1).click(); // Select the second photo (index starts from 0)
});

Then("I see the enlarged photo", () => {
 cy.url().should("include", "/mediaviewer/");
});
