describe("App Expo Web", () => {
  it("deve carregar a página inicial", () => {
    cy.visit("/");
    cy.contains("Adota Paraná").should("exist");
  });
});
