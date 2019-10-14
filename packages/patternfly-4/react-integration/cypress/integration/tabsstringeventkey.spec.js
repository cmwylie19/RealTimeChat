describe('Tab Demo Test', function () {
    it('Navigate to demo section', function () {
        cy.visit('http://localhost:3000/');
        cy.get('#tab-string-event-key-demo-nav-item-link').click();
        cy.url().should('eq', 'http://localhost:3000/tab-string-event-key-demo-nav-link');
    });
    it('Verify tabs with string event keys, and tab navigation', function () {
        cy.get('.pf-c-tabs__button').each(function (demoButton, index) {
            var currentItem = index + 1;
            expect(demoButton.text()).to.equal("Tab item " + currentItem);
            cy.wrap(demoButton).click();
            cy.get("#demoTab" + currentItem + "Section").then(function (demoSection) {
                expect(demoSection.prop('hidden')).to.equal(false);
                expect(demoSection.text()).to.equal("Tab " + currentItem + " section");
            });
        });
    });
});
