describe('Tooltip Demo Test', function () {
    it('Navigate to tooltip section', function () {
        cy.visit('http://localhost:3000/');
        cy.get('#tooltip-demo-nav-item-link').click();
        cy.url().should('eq', 'http://localhost:3000/tooltip-demo-nav-link');
    });
    it('Display Tooltip', function () {
        cy.get('div[id="tooltipTarget"]').then(function (tooltipLink) {
            cy.get('.tippy-popper').should('not.exist');
            cy.wrap(tooltipLink).trigger('mouseenter')
                .get('.tippy-popper').should('exist')
                .get('.tippy-popper').contains('World');
        });
    });
});
