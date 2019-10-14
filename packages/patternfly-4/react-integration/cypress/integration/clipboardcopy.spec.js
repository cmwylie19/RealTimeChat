describe('Chip Group Demo Test', function () {
    it('Navigate to demo section', function () {
        cy.visit('http://localhost:3000/');
        cy.get('#clipboard-copy-demo-nav-item-link').click();
        cy.url().should('eq', 'http://localhost:3000/clipboard-copy-demo-nav-link');
    });
    it('Verify form input', function () {
        cy.get('input').should('have.class', 'pf-c-form-control');
    });
    it('Verify content expands', function () {
        cy.get('.pf-c-clipboard-copy__group-toggle').click();
        cy.get('.pf-c-clipboard-copy').should('have.class', 'pf-m-expanded');
    });
});
