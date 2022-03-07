Feature: End to Ende Ecommerce validation

    Application Regression

    @Regression
    Scenario: Ecommerce products delivery
        Given I open Ecommerce page
        When I add items to cart
        And Validate the total prices
        Then Select the country, submit and verify Success message
    
    @Smoke
    Scenario: Filling the form to shop
        Given I open Ecommerce page
        When I fill the form details
            |name   |gender |
            |Bobz   |Male   |
        Then validate the forms behaviour
        And select the shop page