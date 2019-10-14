describe('Table Compound Expandable Test', function () {
    it('Navigate to demo section', function () {
        cy.visit('http://localhost:3000/');
        cy.get('#table-compound-expandable-demo-nav-item-link').click();
        cy.url().should('eq', 'http://localhost:3000/table-compound-expandable-demo-nav-link');
    });
    it('Verify table string', function () {
        cy.get('caption').contains('Compound expandable table');
    });
    it('Test expandable/collapsible', function () {
        cy.get('button.pf-c-button.pf-m-link').first().click();
        cy.get('button.pf-c-button.pf-m-link').eq(1).click();
        cy.get('button.pf-c-button.pf-m-link').eq(2).click();
        cy.get('button.pf-c-button.pf-m-link').eq(3).click();
        cy.get('button.pf-c-button.pf-m-link').eq(3).click();
        cy.get('button.pf-c-button.pf-m-link').first().click();
        cy.get('button.pf-c-button.pf-m-link').eq(4).click();
        cy.get('button.pf-c-button.pf-m-link').eq(5).click();
        cy.get('button.pf-c-button.pf-m-link').eq(5).click();
    });
});
