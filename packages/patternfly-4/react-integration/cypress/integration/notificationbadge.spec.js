describe('Notification Badge Demo Test', function () {
    it('Navigate to notificatoin badge demo section', function () {
        cy.visit('http://localhost:3000/');
        cy.get('#notification-badge-demo-nav-item-link').click();
        cy.url().should('eq', 'http://localhost:3000/notification-badge-demo-nav-link');
    });
    it('Verify notification badge is unread', function () {
        cy.get('.pf-c-notification-badge').should('have.class', 'pf-m-unread');
    });
    it('Verify notification badge is read after click', function () {
        cy.get('#notification-demo-badge').click();
        cy.get('.pf-c-notification-badge').should('have.class', 'pf-m-read');
    });
});
