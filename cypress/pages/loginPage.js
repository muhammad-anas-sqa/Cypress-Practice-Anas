
class LoginPage {
    visit() {
        cy.visit('https://katalon-demo-cura.herokuapp.com/');
        cy.get('#btn-make-appointment').click();
    }

    fillusername(username) {
        cy.get('#txt-username').type('John Doe');
    }

    fillPassword(password) {
        cy.get('#txt-password').type('ThisIsNotAPassword');
    }

    submit() {
        cy.get('#btn-login').click();
    }

}

export default LoginPage;