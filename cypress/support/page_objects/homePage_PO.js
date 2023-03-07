/// <reference types="cypress" />

import Base_PO from "./base_PO";

class homePage_PO extends Base_PO {
  navigateToHomepage() {
    super.navigate("");
  }

  validateUrl() {
    cy.url().should("be.equal", "https://katalon-demo-cura.herokuapp.com/");
  }

  validateHeadings() {
    cy.get("h1").should("have.text", "CURA Healthcare Service");
    cy.get("h3").should("have.text", "We Care About Your Health");
  }

  clickMakeAppointmentBtb() {
    cy.get("#btn-make-appointment").click();
  }

  clickHamburgerIcon() {
    cy.get("#menu-toggle").click();
  }

  clickLogin() {
    cy.contains("Login").click();
  }

  redirectToLoginpage() {
    cy.url().should("contain", "/profile.php#login");
  }
}

module.exports = new homePage_PO();
