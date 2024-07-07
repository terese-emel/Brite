import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

function getYesterdayDate() {
  const today = new Date();
  const yesterday = new Date(today.getTime() - 1000 * 60 * 60 * 24); // Subtract one day in milliseconds

  const month = yesterday.getMonth() + 1; // Add 1 for one-based month (1-12)
  const day = yesterday.getDate();

  return `${month}-${day}`; // Return formatted date string
}
let thirdTitleText;

Given("I am on the IMDb homepage", () => {
  cy.visit("https://www.imdb.com/");
});

Given("I open the navigation menu", () => {
  // Replace with the appropriate selector for the navigation menu button
  cy.get("[id='imdbHeader-navDrawerOpen']").click();
});

Given('I navigate to the "Celebs" section', () => {
  cy.get('[data-testid="nav-link-category"] span').contains("Celebs").click();
});

Given('I click on the "Born Today" link', () => {
  cy.get("[href='/feature/bornondate/?ref_=nv_cel_brn']").click();
});


When("I open the Birthday dropdown", () => {
  cy.get("[data-testid=accordion-item-birthdayAccordion]").click();
});

When('I enter yesterday\'s date in the "Birthday" field', () => {
  const yesterdaysDate = getYesterdayDate();
  
    cy.get("[data-testid=accordion-item-birthdayAccordion")
      .click({ force: true })
      .get("[data-testid=accordion-item-birthdayAccordion")
      .click({ force: true })
      .get("[data-testid=accordion-item-birthdayAccordion")
      .click({ force: true })
      .get("[data-testid^=birthday-input-test-id]")
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
cy.get("[data-testid=nlib-title]")
  .eq(2)
  .invoke("text")
  .then(($text) => {
    thirdTitleText = $text.trim(); // Assign trimmed text to the variable
  })
  .then(() => {
    cy.log("Text of the 3rd title:", thirdTitleText); // Use the variable here
  });
  cy.get("[data-testid=nlib-title]").eq(2).click();
});

Then("I take a screenshot of the celebrity page", () => {
  cy.screenshot("imdb_celebrity_page" + thirdTitleText);
});
