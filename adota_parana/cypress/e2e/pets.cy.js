describe("Fluxo Pets", () => {
  it("abre o ActionSheet e mostra Alert ao clicar em Adopt", () => {
    cy.visit("/Pets");

    cy.window().then((win) => {
      cy.stub(win, "alert").as("alertStub");
    });

    cy.get('[data-testid="show-pets-button"]').first().click();

    cy.contains("Cancel").should("be.visible");
    cy.contains("Adopt").should("be.visible");

    cy.contains("Adopt").click();

    cy.get("@alertStub").should("have.been.calledWithMatch", "Congratulations");
  });

  it("fecha o ActionSheet ao clicar em Cancel", () => {
    cy.visit("/Pets");

    cy.get('[data-testid="show-pets-button"]').first().click();

    cy.contains("Cancel").should("be.visible");
    cy.contains("Adopt").should("be.visible");

    cy.contains("Cancel").click();

    cy.contains("Cancel").should("not.exist");
    cy.contains("Adopt").should("not.exist");
  });
});
