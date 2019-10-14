describe('Form Select Demo Test', function () {
    it('Navigate to demo section', function () {
        cy.visit('http://localhost:3000/');
        cy.get('#form-select-demo-nav-item-link').click();
        cy.url().should('eq', 'http://localhost:3000/form-select-demo-nav-link');
    });
    it('Verify default value content', function () {
        cy.get('select').should('have.value', '2');
    });
    it('Verify form allows correct selection', function () {
        cy.get('select').select('3').should('have.value', '3');
    });
    it('Verify disabled select', function () {
        cy.get('.pf-c-form-control').find('optgroup[label="Group3"]').should('be.disabled');
    });
});
