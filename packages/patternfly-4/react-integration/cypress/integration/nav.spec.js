describe('Nav Test', function () {
    it('Navigate to demo section', function () {
        cy.visit('http://localhost:3000/');
        cy.get('#nav-demo-nav-item-link').click();
        cy.url().should('eq', 'http://localhost:3000/nav-demo-nav-link');
    });
    it('Verify Simple Nav', function () {
        cy.get('#nav-primary-simple .pf-c-nav__link').each(function (simpleNavLink, index) {
            var isCurrent = simpleNavLink.hasClass('pf-m-current');
            expect(isCurrent).to.be.equal(index === 0);
        });
        cy.get('#simple-link2').then(function (simpleLink2) {
            cy.wrap(simpleLink2).click();
            cy.get('#nav-primary-simple .pf-c-nav__link').each(function (simpleNavLink, index) {
                var isCurrent = simpleNavLink.hasClass('pf-m-current');
                expect(isCurrent).to.be.equal(index === 1);
            });
        });
    });
    it('Verify Default Nav', function () {
        cy.get('#nav-primary-default .pf-c-nav__link').each(function (defaultNavLink, index) {
            var isCurrent = defaultNavLink.hasClass('pf-m-current');
            expect(isCurrent).to.be.equal(index === 0);
        });
        cy.get('#default-link3').then(function (defaultLink3) {
            cy.wrap(defaultLink3).click();
            cy.url().should('eq', 'http://localhost:3000/nav-demo-nav-link#default-link3');
            cy.get('#nav-primary-default .pf-c-nav__link').each(function (defaultNavLink, index) {
                var isCurrent = defaultNavLink.hasClass('pf-m-current');
                expect(isCurrent).to.be.equal(index === 2);
            });
        });
        cy.get('#default-no-navigate-link').then(function (noNavigateLink) {
            cy.wrap(noNavigateLink).click();
            cy.url().should('eq', 'http://localhost:3000/nav-demo-nav-link#default-link3');
            cy.get('#nav-primary-default .pf-c-nav__link').each(function (defaultNavLink, index) {
                var isCurrent = defaultNavLink.hasClass('pf-m-current');
                expect(isCurrent).to.be.equal(index === 4);
            });
        });
    });
    it('Verify Expandable Nav', function () {
        // All groups start open
        cy.get('#nav-primary-expandable .pf-c-nav__link[data-component="pf-nav-expandable"]').each(function (expandableGroup, index) {
            expect(expandableGroup.attr('aria-expanded')).to.be.equal('true');
        });
        // Verify close and open of group 1
        cy.get('#grp-1').then(function (group1Link) {
            cy.wrap(group1Link).click();
            cy.get('#grp-1').then(function (updatedGroup1Link) {
                expect(updatedGroup1Link.attr('aria-expanded')).to.be.equal('false');
            });
            cy.get('#grp-2').then(function (group2Link) {
                expect(group2Link.attr('aria-expanded')).to.be.equal('true');
            });
            cy.wrap(group1Link).click();
            cy.get('#grp-1').then(function (updatedGroup1Link) {
                expect(updatedGroup1Link.attr('aria-expanded')).to.be.equal('true');
            });
        });
        // Verify sub-nav selections
        cy.get('#grp-1').then(function (group1Link) {
            var parent = group1Link.parent();
            expect(parent.hasClass('pf-m-current')).to.be.equal(true);
        });
        cy.get('#itm-1-1').then(function (item1Link) {
            expect(item1Link.hasClass('pf-m-current')).to.be.equal(true);
        });
        cy.get('#itm-1-2').then(function (item2Link) {
            cy.wrap(item2Link).click();
            cy.get('#itm-1-1').then(function (item1Link) {
                expect(item1Link.hasClass('pf-m-current')).to.be.equal(false);
            });
            cy.get('#itm-1-2').then(function (updatedItem2Link) {
                expect(updatedItem2Link.hasClass('pf-m-current')).to.be.equal(true);
            });
        });
        cy.get('#itm-2-2').then(function (item2Link) {
            cy.wrap(item2Link).click();
            cy.get('#itm-1-2').then(function (updatedItem2Link) {
                expect(updatedItem2Link.hasClass('pf-m-current')).to.be.equal(false);
            });
            cy.get('#grp-1').then(function (group1Link) {
                var parent = group1Link.parent();
                expect(parent.hasClass('pf-m-current')).to.be.equal(false);
            });
            cy.get('#grp-2').then(function (group2Link) {
                var parent = group2Link.parent();
                expect(parent.hasClass('pf-m-current')).to.be.equal(true);
            });
        });
    });
    it('Verify Horizontal Nav', function () {
        cy.get('#nav-primary-horizontal .pf-c-nav__horizontal-list .pf-c-nav__link').each(function (horizontalLink, index) {
            var isCurrent = horizontalLink.hasClass('pf-m-current');
            expect(isCurrent).to.be.equal(index === 0);
        });
        cy.get('#nav-primary-horizontal #horizontal-link2').then(function (horizontalLink2) {
            cy.wrap(horizontalLink2).click();
            cy.get('#nav-primary-horizontal .pf-c-nav__link').each(function (horaizontalNavLink, index) {
                var isCurrent = horaizontalNavLink.hasClass('pf-m-current');
                expect(isCurrent).to.be.equal(index === 1);
            });
        });
    });
});
