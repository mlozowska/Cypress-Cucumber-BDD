Feature: CURA Healthcare Service -  Homepage

    Background: Pre-conditions
        Given I navigate to CURA Healthcare Service HOMEPAGE


    Scenario:  Landing page - navigate to Login page by clicking the button
        When I click Make Appointment button
        Then I should be redirected to Login page

    Scenario:  Landing page - navigate to Login page homepage by selecticting from dropdown
        When I click hamburger icon
        And I select Login
        Then I should be redirected to Login page


