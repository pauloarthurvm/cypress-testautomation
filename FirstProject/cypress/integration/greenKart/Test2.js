/// <reference types="Cypress" />

describe('My Second Test Suite', function() {

    it('TC01', function() {

        // cy.visit('http://automationpractice.com/index.php');
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type("ca")
        cy.wait(2000)
        
        // Set it to a variable, for future UI locator modifications
        cy.get('.products').as('productsLocator')
        cy.get('@productsLocator').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text()
            if (textVeg.includes("Cashews")) {
                cy.wrap($el).find('button').click()
            }
        })

        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()

    })

})