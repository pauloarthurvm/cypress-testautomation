/// <reference types="Cypress" />

describe('My Fifth Test Suite', function() {

    it('TC01', function() {

        // cy.visit('http://automationpractice.com/index.php');
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
            const text = $el.text()
            // cy.log(text + " index: " + index)
            if (text.includes("Python")) {
                cy.log(text)
                cy.get('tr td:nth-child(2)').eq(index).next()
                    .then(function(price) {
                        const priceText = price.text()
                        expect(priceText).to.equal("25")
                    })
            }
        })

    })

})