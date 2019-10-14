describe('Text Area Demo Test', function () {
    it('Navigate to demo section', function () {
        cy.visit('http://localhost:3000/');
        cy.get('#text-area-nav-item-link').click();
        cy.url().should('eq', 'http://localhost:3000/text-area-nav-link');
    });
    it('Verify Text area exist', function () {
        cy.get('#textarea1').should('exist');
    });
    it('Verify Required Text area exist', function () {
        cy.get('#textarea2').should('exist');
    });
    it('Verify Text Area can be updated and that invalid is applied', function () {
        cy.get('#textarea1').should('have.value', '');
        cy.get('#textarea1').type('testing');
        cy.get('#textarea1').should('have.value', 'testing');
        // Clear text area and verify it is invalid
        cy.get('#textarea1').clear().then(function (textarea) {
            expect(textarea.attr('aria-invalid')).to.be.equal('true');
        });
    });
    it('Verify Required Text Area can be updated and that invalid is applied', function () {
        // Verify it is required
        cy.get('#textarea2').should('have.attr', 'required');
        cy.get('#textarea2').should('have.value', '');
        cy.get('#textarea2').type('testing');
        cy.get('#textarea2').should('have.value', 'testing');
        // Clear text area and verify it is invalid
        cy.get('#textarea2').clear().then(function (textarea) {
            expect(textarea.attr('aria-invalid')).to.be.equal('true');
        });
    });
});
