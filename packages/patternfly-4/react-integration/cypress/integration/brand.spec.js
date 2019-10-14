describe('Brand Demo Test', function () {
    it('Navigate to demo section', function () {
        cy.visit('http://localhost:3000/');
        cy.get('#brand-demo-nav-item-link').click();
        cy.url().should('eq', 'http://localhost:3000/brand-demo-nav-link');
    });
    it('Verify has src', function () {
        cy.get('img').should('have.attr', 'src');
    });
    it('Verify default alt', function () {
        cy.get('img').should('have.attr', 'alt', 'Patternfly Logo');
    });
});
