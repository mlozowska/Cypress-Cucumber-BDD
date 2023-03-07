/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Base_PO from "../page_objects/base_PO";
import loginPage_PO from "../page_objects/loginPage_PO";
import appointmentPage_PO from "../page_objects/appointmentPage_PO";

const basePage = new Base_PO();

Given("I navigate to CURA Healthcare Service Appointment Page", () => {
  basePage.navigate("/#appointment");
});

When("I select facility", () => {
  appointmentPage_PO.selectFacility();
});

When("I check specific healthcare program", () => {
  appointmentPage_PO.checkSpecificHealthcareProgram();
});

When("I pick visit date", () => {
  appointmentPage_PO.pickVisitDate();
});

When("I add comment", () => {
  appointmentPage_PO.AddComment();
});

When("I click Book Appointment button", () => {
  appointmentPage_PO.clickBookAppointmentBtn();
});

Then("I should be redirected to Confirmation page", () => {
  appointmentPage_PO.redirectToConfirmationPage();
});
