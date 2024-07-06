import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let ratingHref;


When('I navigate to the "Top Box Office" section', () => {
  cy.get('[data-testid="nav-link-category"] span')
    .contains("Movies")
    .click()
    .get(".ipc-list-item__text")
    .contains("Top Box Office")
    .click(); 
});

Then('I see the "Top Box Office" list', () => {
  cy.get(".ipc-metadata-list").should("be.visible"); 
});

When("I click on the second item in the list", () => {
  cy.get(".ipc-metadata-list-summary-item a")
    .eq(1) // Select the second item (index starts from 0)
    .click();
});

When('I click on the "IMDb Rating" button', () => {
  cy.get("[data-testid=hero-rating-bar__user-rating]")
    .eq(1)
    .click(); 
});

When('I click on the "Rate" button', () => {
 
cy.get("[data-testid=hero-rating-bar__user-rating__unrated]")
  .contains("Rate")
  .wait(5000)
  .click({ force: true }); 
});

Then("I see the rating modal", () => {
  cy.get(".ipc-promptable-base__content").should("be.visible"); 
});

When("I set the rating to 5 stars", () => {
  cy.get(".ipc-starbar__rating__button").eq(4).click({ force: true }); 
});

When('I click on the "Rate" button in the modal', () => {
  cy.get(".ipc-btn").contains("Rate").click({ force: true }); 
});

Then("I see a confirmation message for the rating", () => {
  // Add assertion to verify the confirmation message (might require waiting for the modal to close)
cy.get(".ipc-promptable-base__content").should("not.be.visible"); 
});
