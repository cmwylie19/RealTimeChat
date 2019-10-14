describe('Radio Demo Test', function () {
    it('Navigate to demo section', function () {
        cy.visit('http://localhost:3000/');
        cy.get('#radio-demo-nav-item-link').click();
        cy.url().should('eq', 'http://localhost:3000/radio-demo-nav-link');
    });
    it('Verify controlled radio', function () {
        cy.get('#radio-2').should('be.checked');
        cy.get('#radio-1').check();
        cy.get('#radio-2').should('not.be.checked');
        cy.get('#radio-1').should('be.checked');
    });
    it('Verify uncontrolled radio', function () {
        cy.get('[for="radio-3"]').contains('Uncontrolled radio 1');
        cy.get('[for="radio-4"]').contains('Uncontrolled radio 2');
    });
    it('Verify disabled radio', function () {
        cy.get('#radio-5').should('be.checked');
        cy.get('#radio-5').should('be.disabled');
        cy.get('#radio-6').should('not.be.checked');
        cy.get('#radio-6').should('be.disabled');
    });
});