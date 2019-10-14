describe('Text Input Demo Test', function () {
    it('Navigate to demo section', function () {
        cy.visit('http://localhost:3000/');
        cy.get('#text-input-demo-nav-item-link').click();
        cy.url().should('eq', 'http://localhost:3000/text-input-demo-nav-link');
    });
    it('Verify text input', function () {
        cy.get('#text').type('Hello world');
        cy.get('#text').should('have.value', 'Hello world');
    });
    it('Verify disabled text input', function () {
        cy.get('#text-disabled').should('be.disabled');
    });
    it('Verify read-only input', function () {
        cy.get('#text-read-only').should('have.attr', 'readonly');
    });
    it('Verify invalid text input', function () {
        cy.get('#text-invalid').should('have.attr', 'aria-invalid');
    });
});
