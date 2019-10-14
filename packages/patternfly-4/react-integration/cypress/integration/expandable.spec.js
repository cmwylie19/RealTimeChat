describe('Expandable Demo Test', function () {
    it('Navigate to demo section', function () {
        cy.visit('http://localhost:3000/');
        cy.get('#expandable-demo-nav-item-link').click();
        cy.url().should('eq', 'http://localhost:3000/expandable-demo-nav-link');
    });
    it('Verify controlled expandable', function () {
        cy.get('.pf-c-expandable__toggle').first().click();
        cy.get('.pf-c-expandable').first().should('have.class', 'pf-m-expanded');
    });
    it('Verify uncontrolled expandable', function () {
        cy.get('.pf-c-expandable__toggle').last().click();
        cy.get('.pf-c-expandable').last().should('have.class', 'pf-m-expanded');
    });
});
