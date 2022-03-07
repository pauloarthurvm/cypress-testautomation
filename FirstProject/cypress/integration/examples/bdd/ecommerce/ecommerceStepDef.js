import { Given, When, Then } from  "cypress-cucumber-preprocessor/steps"

const homePage = new HomePage()
const productPage = new ProductPage()

Given ("I open Ecommerce page", () => {
    cy.visit(Cypress.env("url") + "/angularpractice")
})

When ("I add items to cart", () => {
    homePage.getShopTab().click()

    this.data.productName.forEach(function(element) {
        cy.selectProduct(element)
    })
    productPage.getCheckoutButton().click()
})

And ("Validate the total prices", () => {
    var sum = 0
    cy.get("tr td:nth-child(4) strong").each(($e1, index, $list) => {
        cy.log($e1.text())
        var result = $e1.text().split(" ")
        result = result[1].trim()
        sum = Number(sum) + Number(result)
    }).then(function() {
        cy.log(sum)
    })
    cy.get("h3 strong").then(function(e1) {
        var result = e1.text().split(" ")
        result = result[1].trim()
        expect(Number(result)).to.equal(sum)
    })
})

Then ("Select the country, submit and verify (Success) message", () => {
    cy.get(':nth-child(4) > :nth-child(5) > .btn').click()
    cy.get('#country').type("India")
    cy.get(".suggestions > ul > li > a").click()
    cy.get('.checkbox').click()
    cy.get("input[type='submit']").click()
    // Two way to verify text
    // cy.get('.alert').should("include.text", "Success! Thank you! Your order will be delivered in next few weeks")
    cy.get(".alert").then(function(e1) {
        // const actualText = e1.text()
        expect(e1.text().includes("Success")).to.be.true
    })
})