/// <reference types="cypress" />

import Base_PO from "./base_PO";
import homePage_PO from "../page_objects/homePage_PO";

class homePage_PO extends Base_PO {
  navigateToLoginPage() {
    super.navigate("");
  }

  validateUrl() {
    cy.url().should("be.equal", "https://katalon-demo-cura.herokuapp.com/");
    cy.request().then((resp) => {
      expect(resp.status).to.eq(200);
    });
  }

  validateHeadings() {
    cy.get("h1").should("have.text", "CURA Healthcare Service");
    cy.get("h3").should("have.text", "We Care About Your Health");
  }

  clickMakeAppointmentBtb() {
    cy.get("#btn-make-appointment").click();
  }

  redirectToLoginpage() {
    cy.url().should("contain", "/profile.php#login");
  }
}

module.exports = new homePage_PO();
