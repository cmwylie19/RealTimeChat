describe('Line Chart Multicolor Demo Test', function () {
    it('Navigate to demo section', function () {
        cy.visit('http://localhost:3000/');
        cy.get('#line-chart-simple-demo-nav-item-link').click();
        cy.url().should('eq', 'http://localhost:3000/line-chart-simple-demo-nav-link');
    });
    it('Verify line chart', function () {
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
