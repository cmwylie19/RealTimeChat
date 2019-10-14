describe('Table Selectable Test', function () {
    it('Navigate to demo section', function () {
        cy.visit('http://localhost:3000/');
        cy.get('#table-selectable-demo-nav-item-link').click();
        cy.url().should('eq', 'http://localhost:3000/table-selectable-demo-nav-link');
    });
    it('Verify table string', function () {
        cy.get('caption').contains('Selectable Table');
    });
    it('Check number of rows', function () {
        cy.get('.pf-c-table').find('tr').should('have.length', 4);
    });
    it('Check number of columns', function () {
        cy.get('thead').find('th').should('have.length', 5);
    });
    it('Test selectable', function () {
        cy.get('.pf-c-table__check').should('exist');
        cy.get('.pf-c-table__check').click({ multiple: true });
    });
});
