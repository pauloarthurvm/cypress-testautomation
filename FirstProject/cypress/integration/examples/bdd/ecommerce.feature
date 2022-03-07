Feature: End to Ende Ecommerce validation

    Application Regression

    Scenario: Ecommerce products delivery
        Given I open Ecommerce page
        When I add items to cart
        And Validate the total prices
        Then Select the country, submit and verify (Success) message