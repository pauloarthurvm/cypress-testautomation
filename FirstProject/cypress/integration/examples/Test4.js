/// <reference types="Cypress" />

describe('My Fourth Test Suite', function() {

    it('TC01', function() {

        // cy.visit('http://automationpractice.com/index.php');
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()

        // Alert with only OK option
        cy.on('window:alert', (str) => {
            // Mocha comparison
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        // Alert with 2 buttons options
        cy.on('window:confirm', (str) => {
            // Mocha comparison
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

        // Use .invoke to invoke a function
        // removeAttr is a jquery function
        cy.get('#opentab').invoke('removeAttr', 'target').click()

    })

})