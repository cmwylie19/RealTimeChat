describe('Table Width Modifiers Test', function () {
    it('Navigate to demo section', function () {
        cy.visit('http://localhost:3000/');
        cy.get('#table-width-modifiers-demo-nav-item-link').click();
        cy.url().should('eq', 'http://localhost:3000/table-width-modifiers-demo-nav-link');
    });
    it('Verify table string', function () {
        cy.get('caption').contains('Table with Width Modifiers');
    });
    it('Check number of rows', function () {
        cy.get('.pf-c-table').find('tr').should('have.length', 2);
    });
    it('Check number of columns', function () {
        cy.get('thead').find('th').should('have.length', 5);
    });
    it('Verify width modifiers', function () {
        cy.get('th').first()
            .then(function (widthModifer) {
            expect(widthModifer).to.have["class"]('pf-m-width-10');
        });
        cy.get('th').eq(2)
            .then(function (widthModifer) {
            expect(widthModifer).to.have["class"]('pf-m-width-30');
        });
        cy.get('th').eq(4)
            .then(function (widthModifer) {
            expect(widthModifer).to.have["class"]('pf-m-width-max');
        });
    });
});
