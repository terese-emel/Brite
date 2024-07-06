import {
  Given,
  When,
  Then,
  And,
} from "@badeball/cypress-cucumber-preprocessor";

let movieHref;


Given("I am on the IMDB website", () => {
  cy.visit("https://www.imdb.com/");
});

When("I search for {string}", (searchTerm) => {
  cy.get('input[name="q"]').type(searchTerm + "{enter}");
});

Then("I click on the first search result", () => {
  cy.get(".ipc-metadata-list-summary-item__c a").first().click();
});

Then("I unfold the 'Credits' section", () => {
  cy.get("[data-testid^=Filmography]").find('a[href*="#credits"]').click();
});

Then("I unfold the 'Upcoming' tab", () => {
  cy.get("[data-testid^=Filmography]")
    .get("[id^=actor-upcoming-projects]")
    .find(".ipc-inline-list__item")
    .first()
    .click();
});

Then("I click on the first movie with the 'Completed' tag", () => {
  cy.get("[id^=actor-upcoming-projects]") // Adjust selector as needed
    .find(".ipc-metadata-list-summary-item__c") // Adjust selector as needed
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


Then("I verify the movie page is loaded", () => {
cy.url().should("eq", movieHref);
});
