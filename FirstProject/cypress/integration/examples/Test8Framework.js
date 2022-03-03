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

    })

})