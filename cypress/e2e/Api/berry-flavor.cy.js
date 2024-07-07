describe("Berry Flavor Tests", () => {
  it("gets berry flavor by valid name", () => {
    cy.request("GET", "https://pokeapi.co/api/v2/berry-flavor/spicy").then(
      (response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property("id");
        expect(response.body).to.have.property("names");
      }
    );
  });
});
