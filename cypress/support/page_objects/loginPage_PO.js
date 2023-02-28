/// <reference types="cypress" />

import Base_PO from "./base_PO";

class loginPage_PO extends Base_PO {
  navigateToLoginPage() {
    super.navigate("");
  }

  typeUsername(country) {
    cy.get("#txt-username").type(country);
  }

  typePassword(password) {
    cy.get("#txt-password").type(password);
  }

  clickLoginBtn() {
    cy.get("#btn-login").click();
  }

  getLoginFailedErrorMsg() {
    cy.contains(
      "Login failed! Please ensure the username and password are valid."
    ).should("be.visible");
  }
}

module.exports = new loginPage_PO();
