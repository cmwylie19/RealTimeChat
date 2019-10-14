describe('Switch Demo Test', function () {
    it('Navigate to demo section', function () {
        cy.visit('http://localhost:3000/');
        cy.get('#switch-demo-nav-item-link').click();
        cy.url().should('eq', 'http://localhost:3000/switch-demo-nav-link');
    });
    it('Verify Switches exist and initial state', function () {
        cy.get('#simple-switch').should('exist');
        cy.get('#simple-switch').should('be.checked');
        cy.get('#disabled-switch-off').should('exist');
        cy.get('#disabled-switch-off').should('not.be.checked');
    });
    it('Verify switch can be toggled', function () {
        cy.get('#simple-switch').click({ force: true });
        cy.get('#simple-switch').should('not.be.checked');
        cy.get('#simple-switch').click({ force: true });
        cy.get('#simple-switch').should('be.checked');
    });
    it('Verify disabled switch can not be toggled', function () {
        cy.get('#disabled-switch-off').should('be.disabled');
        cy.get('#disabled-switch-off').should('not.be.checked');
        cy.get('#disabled-switch-off').click({ force: true });
        cy.get('#disabled-switch-off').should('not.be.checked');
    });
});
