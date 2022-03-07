beforeEach(function () {
    // runs once before each test
    cy.fixture("test8framework").then(function(data) {
        this.data = data
    })
})