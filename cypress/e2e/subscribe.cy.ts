describe('newsletter Subscribe form', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it("allows users to subscribe to the email list", () => {
        cy.getByData("email-input").should('be.visible').type('tom@aol.com')
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should('be.visible').contains('Success: tom@aol.com has been successfully subscribed')
    })

    it("does not allow an invalid email", () => {
        cy.getByData("email-input").should('be.visible').type('tom')
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should('not.exist')
    })

    it("user can't subscribe If it already has a subscription", () => {
        cy.getByData("email-input").should('be.visible').type('john@example.com ')
        cy.getByData("submit-button").click()
        cy.getByData("server-error-message").should('be.visible').contains('Error: john@example.com already exists. Please use a different email address.')
    })
})