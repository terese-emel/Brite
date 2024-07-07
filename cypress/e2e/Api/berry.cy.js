describe("Berry API Tests", () => {
  it("gets berry by valid ID", () => {
    cy.request("GET", "https://pokeapi.co/api/v2/berry/1").then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property("id");
      expect(response.body).to.have.property("name");
    });
  });

  it("returns error for invalid berry ID", () => {
    cy.request({
      method: "GET",
      url: "https://pokeapi.co/api/v2/berry/9999",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(404);
    });
  });

  it("gets berry by valid name", () => {
    cy.request("GET", "https://pokeapi.co/api/v2/berry/figy").then(
      (response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property("id");
        expect(response.body).to.have.property("name");
      }
    );
  });

  it("returns error for invalid berry name", () => {
    cy.request({ method:"GET", url:"https://pokeapi.co/api/v2/berry/nonexistent-berry", failOnStatusCode: false, }).then(
      (response) => {
        expect(response.status).to.equal(404);
      }
    );
  });
});
