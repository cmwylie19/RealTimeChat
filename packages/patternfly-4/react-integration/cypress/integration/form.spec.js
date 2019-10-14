describe('Form Demo Test', function () {
    it('Navigate to demo section', function () {
        cy.visit('http://localhost:3000/');
        cy.get('#form-demo-nav-item-link').click();
        cy.url().should('eq', 'http://localhost:3000/form-demo-nav-link');
    });
    it('Verify default value content', function () {
        cy.get('input').first().should('have.value', 'Five');
    });
    it('Verify form allows correct input', function () {
        cy.get('input').first().clear().type('5');
        cy.get('.pf-c-form__helper-text').contains('Please write your age');
    });
    it('Verify form identifies input error', function () {
        cy.get('input').first().clear().type('Something');
        cy.get('.pf-c-form__helper-text').contains('Age has to be a number');
    });
});
