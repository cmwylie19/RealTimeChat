describe('Chip Group Demo Test', function () {
    it('Navigate to demo section', function () {
        cy.visit('http://localhost:3000/');
        cy.get('#chipgroup-demo-nav-item-link').click();
        cy.url().should('eq', 'http://localhost:3000/chipgroup-demo-nav-link');
    });
    it('Verify chip default text', function () {
        cy.get('.pf-c-chip__text').first().contains('Lemons');
    });
    it('Verify chip is closed on default', function () {
        cy.get('.pf-c-chip__text').eq(1).should('not.contain', 'Limes');
    });
    it('Verify chip has badge', function () {
        cy.get('span').children('.pf-c-badge').should('not.be.undefined');
        cy.get('span').children('.pf-c-badge').should('not.equal', null);
    });
    it('Verify more button works', function () {
        cy.get('.pf-m-overflow').children('button').click();
        cy.get('.pf-c-chip__text').contains('Show Less');
    });
    it('Verify show less button works', function () {
        cy.get('.pf-m-overflow').children('button').click();
        cy.get('.pf-c-chip__text').contains('more');
    });
    it('Verify delete button on first chip', function () {
        var chip = cy.get('.pf-c-chip').children('#pf-random-id-0');
        cy.get('#remove_pf-random-id-0').click();
        chip.should('not.exist');
    });
});
