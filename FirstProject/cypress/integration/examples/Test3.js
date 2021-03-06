/// <reference types="Cypress" />

describe('My Third Test Suite', function() {

    it('TC01', function() {

        // cy.visit('http://automationpractice.com/index.php');
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        
        // Check more than 1 checkbox
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])

        // Static dropdown
        cy.get('select').select('option2').should('have.value', 'option2')

        // Dynamic dropdown
        cy.get('#autocomplete').type("ind")
        cy.get('.ui-menu-item').each(($el, index, $list) => {
            if ($el.text() === 'India') {
                cy.wrap($el).click()
            }
        })
        cy.get('#autocomplete').should('have.value', 'India')

        // Handle Invisible Objects
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        // Radio Buttons
        cy.get('[value="radio2"]').check().should('be.checked')
        

    })

})