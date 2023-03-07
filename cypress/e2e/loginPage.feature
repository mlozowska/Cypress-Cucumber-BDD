@regression @login
Feature: CURA Healthcare Service - Login

    Background: Pre-conditions
        Given I navigate to CURA Healthcare Service Login Page

    @smoke
    Scenario: Login page positive scenario - Valid Login From Submission credentials
        And I type in username
        And I type in password
        And I click on Login button
        Then I should be redirected to Appointment page



    Scenario Outline: Login page negative scenario - Invalid Login Credentials
        And I type in username '<username>' and password <password>
        And I click on Login button
        Then I should be presented with Login Failed error message

        Examples:
            | username      | password           |
            | John Doe      | dummyPassword      |
            | dummyUsername | ThisIsNotAPassword |