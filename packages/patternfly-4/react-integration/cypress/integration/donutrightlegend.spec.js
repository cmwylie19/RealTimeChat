describe('Donut Right Legend Demo Test', function () {
    it('Navigate to demo section', function () {
        cy.visit('http://localhost:3000/');
        cy.get('#donut-chart-right-legend-demo-nav-item-link').click();
        cy.url().should('eq', 'http://localhost:3000/donut-chart-right-legend-demo-nav-link');
    });
    it('Verify donut chart', function () {
        cy.get('.VictoryContainer').should('exist');
    });
    it('Verify legend string', function () {
        cy.get('text').contains('Pets');
    });
    it('Verify svg width and height', function () {
        cy.get('.VictoryContainer > svg').should('have.attr', 'width', '350');
        cy.get('.VictoryContainer > svg').should('have.attr', 'height', '230');
    });
});
