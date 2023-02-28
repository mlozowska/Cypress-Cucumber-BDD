/// <reference types="cypress" />

class Base_PO {
  navigate(path) {
    cy.fixture("config.json").then((data) => {
      cy.visit(data.baseUrl + path);
    });
  }

  clickMakeAppointmentBtn() {
    cy.get("#btn-make-appointment").click();
  }
}

export default Base_PO;
