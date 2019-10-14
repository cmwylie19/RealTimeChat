describe('Pagination Demo Test', function () {
    it('Navigate to Pagination section', function () {
        cy.visit('http://localhost:3000/');
        cy.get('#pagination-demo-nav-item-link').click();
        cy.url().should('eq', 'http://localhost:3000/pagination-demo-nav-link');
    });
    it('should be disabled when flag is present', function () {
        cy.get('#pagination-options-menu-disabled').find('.pf-c-options-menu__toggle-text')
            .then(function (toggleText) { return expect(toggleText).to.have.text('1 - 20 of 523 items'); });
        cy.get('#pagination-options-menu-disabled').find('button[data-action="first"]')
            .then(function (button) { return expect(button).to.be.disabled; });
        cy.get('#pagination-options-menu-disabled').find('button[data-action="previous"]')
            .then(function (button) { return expect(button).to.be.disabled; });
        cy.get('#pagination-options-menu-disabled').find('button[data-action="next"]')
            .then(function (button) { return expect(button).to.be.disabled; });
        cy.get('#pagination-options-menu-disabled').find('button[data-action="last"]')
            .then(function (button) { return expect(button).to.be.disabled; });
        cy.get('#pagination-options-menu-disabled > .pf-c-options-menu > .pf-c-dropdown').find('button')
            .then(function (button) { return expect(button).to.be.disabled; });
    });
    it('Verify initial state', function () {
        cy.get('.pf-c-pagination').should('have.length', 3);
        cy.get('#pagination-options-menu-bottom.pf-c-pagination.pf-m-footer').should('exist');
        cy.get('#pagination-options-menu-top').find('.pf-c-options-menu__toggle-text')
            .then(function (toggleText) { return expect(toggleText).to.have.text('1 - 20 of 523 items'); });
        cy.get('#pagination-options-menu-top').find('button[data-action="first"]')
            .then(function (button) { return expect(button).to.be.disabled; });
        cy.get('#pagination-options-menu-top').find('button[data-action="previous"]')
            .then(function (button) { return expect(button).to.be.disabled; });
        cy.get('#pagination-options-menu-top').find('button[data-action="next"]')
            .then(function (button) { return expect(button).not.to.be.disabled; });
        cy.get('#pagination-options-menu-top').find('button[data-action="last"]')
            .then(function (button) { return expect(button).not.to.be.disabled; });
        cy.get('#pagination-options-menu-top').find('.pf-c-pagination__nav-page-select input')
            .then(function (input) { return expect(input).to.have.value('1'); });
        cy.get('#pagination-options-menu-top').find('.pf-c-pagination__nav-page-select')
            .then(function (navPageSelect) { return expect(navPageSelect).to.have.text('of 27 pages'); });
    });
    it('Verify event handlers fire correctly', function () {
        cy.get('#pagination-options-menu-top').find('.pf-c-options-menu__toggle button')
            .then(function (toggleButton) {
            cy.wrap(toggleButton).click();
            cy.get('.pf-c-dropdown.pf-m-expanded').should('exist');
            cy.get('button[data-action="per-page-10"]')
                .then(function (firstMenuItem) {
                cy.wrap(firstMenuItem).click();
                cy.get('.pf-c-dropdown.pf-m-expanded').should('not.exist');
                cy.get('#pagination-options-menu-top').find('.pf-c-options-menu__toggle-text')
                    .then(function (toggleText) { return expect(toggleText).to.have.text('1 - 10 of 523 items'); });
                cy.get('#pagination-options-menu-top').find('.pf-c-pagination__nav-page-select')
                    .then(function (navPageSelect) { return expect(navPageSelect).to.have.text('of 53 pages'); });
                cy.get('#pagination-options-menu-bottom').find('.pf-c-options-menu__toggle-text')
                    .then(function (toggleText) { return expect(toggleText).to.have.text('1 - 10 of 523 items'); });
                cy.get('#pagination-options-menu-bottom').find('.pf-c-pagination__nav-page-select')
                    .then(function (navPageSelect) { return expect(navPageSelect).to.have.text('of 53 pages'); });
            });
        });
        cy.get('#pagination-options-menu-top').find('button[data-action="next"]')
            .then(function (button) {
            cy.wrap(button).click();
            cy.get('#pagination-options-menu-top').find('button[data-action="first"]')
                .then(function (firstButton) { return expect(firstButton).not.to.be.disabled; });
            cy.get('#pagination-options-menu-top').find('button[data-action="previous"]')
                .then(function (previousButton) { return expect(previousButton).not.to.be.disabled; });
            cy.get('#pagination-options-menu-top').find('.pf-c-options-menu__toggle-text')
                .then(function (toggleText) { return expect(toggleText).to.have.text('11 - 20 of 523 items'); });
            cy.get('#pagination-options-menu-top').find('.pf-c-pagination__nav-page-select input')
                .then(function (input) { return expect(input).to.have.value('2'); });
        });
        cy.get('#pagination-options-menu-bottom').find('button[data-action="next"]')
            .then(function (button) {
            cy.wrap(button).click();
            cy.get('#pagination-options-menu-bottom').find('button[data-action="first"]')
                .then(function (firstButton) { return expect(firstButton).not.to.be.disabled; });
            cy.get('#pagination-options-menu-bottom').find('button[data-action="previous"]')
                .then(function (previousButton) { return expect(previousButton).not.to.be.disabled; });
            cy.get('#pagination-options-menu-bottom').find('.pf-c-options-menu__toggle-text')
                .then(function (toggleText) { return expect(toggleText).to.have.text('11 - 20 of 523 items'); });
            cy.get('#pagination-options-menu-bottom').find('.pf-c-pagination__nav-page-select input')
                .then(function (input) { return expect(input).to.have.value('2'); });
        });
    });
});
