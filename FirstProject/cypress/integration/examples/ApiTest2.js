/// <reference types="Cypress" />

describe('My Second Api Test Suite', function() {

    it('My First Api Test Case', function() {
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/")
        cy.intercept("GET", "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty", 
            (request) => {
                request.url = "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"
                request.continue((response) => {
                    // expect(response.statusCode).to.equal(403)
                })
        }).as("dummyUrl")
        cy.get("button[class='btn btn-primary']").click()
        cy.wait("@dummyUrl")
    })
})