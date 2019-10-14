describe('Table Compact Borderless Test', function () {
    it('Navigate to demo section', function () {
        cy.visit('http://localhost:3000/');
        cy.get('#table-compact-borderless-rows-demo-nav-item-link').click();
        cy.url().should('eq', 'http://localhost:3000/table-compact-borderless-rows-demo-nav-link');
    });
    it('Verify table string', function () {
        cy.get('caption').contains('Compact Table with borderless rows');
    });
    it('Check number of rows', function () {
        cy.get('.pf-c-table').find('tr').should('have.length', 4);
    });
    it('Check number of columns', function () {
        cy.get('thead').find('th').should('have.length', 4);
    });
});
