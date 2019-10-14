describe('Clipboard Copy Expanded Demo Test', function () {
    it('Navigate to demo section', function () {
        cy.visit('http://localhost:3000/');
        cy.get('#clipboard-copy-expanded-demo-nav-item-link').click();
        cy.url().should('eq', 'http://localhost:3000/clipboard-copy-expanded-demo-nav-link');
    });
    it('Verify clipboard is expanded by default', function () {
        cy.get('.pf-c-clipboard-copy').should('have.class', 'pf-m-expanded');
    });
});
