/// <reference types="Cypress" />

describe('My Eighth Test Suite', function() {

    before(function() {
        // runs once before all rests in the block
        cy.fixture("test8framework").then(function(data) {
            this.data = data
        })
    })

    it('TC01', function() {

        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get("input[name='name']:nth-child(2)").type(this.data.name)
        cy.get("select").select(this.data.gender)
        
        cy.get(":nth-child(4) > .ng-untouched").should("have.value", this.data.name)
        cy.get("input[name='name']:nth-child(2)").should("have.attr", "minlength", "2")
        cy.get("#inlineRadio3").should("be.disabled")

        cy.get(':nth-child(2) > .nav-link').click()
        cy.selectProduct("Blackberry")

    })

})