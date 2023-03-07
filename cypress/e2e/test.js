describe("test", () => {
  it("facility", () => {
    cy.visit("https://katalon-demo-cura.herokuapp.com/#appointment");
    cy.get("#btn-make-appointment").click();
    cy.get("#txt-username").type("John Doe");
    cy.get("#txt-password").type("ThisIsNotAPassword");
    cy.get("#btn-login").click();

    cy.get("#combo_facility").select("Hongkong CURA Healthcare Center");
  });

  it("visit date", () => {});
});
