/// <reference types="cypress" />

class login_page{
    elements = {
        pageTitle: () => cy.get('.account_form > h3'),
        emailField: () => cy.get('#user'),
        passwordField: () => cy.get('#password'),
        loginBtn: () => cy.get('#btnLogin'),
        remindMeCheckBox: () => cy.get('.form-check-label'),
        errorMessage: () => cy.get('.invalid_input'),
        successfulMessage: () => cy.get('#swal2-title'),
    }
}

export default login_page