describe('Button Demo Test', function () {
    it('Navigate to demo section', function () {
        cy.visit('http://localhost:3000/');
        cy.get('#button-demo-nav-item-link').click();
        cy.url().should('eq', 'http://localhost:3000/button-demo-nav-link');
    });
    it('Verify primary button', function () {
        cy.get('button').should('have.class', 'pf-m-primary');
    });
    it('Verify secondary button', function () {
        cy.get('button').should('have.class', 'pf-m-secondary');
    });
    it('Verify tertiary button', function () {
        cy.get('button').should('have.class', 'pf-m-tertiary');
    });
    it('Tertiary button should be disabled', function () {
        cy.get('.pf-m-tertiary').should('have.class', 'pf-m-disabled');
    });
    it('Verify primary button clicks', function () {
        cy.get('.pf-m-primary').click();
        cy.url().should('not.eq', 'http://localhost:3000/button-demo-nav-link');
    });
});
