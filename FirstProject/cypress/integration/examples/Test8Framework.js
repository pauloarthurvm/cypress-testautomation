/// <reference types="Cypress" />
import HomePage from "../pageObjects/HomePage"
import ProductPage from "../pageObjects/ProductPage"

describe('My Eighth Test Suite', function() {

    beforeEach(function() {
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

        // Works as debug
        // cy.pause()

        cy.get(':nth-child(2) > .nav-link').click()

        this.data.productName.forEach(function(element) {
            cy.selectProduct(element)
        })
    })

    it("TC02 - Same but using pageObject", function() {
        Cypress.config("defaultCommandTimeout", 8000)
        const homePage = new HomePage()
        const productPage = new ProductPage()
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        
        homePage.getTowWayDataBinding().should("have.value", this.data.name)
        homePage.getEditBox().should("have.attr", "minlength", "2")
        homePage.getEntrepreneaur().should("be.disabled")

        // Works as debug
        // cy.pause()

        homePage.getShopTab().click()

        this.data.productName.forEach(function(element) {
            cy.selectProduct(element)
        })

        productPage.getCheckoutButton().click()

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
        cy.get(':nth-child(4) > :nth-child(5) > .btn').click()
        cy.get('#country').type("India")
        cy.get(".suggestions > ul > li > a").click()
        cy.get('.checkbox').click()
        cy.get("input[type='submit']").click()
        // To way to verify text
        // cy.get('.alert').should("include.text", "Success! Thank you! Your order will be delivered in next few weeks")
        cy.get(".alert").then(function(e1) {
            // const actualText = e1.text()
            expect(e1.text().includes("Success")).to.be.true
        })


    })

})