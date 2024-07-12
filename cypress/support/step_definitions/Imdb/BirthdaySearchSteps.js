// imdb-birthday-search.steps.js

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

function calculateDateFortyYearsAgo() {
  const today = new Date();
  const fortyYearsAgo = new Date(
    today.getFullYear() - 40,
    today.getMonth(),
    today.getDate()
  );

  // Use padStart for consistent two-digit formatting
  const year = fortyYearsAgo.getFullYear().toString().padStart(4, "0");
  const month = (fortyYearsAgo.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-indexed
  const day = fortyYearsAgo.getDate().toString().padStart(2, "0");
  return [`${year}-${month}-${day}`, year, month, day];
}

const [formattedDate, calculatedYear] = calculateDateFortyYearsAgo();

When('I unfold the "Birth date" dropdown and select "From: Today"', () => {
  cy.get("[id=birthdayAccordion]")
    .get(".ipc-accordion__item__title")
    .contains("Birth date")
    .click({ force: true })
    .get("[data-testid=adv-search-expand-all]")
    .should("be.visible")
    .click({ force: true })
    .get("[data-testid=accordion-item-birthDateAccordion]")
    .parent()
    .should("be.visible")
    .click()
    .get("[data-testid=birthDate-start]")
    .click()
    .type(formattedDate);
});

When('I set "To:" date {int} years ago using the date picker', () => {
  cy.get("[data-testid=birthDate-end]").click().type(formattedDate);
});

Then(
  "I should see search results for celebrities born today \\({int} years ago\\)",
  () => {
    cy.get(".ipc-html-content-inner-div").should(
      "contain",
      new RegExp(`${calculatedYear}\\.\\d{2}\\.\\d{2}|\\d{4}-\\d{2}-\\d{2}`)
    );
  }
);

Then("I click on the 1st celebrity name in the list", () => {
  cy.get("[data-testid='nlib-title']").first().click();
});

Then("I should see a description containing at least one link", () => {
  cy.get(".ipc-html-content-inner-div").find("a").should("exist");
});

When("I click on the 1st link in the description", () => {
  cy.get(".ipc-html-content-inner-div").find("a").first().click();
});

Then("I take a screenshot of the linked webpage", () => {
  cy.screenshot("linked-webpage");
});
