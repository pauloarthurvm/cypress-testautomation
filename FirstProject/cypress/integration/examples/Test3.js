/// <reference types="Cypress" />

describe('My Third Test Suite', function() {

    it('TC01', function() {

        // cy.visit('http://automationpractice.com/index.php');
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        
        // Check more than 1 checkbox
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])

        cy.get('select').select('option2').should('have.value', 'option2')
    })

})