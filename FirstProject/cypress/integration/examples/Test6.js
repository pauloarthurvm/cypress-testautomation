/// <reference types="Cypress" />

describe('My Sixth Test Suite', function() {

    it('TC01', function() {

        // cy.visit('http://automationpractice.com/index.php');
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        // Using show() jquery method
        cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        // Use force:true if not using show()
        // cy.contains('Top').click( {force: true} )
        cy.url().should('include', 'top')

    })

})