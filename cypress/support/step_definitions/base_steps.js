/// <reference types="cypress" />
import { When, Before } from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
  cy.log("Executes before each Scenario/Test.");
  cy.clearLocalStorage();
});

When("I wait for {int} seconds", (seconds) => {
  cy.wait(seconds * 1000);
});
