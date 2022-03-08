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
    })
})