describe('Text Demo Test', function () {
    it('Navigate to demo section', function () {
        cy.visit('http://localhost:3000/');
        cy.get('#text-demo-nav-item-link').click();
        cy.url().should('eq', 'http://localhost:3000/text-demo-nav-link');
    });
    it('Verify header text and text content', function () {
        cy.get('.pf-c-content h1').contains('Header text');
    });
    it('Verify text list and text content', function () {
        cy.get('.pf-c-content ul').contains('li');
    });
    it('Verify text list item and text content', function () {
        cy.get('.pf-c-content li').contains('Text list item');
    });
});
