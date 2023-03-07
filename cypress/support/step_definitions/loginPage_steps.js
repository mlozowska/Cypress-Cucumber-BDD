/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Base_PO from "../page_objects/base_PO";
import loginPage_PO from "../page_objects/loginPage_PO";

const basePage = new Base_PO();

Given("I navigate to CURA Healthcare Service Login Page", () => {
  basePage.navigate("/profile.php#login");
});

When("I type in username", (username) => {
  loginPage_PO.typeUsername(username);
});

When("I type in password", (password) => {
  loginPage_PO.typePassword(password);
});

When("I click on Login button", () => {
  loginPage_PO.clickLoginBtn();
});

Then("I should be redirected to Appointment page", () => {
  loginPage_PO.redirectToAppointmentPage();
});

Then("I should be presented with Login Failed error message", () => {
  loginPage_PO.getLoginFailedErrorMsg();
});

When(
  "I type in username {string} and password {word}",
  (username, password) => {
    loginPage_PO.typeSpecificUsername(username);
    loginPage_PO.typeSpecificPassword(password);
  }
);
