/// <reference types="cypress" />

class loginPage_PO {
  navigateToLoginPage() {
    super.navigate("");
  }

  typeUsername() {
    cy.get("#txt-username").type("John Doe");
  }

  typePassword() {
    cy.get("#txt-password").type("ThisIsNotAPassword");
  }

  clickLoginBtn() {
    cy.get("#btn-login").click();
  }

  typeSpecificUsername(username) {
    cy.get("#txt-username").type(username);
  }

  typeSpecificPassword(password) {
    cy.get("#txt-password").type(password);
  }

  getLoginFailedErrorMsg() {
    cy.contains(
      "Login failed! Please ensure the username and password are valid."
    ).should("be.visible");
  }

  redirectToAppointmentPage() {
    cy.url().should("contain", "/#appointment");
  }
}

module.exports = new loginPage_PO();
