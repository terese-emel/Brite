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

When('I unfold the "Birth date" dropdown and select "From: Today"', () => {
  const [formattedDate, calculatedYear, calculatedMonth, calculatedDay] =
    calculateDateFortyYearsAgo();

  cy.get(adv-search-expand-all)
    .click()
    .get(accordion-item-birthDateAccordion)
    .click()
    .parent()
    .should("be.visible")
    .get(birthDate-start)
    .click()
    .type(formattedDate);
});

When('I set "To:" date {int} years ago using the date picker', () => {
  const [formattedDate] = calculateDateFortyYearsAgo();
  cy.get(birthDate-end).click().type(formattedDate);
});

Then(
  "I should see search results for celebrities born today \\({int} years ago\\)",
  () => {
    const [calculatedYear] = calculateDateFortyYearsAgo();
    cy.get(".ipc-html-content-inner-div").should(
      "contain",
      new RegExp(`${calculatedYear}\\.\\d{2}\\.\\d{2}|\\d{4}-\\d{2}-\\d{2}`)
    );
  }
);

Then("I click on the 1st celebrity name in the list", () => {
  cy.get(nlib-title).first().click();
});

Then("I should be on the celebrity page", () => {
  cy.url().should("include", "/name/");
});

Then("I should see a description containing at least one link", () => {
  cy.get(".ipc-html-content-inner-div").find("a").should("exist");
});

When("I click on the 1st link in the description", () => {
  cy.get(".ipc-html-content-inner-div")
    .find("a")
    .first()
    .click();
});

Then("I should be on the linked webpage", () => {
  
  cy.url().should("include", "/title/");
});

Then("I take a screenshot of the linked webpage", () => {
  cy.screenshot("linked-webpage");
});
