describe('Data List Demo Test', function () {
    it('Navigate to demo section', function () {
        cy.visit('http://localhost:3000/');
        cy.get('#data-list-demo-nav-item-link').click();
        cy.url().should('eq', 'http://localhost:3000/data-list-demo-nav-link');
    });
    it('Verify header', function () {
        cy.get('#simple-item1').contains('Primary content');
        cy.get('#simple-item2').contains('Secondary content');
    });
    it('Verify body content', function () {
        cy.get('#simple-item3').contains('Secondary content (pf-m-no-fill)');
        cy.get('#simple-item4').contains('Secondary content (pf-m-align-right pf-m-no-fill)');
    });
});
