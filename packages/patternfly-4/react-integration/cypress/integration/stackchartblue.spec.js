describe('Stack Chart Gold Demo Test', function () {
    it('Navigate to demo section', function () {
        cy.visit('http://localhost:3000/');
        cy.get('#stack-blue-demo-nav-item-link').click();
        cy.url().should('eq', 'http://localhost:3000/stack-blue-demo-nav-link');
    });
    it('Verify stack chart', function () {
        cy.get('.VictoryContainer').should('exist');
    });
    it('Verify legend string', function () {
        cy.get('text').contains('Cats');
    });
    it('Verify svg width and height', function () {
        cy.get('.VictoryContainer > svg').should('have.attr', 'width', '600');
        cy.get('.VictoryContainer > svg').should('have.attr', 'height', '250');
    });
});
