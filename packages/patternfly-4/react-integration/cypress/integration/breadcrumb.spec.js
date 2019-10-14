describe('Breadcrumb Demo Test', function () {
    it('Navigate to demo section', function () {
        cy.visit('http://localhost:3000/');
        cy.get('#breadcrumb-demo-nav-item-link').click();
        cy.url().should('eq', 'http://localhost:3000/breadcrumb-demo-nav-link');
    });
    it('Verify breadcrumb items have link', function () {
        cy.get('li').children('a').should('not.be.undefined');
        cy.get('li').children('a').should('not.equal', null);
    });
    it('Verify default section home content', function () {
        cy.get('.pf-c-breadcrumb__link').first().contains('Section Home');
    });
    it('Verify default section label defaults', function () {
        cy.get('.pf-c-breadcrumb__link').contains('Section Title');
    });
    it('Verify Section Home takes user to home page', function () {
        cy.get('.pf-c-breadcrumb__link').first().contains('Section Home').click();
        cy.url().should('eq', 'http://localhost:3000/');
    });
});
