import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I search for {string}", (searchTerm) => {
  cy.get('input[name="q"]').type(searchTerm + "{enter}");
});

Then("I should see Nicolas Cage in the search results", () => {
  cy.get(".ipc-metadata-list-summary-item__c a")
    .first()
    .should("contain", "Nicolas Cage");
});

When("I click on the first search result", () => {
  cy.get(".ipc-metadata-list-summary-item__c a").first().click();
});

Then("I am on Nicolas Cage's profile page", () => {
  cy.get("h1").should("contain", "Nicolas Cage"); // Adjust selector if needed
});

When('I unfold the "Credits" section', () => {
  cy.get("[data-testid^=Filmography]").find('a[href*="#credits"]').click(); // Adjust selector if needed
});

Then('I see the "Upcoming" tab', () => {
  cy.get("[data-testid^=Filmography]")
    .get("[id^=actor-upcoming-projects]")
    .find(".ipc-inline-list__item")
    .first()
    .should("contain", "Upcoming");
});

When('I click on the "Upcoming" tab', () => {
  cy.get("[data-testid^=Filmography]")
    .get("[id^=actor-upcoming-projects]")
    .find(".ipc-inline-list__item")
    .first()
    .click();
});

Then('the "Upcoming" tab is active', () => {
  cy.get("[data-testid^=Filmography]")
    .get("[id^=actor-upcoming-projects]")
    .find(".ipc-inline-list__item")
    .first()
    .should("contain", "Upcoming"); // Adjust selector if needed
});

When("I click on the first movie with the 'Completed' tag", () => {
  cy.get("[id^=actor-upcoming-projects]")
    .find(".ipc-metadata-list-summary-item__c")
    .wait(6000)
    .first()
    .contains("Post-production")
    .parent()
    .find("a")
    .click()
    .then(($link) => {
      movieHref = $link.attr("href"); // Get the href attribute
      cy.log(`Clicked on movie with href: ${movieHref}`); // Log the movie href
    });
});
