describe('Background Image Demo Test', function () {
    it('Navigate to demo section', function () {
        cy.visit('http://localhost:3000/');
        cy.get('#backgroundimage-demo-nav-item-link').click();
        cy.url().should('eq', 'http://localhost:3000/backgroundimage-demo-nav-link');
    });
    it('Verify filter has correct class', function () {
        cy.get('svg').should('have.class', 'pf-c-background-image__filter');
    });
});
