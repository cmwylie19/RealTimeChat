describe('Area Chart Simple Demo Test', function () {
    it('Navigate to demo section', function () {
        cy.visit('http://localhost:3000/');
        cy.get('#sparkline-chart-demo-nav-item-link').click();
        cy.url().should('eq', 'http://localhost:3000/sparkline-chart-demo-nav-link');
    });
    it('Verify area chart', function () {
        cy.get('.VictoryContainer').should('exist');
    });
    it('Verify legend string', function () {
        cy.get('text').contains('CPU');
    });
    it('Verify svg width and height', function () {
        cy.get('.VictoryContainer > svg').should('have.attr', 'width', '400');
        cy.get('.VictoryContainer > svg').should('have.attr', 'height', '100');
    });
});
