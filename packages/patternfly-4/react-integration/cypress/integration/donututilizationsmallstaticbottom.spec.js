describe('Small donut utilization chart with static thresholds with bottom-aligned legend and right-aligned subtitle Demo Test', function () {
    it('Navigate to demo section', function () {
        cy.visit('http://localhost:3000/');
        cy.get('#donut-utilization-sm-static-bottom-demo-nav-item-link').click();
        cy.url().should('eq', 'http://localhost:3000/donut-utilization-sm-static-bottom-demo-nav-link');
    });
    it('Verify donut chart', function () {
        cy.get('.VictoryContainer').should('exist');
    });
    it('Verify legend string', function () {
        cy.get('text').contains('GBps');
    });
    it('Verify svg width and height', function () {
        cy.get('.VictoryContainer > svg').should('have.attr', 'width', '675');
        cy.get('.VictoryContainer > svg').should('have.attr', 'height', '225');
    });
});
