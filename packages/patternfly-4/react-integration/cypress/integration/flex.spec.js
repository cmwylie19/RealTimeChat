describe('Flex Demo Test', function () {
    it('Navigate to demo section', function () {
        cy.visit('http://localhost:3000/');
        cy.get('#flex-demo-nav-item-link').click();
        cy.url().should('eq', 'http://localhost:3000/flex-demo-nav-link');
    });
    it('Verify flex', function () {
        cy.get('.pf-c-page__main-section').find('div').first().should('have.class', 'pf-l-flex');
    });
    it('Verify flex item', function () {
        cy.get('.pf-l-flex').find('div').first().should('contain', 'Flex item');
    });
});
