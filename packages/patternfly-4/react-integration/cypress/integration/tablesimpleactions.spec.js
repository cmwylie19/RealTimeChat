describe('Table Simple Actions Test', function () {
    it('Navigate to demo section', function () {
        cy.visit('http://localhost:3000/');
        cy.get('#table-simple-actions-demo-nav-item-link').click();
        cy.url().should('eq', 'http://localhost:3000/table-simple-actions-demo-nav-link');
    });
    it('Verify table string', function () {
        cy.get('caption').contains('Actions Table');
    });
    it('Check number of rows', function () {
        cy.get('.pf-c-table').find('tr').should('have.length', 4);
    });
    it('Check number of columns', function () {
        cy.get('thead').find('th').should('have.length', 5);
    });
    it('Verify dropdown toggle', function () {
        cy.get('.pf-c-dropdown__toggle').should('exist');
        cy.get('#pf-toggle-id-2.pf-c-dropdown__toggle').click();
        cy.get('.pf-c-dropdown__menu').should('exist');
        cy.get('.pf-c-dropdown__menu-item').first().click();
    });
});
