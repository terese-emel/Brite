describe("Spicy Berry with Highest Potency", () => {
  let highestPotency = 0;
    let berryWithHighestPotencyObject = null;
     let berryWithHighestPotency = null;

  it("gets berries with spicy flavor", () => {
    cy.request("GET", "https://pokeapi.co/api/v2/berry-flavor/spicy").then(
      (response) => {
        expect(response.status).to.equal(200);
            const berries = response.body.berries;
           
            
        berries.forEach((berry) => {
          if (berry.potency > highestPotency) {
            highestPotency = berry.potency;
            if (berry) {
              // Check if berry object exists
              berryWithHighestPotencyObject = berry; // Store the entire berry object
            }
          }
        });
            berryWithHighestPotency = berryWithHighestPotencyObject.berry.name;
            cy.log(berryWithHighestPotency);
      }
    );
  });

  it("gets berry with highest potency", () => {
    expect(berryWithHighestPotency).to.not.be.null;
    cy.request(
      "GET",
      `https://pokeapi.co/api/v2/berry/${berryWithHighestPotency}`
    ).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property("id");
      expect(response.body).to.have.property("name");
    });
  });
});
