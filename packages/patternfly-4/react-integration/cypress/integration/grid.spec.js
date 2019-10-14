describe('Grid Demo Test', function () {
    it('Navigate to demo section', function () {
        cy.visit('http://localhost:3000/');
        cy.get('#grid-demo-nav-item-link').click();
        cy.url().should('eq', 'http://localhost:3000/grid-demo-nav-link');
    });
    it('Verify grid item span', function () {
        cy.get('.pf-l-grid__item').first().should('have.class', 'pf-m-8-col');
    });
    it('Verify grid item rowSpan', function () {
        cy.get('.pf-m-4-col').first().should('have.class', 'pf-m-2-row');
    });
});
