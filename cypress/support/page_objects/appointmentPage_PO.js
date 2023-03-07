/// <reference types="cypress" />

class appointmentPage_PO {
  navigateToHomepage() {
    super.navigate("");
  }

  selectFacility() {
    cy.get("#combo_facility").select();
  }

  checkSpecificHealthcareProgram() {
    cy.get(".radio-inline").find("#radio_program_medicare").click(); //not sure, checkouts
  }

  pickVisitDate() {
    cy.get(".input-group-addon").type();
  }

  AddComment() {
    cy.get("#txt_comment").type();
  }

  clickBookAppointmentBtn() {
    cy.get("#btn-book-appointment").click();
  }

  redirectToConfirmationPage() {
    cy.url().should("include", "/appointment.php#summary");
  }
}

module.exports = new appointmentPage_PO();
