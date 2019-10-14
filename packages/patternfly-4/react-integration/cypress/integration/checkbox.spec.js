describe('Checkbox Demo Test', function () {
    it('Navigate to demo section', function () {
        cy.visit('http://localhost:3000/');
        cy.get('#checkbox-demo-nav-item-link').click();
        cy.url().should('eq', 'http://localhost:3000/checkbox-demo-nav-link');
    });
    it('Verify first checkbox can be checked', function () {
        cy.get('#check-1').check().should('be.checked');
        cy.get('#check-1').uncheck().should('not.be.checked');
    });
    it('Verify second checkbox can be checked', function () {
        cy.get('#check-2').check().should('be.checked');
        cy.get('#check-2').uncheck().should('not.be.checked');
    });
    it('Verify default label', function () {
        cy.get('label').contains('Controlled CheckBox');
    });
});
