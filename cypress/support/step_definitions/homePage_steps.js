/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Base_PO from "../page_objects/base_PO";
import homePage_PO from "../page_objects/homePage_PO";

const basePage = new Base_PO();

Given("I navigate to CURA Healthcare Service HOMEPAGE", () => {
  basePage.navigate("");
  homePage_PO.validateUrl();
  homePage_PO.validateHeadings();
});

When("I click Make Appointment button", () => {
  homePage_PO.clickMakeAppointmentBtb();
});

When("I click hamburger icon and select Login", () => {
  homePage_PO.clickHamburgerIcon();
  homePage_PO.clickLogin();
});

Then("I should be redirected to Login page", () => {
  homePage_PO.redirectToLoginpage();
});
