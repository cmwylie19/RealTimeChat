describe('Table Sortable Test', function () {
    it('Navigate to demo section', function () {
        cy.visit('http://localhost:3000/');
        cy.get('#table-sortable-demo-nav-item-link').click();
        cy.url().should('eq', 'http://localhost:3000/table-sortable-demo-nav-link');
    });
    it('Verify table string', function () {
        cy.get('caption').contains('Sortable Table');
    });
    it('Check number of rows', function () {
        cy.get('.pf-c-table').find('tr').should('have.length', 4);
    });
    it('Check number of columns', function () {
        cy.get('thead').find('th').should('have.length', 5);
    });
    it('Test sortable transformer', function () {
        cy.get('.pf-c-table__sort').should('exist');
        cy.get('.pf-c-table__sort').first().click();
        cy.get('td').first().contains('a');
        cy.get('.pf-c-table__sort').first().click();
        cy.get('.pf-c-table__sort').last().click();
        cy.get('td').eq(2).contains('a');
    });
});
