/// <reference types="Cypress" />

describe('My Third Api Test Suite', function() {

    it('My First Api Test Case', function() {
        cy.request("POST", "http://216.10.245.166/Library/Addbook.php", 
            {
                "name": "Learn Appium",
                "isbn": "bcdsss",
                "aisle": "22s7",
                "author": "John foe"
            }
        ).then(function(response) {
            expect(response.body).to.have.property("Msg", "successfully added")
            expect(response.status).to.equal(200)
        })
    })
})