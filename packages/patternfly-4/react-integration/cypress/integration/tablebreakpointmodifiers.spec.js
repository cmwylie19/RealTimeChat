describe('Table Breakpoint Modifers Test', function () {
    it('Navigate to demo section', function () {
        cy.visit('http://localhost:3000/');
        cy.get('#table-breakpoint-modifers-demo-nav-item-link').click();
        cy.url().should('eq', 'http://localhost:3000/table-breakpoint-modifers-demo-nav-link');
    });
    it('Verify table string', function () {
        cy.get('caption').contains('Table with hidden/visible breakpoint modifiers');
    });
    it('Check number of rows', function () {
        cy.get('.pf-c-table').find('tr').should('have.length', 5);
    });
    it('Check number of columns', function () {
        cy.get('thead').find('th').should('have.length', 5);
    });
});
