/// <reference types="Cypress" />

describe('My Seventh Test Suite', function() {

    it('TC01', function() {

        // cy.visit('http://automationpractice.com/index.php');
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('#opentab').then(function(el) {
            const url = el.prop('href')
            cy.log(url)
            cy.visit(url)
        })

    })

})