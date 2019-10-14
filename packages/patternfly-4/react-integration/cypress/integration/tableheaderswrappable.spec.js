describe('Table Headers Wrappable Test', function () {
    it('Navigate to demo section', function () {
        cy.visit('http://localhost:3000/');
        cy.get('#table-headers-wrappable-demo-nav-item-link').click();
        cy.url().should('eq', 'http://localhost:3000/table-headers-wrappable-demo-nav-link');
    });
    it('Verify table string', function () {
        cy.get('caption').contains('Table with Wrappable Headers');
    });
    it('Check number of rows', function () {
        cy.get('.pf-c-table').find('tr').should('have.length', 2);
    });
    it('Check number of columns', function () {
        cy.get('thead').find('th').should('have.length', 5);
    });
});
