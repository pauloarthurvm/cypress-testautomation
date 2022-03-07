/// <reference types="Cypress" />

describe('My First Test Suite', function() {

    it('My First Test Case', function() {

        // cy.visit('http://automationpractice.com/index.php');
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type("ca")
        cy.wait(2000)
        cy.get(".product").should("have.length", 5)
        cy.get(".product:visible").should("have.length", 4)
        cy.get('.products').find('.product').should('have.length', 4)

        // Set it to a variable, for future UI locator modifications
        cy.get('.products').as('productsLocator')
        cy.get('@productsLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function(){
            console.log("Not cypress log method - but resolved by promise")
        })
        // Same as above -> cy.get(':nth-child(3) > .product-action > button').click()

        console.log("Not cypress log method")

        cy.get('.products').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text()
            if (textVeg.includes("Cashews")) {
                cy.wrap($el).find('button').click()
            }
        })

        // Assert logo name
        cy.get('.brand').should('have.text', 'GREENKART')

        // Print logo
        cy.get('.brand').then(function(logoelement) {
            cy.log(logoelement.text())
        })


    })

    it('My Second Test Case', function() {


        
    })



})