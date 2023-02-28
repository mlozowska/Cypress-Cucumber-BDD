# @regression @rent-car
# Feature: CURA Healthcare Service - HOMEPAGE

#     Background: Pre-conditions
#         Given I navigate to CURA Healthcare Service Homepage


#     @smoke
#     Scenario Outline: SearchPage positive scenario - Validate RentCar From Submission
#         When I select specific country name <country>, city name <city>, and model type <model>
#         And I select pick-up '<pickupDate>' and drop-off dates '<dropoffDate>'
#         And I click on the search button
#         Then I should be redirected to Results page

#         Examples:
#             | country  | city    | model   | pickupDate | dropoffDate |
#             | Poland   | Cracow  | Fiat    | 2023-05-01 | 2023-05-01  |
#             | Poland   | Wroclaw | Audi    | 2023-01-01 | 2023-12-01  |
#             | France   | Paris   | Peugeot | 2023-12-31 | 2024-01-01  |
#             | Germainy | Berlin  | Porsche | 1999-05-01 | 2022-05-03  |

#     Scenario: SearchPage negative scenario - Invalid RentCar Date
#         When I select country name "Poland"
#         And I select city name "Wroclaw"
#         And I type model name "Suzuki"
#         And I type pick-up date "2023-05-01"
#         And I type incorrect drop-off date "1000-05-01"
#         And I click on the search button
#         Then I should be presented with Invalid Dates error message

#     Scenario: SearchPage negative scenario - Missing Pick-up Date
#         When I select country name "Germany"
#         And I select city name "Berlin"
#         And I type model name "dummyModel"
#         And I type pick-up date "2023-05"
#         And I type incorrect drop-off date "2023-12-24"
#         And I click on the search button
#         Then I should be presented with Enter Valid Date error message



