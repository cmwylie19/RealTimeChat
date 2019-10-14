describe('Label Demo Test', function () {
    it('Navigate to demo section', function () {
        cy.visit('http://localhost:3000/');
        cy.get('#label-demo-nav-item-link').click();
        cy.url().should('eq', 'http://localhost:3000/label-demo-nav-link');
    });
    it('Verify default label', function () {
        cy.get('.pf-c-label').first().contains('Default label');
    });
    it('Verify compact label', function () {
        cy.get('.pf-m-compact').contains('Compact label');
    });
});
