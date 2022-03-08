/// <reference types="Cypress" />

describe('My First Api Test Suite', function() {

    it('My First Api Test Case', function() {

        cy.visit("https://rahulshettyacademy.com/angularAppdemo/")
        cy.intercept({
            // requestObject
            method: "GET",
            url: "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty"
        }, {
            // responseObject
            statusCode: 200,
            body: 
                [
                    {
                        "book_name": "RestAssured with Java",
                        "isbn": "RSU",
                        "aisle": "2301"
                    }
                ]
        }).as("bookretrievals")
        cy.get("button[class='btn btn-primary']").click()
        cy.wait("@bookretrievals")
        cy.get('p').should("have.text", "Oops only 1 Book available")
    })
})