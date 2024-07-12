import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

function getYesterdayDate() {
  const today = new Date();
  const yesterday = new Date(today.getTime() - 1000 * 60 * 60 * 24); // Subtract one day in milliseconds

  const month = yesterday.getMonth() + 1; // Add 1 for one-based month (1-12)
  const day = yesterday.getDate();

  return `${month}-${day}`; // Return formatted date string
}
let thirdTitleText;

When("I open the Birthday dropdown", () => {
  cy.get("[id=birthdayAccordion]")
    .get(".ipc-accordion__item__title")
    .contains("Birthday")
    .click({ force: true });
});

When('I enter yesterday\'s date in the "Birthday" field', () => {
  const yesterdaysDate = getYesterdayDate();

  cy.get("[id=birthdayAccordion]")
    .get(".ipc-accordion__item__title")
    .contains("Birthday")
    .click({ force: true })
    .get("input[data-testid='birthday-input-test-id']")
    .parent()
    .should("be.visible")
    .click()
    .type(yesterdaysDate)
    .type("{enter}")
    .wait(1000);
});

Then("I should see search results for celebrities born yesterday", () => {
  cy.get(".ipc-metadata-list-summary-item").should("be.visible");
});

When("I click on the 3rd celebrity name in the list", () => {
  cy.get("[data-testid='nlib-title']")
    .eq(2)
    .invoke("text")
    .then(($text) => {
      thirdTitleText = $text.trim();
    })
    .then(() => {
      cy.log("Text of the 3rd title:", thirdTitleText);
    });
 cy.get("[data-testid='nlib-title']").eq(2).click();
});
