describe('Login Page Demo Test', function () {
    it('Navigate to login page section', function () {
        cy.visit('http://localhost:3000/');
        cy.get('#login-page-demo-nav-item-link').click();
        cy.url().should('eq', 'http://localhost:3000/login-page-demo-nav-link');
    });
    it('Verify initial state', function () {
        cy.get('input[name="pf-login-username-id"]')
            .then(function (userNameInput) { return expect(userNameInput.text()).to.equal(''); });
        cy.get('input[name="pf-login-password-id"]')
            .then(function (passwordInput) { return expect(passwordInput.text()).to.equal(''); });
        cy.get('#pf-login-remember-me-id')
            .then(function (rememberMeBox) { return expect(rememberMeBox.is(':checked')).to.be["false"]; });
        cy.get('.pf-c-form__helper-text.pf-m-error').should('not.exist');
        cy.get('.pf-c-login__main-footer-links').find('.pf-c-login__main-footer-links-item')
            .then(function (links) { return expect(links.length).to.equal(5); });
    });
    it('Verify error is shown on invalid credentials', function () {
        cy.get('.pf-c-button.pf-m-primary').then(function (loginButton) {
            cy.wrap(loginButton).click();
            cy.get('.pf-c-form__helper-text.pf-m-error').then(function (errorMessage) {
                expect(errorMessage.length).to.equal(1);
            });
            cy.get('input[name="pf-login-username-id"][aria-invalid="true"]').then(function (userNameInput) {
                expect(userNameInput.length).to.equal(1);
            });
            cy.get('input[name="pf-login-password-id"][aria-invalid="true"]').then(function (passwordInput) {
                expect(passwordInput.length).to.equal(1);
            });
        });
    });
});
