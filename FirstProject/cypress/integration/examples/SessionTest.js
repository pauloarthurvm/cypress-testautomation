/// <reference types="Cypress" />

describe('My Session Test Suite', function() {

    it('TC01', function() {

        cy.loginApi().then(function() {
            cy.visit("http://rahulshettyacademy.com/client", {
                onBeforeLoad: function(window) {
                    window.localStorage.setItem("token", Cypress.env("token"))
                }
            })
        })
        cy.get(".card-body button:last-of-type").eq(1).click()
        cy.get("[routerlink*='cart']").click()
        cy.contains("Checkout").click()
        cy.get("[placeholder*='Select Country']").type("ind")
        cy.get(".ta-results button").each(($e1, index, $list) => {
            if ($e1.text === "India") {
                cy.wrap($e1).click()
            }
        })
    })
})