describe('Dropdown Demo Test', function () {
    it('Navigate to demo section', function () {
        cy.visit('http://localhost:3000/');
        cy.get('#dropdown-demo-nav-item-link').click();
        cy.url().should('eq', 'http://localhost:3000/dropdown-demo-nav-link');
    });
    it('Verify toggle dropdown', function () {
        cy.get('button').should('have.class', 'pf-c-dropdown__toggle');
    });
    it('Verify dropdown menu expanded', function () {
        cy.get('button').last().click();
        cy.get('.pf-c-dropdown').should('have.class', 'pf-m-expanded');
    });
    it('Verify menu selection/link works', function () {
        cy.get('.pf-c-dropdown__menu-item').first().click();
        cy.url().should('eq', 'https://patternfly-react.surge.sh/patternfly-4/');
    });
});
