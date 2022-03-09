/// <reference types="Cypress" />

const neatCsv = require("neat-csv")

describe('My Session Test Suite', function() {

    it('TC01', function() {

        Cypress.config("pageLoadTimeout", 30000)
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
        cy.get("[placeholder*='Select Country']").type("Ind")
        cy.get(".ta-results button").each(($e1, index, $list) => {
            if ($e1.text === "India") {
                cy.wrap($e1).click()
            }
        })
        cy.get(".action__submit").click()
        cy.wait(2000)
        cy.get(".order-summary button").click()
        Cypress.config("fileServerFolder")
        cy.readFile("path/to/file.csv").then(async function(text) {
            const csv = await neatCsv(text)
            console.log(csv)
        })
    })
})