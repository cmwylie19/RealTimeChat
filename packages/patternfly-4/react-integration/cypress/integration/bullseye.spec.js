describe('Bullseye Demo Test', function () {
    it('Navigate to demo section', function () {
        cy.visit('http://localhost:3000/');
        cy.get('#bullseye-demo-nav-item-link').click();
        cy.url().should('eq', 'http://localhost:3000/bullseye-demo-nav-link');
    });
    it('Verify bullseye', function () {
        cy.get('.pf-l-bullseye').contains('Bullseye ◎ layout');
    });
    it('Verify component prop', function () {
        cy.get('.pf-c-page__main-section').find('span');
    });
});
