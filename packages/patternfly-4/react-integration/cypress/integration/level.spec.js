describe('Level Demo Test', function () {
    it('Navigate to demo section', function () {
        cy.visit('http://localhost:3000/');
        cy.get('#level-demo-nav-item-link').click();
        cy.url().should('eq', 'http://localhost:3000/level-demo-nav-link');
    });
    it('Verify level item and gutter', function () {
        cy.get('.pf-c-page__main-section').find('div').first().should('have.class', 'pf-l-level pf-m-gutter');
    });
});
