describe('Empty State Demo Test', function () {
    it('Navigate to demo section', function () {
        cy.visit('http://localhost:3000/');
        cy.get('#empty-state-demo-nav-item-link').click();
        cy.url().should('eq', 'http://localhost:3000/empty-state-demo-nav-link');
    });
    it('Verify large empty state', function () {
        cy.get('.pf-c-empty-state').contains('Large Empty State');
    });
    it('Verify full empty state', function () {
        cy.get('.pf-c-empty-state').contains('Full Empty State');
    });
    it('Verify small empty state', function () {
        cy.get('.pf-c-empty-state').contains('Small Empty State');
    });
});
