describe('Tab Demo Test', function () {
    it('Navigate to demo section', function () {
        cy.visit('http://localhost:3000/');
        cy.get('#tab-demo-nav-item-link').click();
        cy.url().should('eq', 'http://localhost:3000/tab-demo-nav-link');
    });
    it('Verify tabs, tab sections, and tab navigation', function () {
        cy.get('div#unconnectedChildren').find('.pf-c-tabs__button').each(function (demoButton, index) {
            var currentItem = index + 1;
            expect(demoButton.text()).to.equal("Tab item " + currentItem);
            cy.wrap(demoButton).click();
            cy.get("#demoTab" + currentItem + "Section").then(function (demoSection) {
                expect(demoSection.prop('hidden')).to.equal(false);
                expect(demoSection.text()).to.equal("Tab " + currentItem + " section");
            });
        });
    });
    it('Verify tabs mount on enter when specified', function () {
        cy.get('#pf-tab-section-0-mountOnEnter').should('exist');
        cy.get('#pf-tab-section-1-mountOnEnter').should('not.exist');
        cy.get('#pf-tab-1-mountOnEnter').click();
        cy.get('#pf-tab-section-0-mountOnEnter').should('exist');
        cy.get('#pf-tab-section-1-mountOnEnter').should('exist');
    });
    it('Verify tabs unmount on exit when specified', function () {
        cy.get('#pf-tab-section-0-unmountOnExit').should('exist');
        cy.get('#pf-tab-section-1-unmountOnExit').should('not.exist');
        cy.get('#pf-tab-1-unmountOnExit').click();
        cy.get('#pf-tab-section-0-unmountOnExit').should('not.exist');
        cy.get('#pf-tab-section-1-unmountOnExit').should('exist');
    });
});
