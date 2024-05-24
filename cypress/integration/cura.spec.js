import LoginPage from '../pages/loginPage';

describe('cura Make Appointment', function () {

    const loginPage = new LoginPage();

    it('login', function () {
        loginPage.visit()
        loginPage.fillusername()
        loginPage.fillPassword()
        loginPage.submit()
    });


    it('Make Appointment', function () {
        cy.get('select').select('Hongkong CURA Healthcare Center');
        cy.get('#chk_hospotal_readmission').click();
        cy.get('#radio_program_medicaid').click();
        cy.get('#txt_visit_date').type('30/5/2024');
        cy.get('#txt_comment').click({ force: true });
        cy.get('#txt_comment').type('testing');
        cy.get('#btn-book-appointment').click();
    });


    it('Verify Appointment', function () {
        cy.wait(2000);
        cy.get('h2').contains('Appointment Confirmation');
        cy.xpath('//label[text()="Visit Date"]').should('be.visible').contains('Visit Date');
    });

});