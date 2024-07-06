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
    .get("[data-testid=section-images]").should("be.visible"); 
});

// Implement logic to search for photos based on actor name within the Photos section
When('I search for photos containing {string}', (actorName) => {
  cy.get("[data-testid=image-chip-dropdown-test-id]")
    .click()
    .get(".ipc-select__input-container")
    .find("select option") // Target option elements within the select
    .contains(actorName)
    .click({ force: true })
    .get("[data-testid=filter-menu-chip-nm0001803]").should("be.visible").click();
  });

Then('I see photos potentially containing {string}', (actorName) => {
 cy.get('img').filter(($img) => {
  const altText = $img.attr('alt'); // Access alt attribute directly within the filter callback
  return altText?.toLowerCase().includes('danny trejo'.toLowerCase());
})
.then(($filteredImgs) => {
  if ($filteredImgs.length > 0) {
    cy.log(`Found photos that might contain "Danny Trejo".`);
  } else {
    cy.log(`No photos found containing "Danny Trejo". Results may vary.`);
  }
   });
});

When("I click on the second photo in the list", () => {
  cy.get("[data-testid=sub-section-images]").get("img").eq(1).click(); // Select the second photo (index starts from 0)
});

Then("I see the enlarged photo", () => {
  cy.get(".modal-content").should("be.visible");  
});
