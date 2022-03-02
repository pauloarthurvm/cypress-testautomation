/// <reference types="Cypress" />

describe('My Sixth Test Suite', function() {

    it('TC01', function() {

        // cy.visit('http://automationpractice.com/index.php');
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        // Using show() jquery method
        cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
<<<<<<< HEAD
        // Use force:true if not using show()
        // cy.contains('Top').click( {force: true} )
=======
>>>>>>> 6ee548404c708e3060be145f43bbe4ab720d88b6
        cy.url().should('include', 'top')

    })

})