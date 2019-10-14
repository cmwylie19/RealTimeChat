describe('Table Compact Expandable Test', function () {
    it('Navigate to demo section', function () {
        cy.visit('http://localhost:3000/');
        cy.get('#table-compact-expandable-demo-nav-item-link').click();
        cy.url().should('eq', 'http://localhost:3000/table-compact-expandable-demo-nav-link');
    });
    it('Verify table string', function () {
        cy.get('caption').contains('Compact expandable table');
    });
    it('Check number of rows', function () {
        cy.get('.pf-c-table').find('tbody').should('have.length', 4);
    });
    it('Check number of columns', function () {
        cy.get('thead').find('th').should('have.length', 4);
    });
    it('Test collapsible', function () {
        cy.get('button#expandable-toggle1').click();
        cy.get('button#expandable-toggle1').click();
        cy.get('button#expandable-toggle3').click();
        cy.get('button#expandable-toggle3').click();
        cy.get('button#expandable-toggle5').click();
        cy.get('button#expandable-toggle5').click();
    });
});
