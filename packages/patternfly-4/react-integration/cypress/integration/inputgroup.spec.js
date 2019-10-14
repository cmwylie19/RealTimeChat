describe('Input Group Demo Test', function () {
    it('Navigate to demo section', function () {
        cy.visit('http://localhost:3000/');
        cy.get('#input-group-demo-nav-item-link').click();
        cy.url().should('eq', 'http://localhost:3000/input-group-demo-nav-link');
    });
    it('Verify text input', function () {
        cy.get('#textarea1').type('Hi');
        cy.get('#textarea1').should('have.value', 'Hi');
    });
    it('Verify number input only allows numbers', function () {
        var text = cy.get('#textInput5');
        text.type('Hi');
        text.should('have.value', '');
        text.type('13');
        text.should('have.value', '13');
    });
});
