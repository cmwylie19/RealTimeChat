describe('Badge Demo Test', function () {
    it('Navigate to demo section', function () {
        cy.visit('http://localhost:3000/');
        cy.get('#badge-demo-nav-item-link').click();
        cy.url().should('eq', 'http://localhost:3000/badge-demo-nav-link');
    });
    it('Verify badge is unread', function () {
        cy.get('.pf-c-badge').should('have.class', 'pf-m-unread');
    });
    it('Verify default badge', function () {
        cy.get('.pf-c-badge').contains('7');
    });
});
