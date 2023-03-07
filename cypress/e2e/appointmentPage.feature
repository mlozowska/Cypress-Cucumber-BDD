Feature: CURA Healthcare Service - Appointment Page

    Background: Pre-conditions
        Given I navigate to CURA Healthcare Service Appointment Page

    Scenario Outline: Appointment Page positive scenario - Vali From Submission credentials
        And I select facility '<facility>'
        And I pick visit date '<visitDate>'
        And I add comment '<comment>'
        And I click Book Appointment button
        Then I should be redirected to Confirmation page

            Examples
            | facility                        | visitDate  | comment            |
            | Seul CURA Healthcare Center     | 2023-04-23 | Hello              |
            | Tokyo CURA Healthcare Center    | 2023-12-12 | This is a comment! |
            | Hongkong CURA Healthcare Center | 2025-01-04 | 123                |
