describe('Card Demo Test', function () {
    it('Navigate to demo section', function () {
        cy.visit('http://localhost:3000/');
        cy.get('#card-demo-nav-item-link').click();
        cy.url().should('eq', 'http://localhost:3000/card-demo-nav-link');
    });
    it('Verify default header', function () {
        cy.get('.pf-c-card__header').contains('Header');
    });
    it('Verify default body content', function () {
        cy.get('.pf-c-card__body').contains('Body');
    });
    it('Verify card is hoverable', function () {
        cy.get('article').first().should('have.class', 'pf-m-hoverable');
    });
    it('Verify card is compact', function () {
        cy.get('article').last().should('have.class', 'pf-m-compact');
    });
});
