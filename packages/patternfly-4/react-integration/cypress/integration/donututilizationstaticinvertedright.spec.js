describe('Donut utilization chart with inverted static thresholds and right-aligned legend Demo Test', function () {
    it('Navigate to demo section', function () {
        cy.visit('http://localhost:3000/');
        cy.get('#donut-utilization-static-inverted-right-demo-nav-item-link').click();
        cy.url().should('eq', 'http://localhost:3000/donut-utilization-static-inverted-right-demo-nav-link');
    });
    it('Verify donut chart', function () {
        cy.get('.VictoryContainer').should('exist');
    });
    it('Verify legend string', function () {
        cy.get('text').contains('GBps');
    });
    it('Verify svg width and height', function () {
        cy.get('.VictoryContainer > svg').should('have.attr', 'width', '500');
        cy.get('.VictoryContainer > svg').should('have.attr', 'height', '230');
    });
});
