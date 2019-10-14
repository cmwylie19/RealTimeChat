describe('List Demo Test', function () {
    it('Navigate to demo section', function () {
        cy.visit('http://localhost:3000/');
        cy.get('#list-demo-nav-item-link').click();
        cy.url().should('eq', 'http://localhost:3000/list-demo-nav-link');
    });
    it('Verify plain list', function () {
        cy.get('.pf-c-list li').contains('I am a plain list item');
    });
    it('Verify inline list', function () {
        cy.get('.pf-m-inline li').contains('I am an inline list item');
    });
});
