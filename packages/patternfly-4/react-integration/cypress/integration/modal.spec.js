describe('Modal Test', function () {
    it('Navigate to Modal section', function () {
        cy.visit('http://localhost:3000/');
        cy.get('#modal-demo-nav-item-link').click();
        cy.url().should('eq', 'http://localhost:3000/modal-demo-nav-link');
    });
    it('Verify Default Modal', function () {
        cy.get('#showDefaultModalButton').then(function (modalButton) {
            cy.wrap(modalButton).click();
            cy.get('.pf-c-modal-box').then(function () {
                cy.get('.pf-c-modal-box .pf-c-button[aria-label="Close"]').then(function (closeButton) {
                    cy.wrap(closeButton).click();
                    cy.get('.pf-c-modal-box').should('not.exist');
                });
            }).then(function () {
                cy.wrap(modalButton).click();
                cy.get('.pf-c-modal-box').should('exist');
                cy.get('body').trigger('keydown', { keyCode: 27, which: 27 });
                cy.get('.pf-c-modal-box').should('not.exist');
            });
        });
    });
    it('Verify Small Modal', function () {
        cy.get('#showSmallModalButton').then(function (modalButton) {
            cy.wrap(modalButton).click();
            cy.get('.pf-c-modal-box.pf-m-sm').then(function () {
                cy.get('.pf-c-modal-box .pf-c-button[aria-label="Close"]').then(function (closeButton) {
                    cy.wrap(closeButton).click();
                    cy.get('.pf-c-modal-box').should('not.exist');
                });
            }).then(function () {
                cy.wrap(modalButton).click();
                cy.get('.pf-c-modal-box').should('exist');
                cy.get('body').trigger('keydown', { keyCode: 27, which: 27 });
                cy.get('.pf-c-modal-box').should('not.exist');
            });
        });
    });
    it('Verify Large Modal', function () {
        cy.get('#showLargeModalButton').then(function (modalButton) {
            cy.wrap(modalButton).click();
            cy.get('.pf-c-modal-box.pf-m-lg').then(function () {
                cy.get('.pf-c-modal-box .pf-c-button[aria-label="Close"]').then(function (closeButton) {
                    cy.wrap(closeButton).click();
                    cy.get('.pf-c-modal-box').should('not.exist');
                });
            }).then(function () {
                cy.wrap(modalButton).click();
                cy.get('.pf-c-modal-box').should('exist');
                cy.get('body').trigger('keydown', { keyCode: 27, which: 27 });
                cy.get('.pf-c-modal-box').should('not.exist');
            });
        });
    });
    it('Verify Half Width Modal', function () {
        cy.get('#showHalfWidthModalButton').then(function (modalButton) {
            cy.wrap(modalButton).click();
            cy.get('.pf-c-page').then(function (page) {
                cy.get('.pf-c-modal-box').then(function () {
                    cy.get('.pf-c-modal-box').should('have.css', 'width', Math.ceil(page.width() / 2) + "px");
                    cy.get('.pf-c-modal-box .pf-c-button[aria-label="Close"]').then(function (closeButton) {
                        cy.wrap(closeButton).click();
                        cy.get('.pf-c-modal-box').should('not.exist');
                    });
                }).then(function () {
                    cy.wrap(modalButton).click();
                    cy.get('.pf-c-modal-box').should('exist');
                    cy.get('body').trigger('keydown', { keyCode: 27, which: 27 });
                    cy.get('.pf-c-modal-box').should('not.exist');
                });
            });
        });
    });
    it('Verify Custom Header/Footer Modal', function () {
        cy.get('#showCustomHeaderFooterModalButton').then(function (modalButton) {
            cy.wrap(modalButton).click();
            cy.get('.pf-c-modal-box').then(function () {
                cy.get('#customHeaderTitle').should('exist');
                cy.get('#customHeaderDescription').should('exist');
                cy.get('#customFooterTitle').should('exist');
                cy.get('.pf-c-modal-box .pf-c-button[aria-label="Close"]').then(function (closeButton) {
                    cy.wrap(closeButton).click();
                    cy.get('.pf-c-modal-box').should('not.exist');
                });
            }).then(function () {
                cy.wrap(modalButton).click();
                cy.get('.pf-c-modal-box').should('exist');
                cy.get('body').trigger('keydown', { keyCode: 27, which: 27 });
                cy.get('.pf-c-modal-box').should('not.exist');
            });
        });
    });
    it('Verify No Header Modal', function () {
        cy.get('#showNoHeaderModalButton').then(function (modalButton) {
            cy.wrap(modalButton).click();
            cy.get('.pf-c-modal-box').then(function () {
                cy.get('.pf-c-title').should('not.exist');
                cy.get('.pf-c-modal-box .pf-c-button[aria-label="Close"]').then(function (closeButton) {
                    cy.wrap(closeButton).click();
                    cy.get('.pf-c-modal-box').should('not.exist');
                });
            }).then(function () {
                cy.wrap(modalButton).click();
                cy.get('.pf-c-modal-box').should('exist');
                cy.get('body').trigger('keydown', { keyCode: 27, which: 27 });
                cy.get('.pf-c-modal-box').should('not.exist');
            });
        });
    });
});
