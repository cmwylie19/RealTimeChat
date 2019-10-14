describe('Split Demo Test', function () {
    it('Navigate to demo section', function () {
        cy.visit('http://localhost:3000/');
        cy.get('#split-demo-nav-item-link').click();
        cy.url().should('eq', 'http://localhost:3000/split-demo-nav-link');
    });
    it('Verify gutter', function () {
        cy.get('.pf-l-split').should('have.class', 'pf-m-gutter');
    });
    it('Verify filled split item', function () {
        cy.get('.pf-l-split__item').should('have.class', 'pf-m-fill');
    });
    it('Verify component prop', function () {
        cy.get('.pf-c-page__main-section').find('article');
    });
});
