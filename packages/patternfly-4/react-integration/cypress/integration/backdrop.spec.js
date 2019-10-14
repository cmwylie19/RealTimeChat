describe('Backdrop Demo Test', function () {
    it('Navigate to demo section', function () {
        cy.visit('http://localhost:3000/');
        cy.get('#backdrop-demo-nav-item-link').click();
        cy.url().should('eq', 'http://localhost:3000/backdrop-demo-nav-link');
    });
    it('Verify has correct className', function () {
        cy.get('.backdrop').should('have.class', 'pf-c-backdrop');
    });
});
