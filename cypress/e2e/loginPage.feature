@regression @login
Feature: CURA Healthcare Service - HOMEPAGE

    Background: Pre-conditions
        Given I navigate to CURA Healthcare Service Login Page

    @smoke
    Scenario Outline: Login page positive scenario - Valid Login From Submission credentials
        And I type in username '<username>'
        And I type in password <password>
        And I click on Login button
        Then I should be redirected to Appointmentp

        Examples:
            | username | password |
            | Poland   | Cracow   |
            | Poland   | Wroclaw  |
            | France   | Paris    |
            | Germainy | Berlin   |

    Scenario Outline: Login page negative scenario - Invalid Login Credentials
        And I type in username '<username>' and password <password>
        And I click on Login button
        Then I should be presented with Login Failed error message

        Examples:
            | username      | password           |
            | John Doe      | dummyPassword      |
            | dummyUsername | ThisIsNotAPassword |