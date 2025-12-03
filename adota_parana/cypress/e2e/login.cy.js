describe("Fluxo de Login", () => {
  it("clica no login, preenche username e envia", () => {
    cy.visit("/");

    cy.get("[data-testid='login-button']").click({ force: true });
    cy.url().should("include", "/Login");

    cy.get("[data-testid='username-input']").type("meuUsuario");

    cy.get("[data-testid='send-button']").click();

    cy.url().should("include", "/Pets");
  });

  it("mostra erro ou não permite enviar quando username tem apenas 2 letras", () => {
    cy.visit("/");

    cy.get("[data-testid='login-button']").click({ force: true });
    cy.url().should("include", "/Login");

    cy.get("[data-testid='username-input']").type("ab");

    cy.url().should("include", "/Login");
  });
});
