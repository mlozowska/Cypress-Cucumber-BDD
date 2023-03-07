Feature: CURA Healthcare Service -  Homepage

    Background: Pre-conditions
        Given I navigate to CURA Healthcare Service HOMEPAGE


    Scenario:  Homepage - navigate to Login page by clicking the button
        When I click Make Appointment button
        Then I should be redirected to Login page

    Scenario:  Homepage - navigate to Login page homepage by selecting from dropdown
        When I click hamburger icon and select Login
        Then I should be redirected to Login page

