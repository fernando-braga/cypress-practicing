/// <reference types="cypress" />

import faker from "faker";
class user_register{

    elements = {
        pageTitle: () => cy.get('.account_form'),
        nameField: () => cy.get('#user'),
        nameFieldTitle: () => cy.get(':nth-child(2) > label'),
        emailField: () => cy.get('#email'),
        emailFieldTitle: () => cy.get(':nth-child(3) > label'),
        passwordField: () => cy.get('#password'),
        passwordFieldTitle: () => cy.get(':nth-child(4) > label'),
        registerBtn: () => cy.get('#btnRegister'),
        errorMessage: () => cy.get('#errorMessageFirstName'),
        successModalTitle: () => cy.get('#swal2-title'), 
        welcomeMessage: () => cy.get('#swal2-html-container'),
    }

    welcomeUser() { 
        let welcomeUser = faker.name.firstName();
        this.elements.nameField().type(welcomeUser);
        
        return welcomeUser; 
    }
}

export default user_register