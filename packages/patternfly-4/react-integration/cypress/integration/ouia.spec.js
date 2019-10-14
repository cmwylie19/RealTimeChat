describe('Switch Demo Test', function () {
    it('Navigate to demo section', function () {
        cy.visit('http://localhost:3000/');
        cy.get('#ouia-demo-nav-item-link').click();
        cy.url().should('eq', 'http://localhost:3000/ouia-demo-nav-link');
    });
    it('Verify Switches exist', function () {
        cy.get('.pf-c-switch[for="simple-switch"]').should('exist');
        cy.get('.pf-c-switch[for="disabled-switch-off"]').should('exist');
    });
    it('Verify OUIA attributes exist', function () {
        cy.get('.pf-c-switch[for="simple-switch"]').should('have.attr', 'data-ouia-component-type', 'Switch');
        cy.get('.pf-c-switch[for="simple-switch"]').should('have.attr', 'data-ouia-component-id', 'first_switch');
        cy.get('.pf-c-switch[for="disabled-switch-off"]').should('have.attr', 'data-ouia-component-type', 'Switch');
        cy.get('.pf-c-switch[for="disabled-switch-off"]').should('not.have.attr', 'data-ouia-component-id');
    });
});
