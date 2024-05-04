/// <reference types="cypress" />

import commom_page from '../support/Pages/common_page';
import user_register from '../support/Pages/user_register_page'
import faker from 'faker'


describe('User register', () => {
    const userRegister = new user_register();
    const commomPage = new commom_page();
    
    beforeEach('Access application', () => {
        commomPage.accessApplication();
    })

    it('Empty name field', () => {
        userRegister.elements.pageTitle().contains('Cadastro de usuário');
        userRegister.elements.nameFieldTitle().contains('Nome');
        userRegister.elements.emailField().click().type(faker.internet.email());
        userRegister.elements.passwordField().click().type('123456');
        userRegister.elements.registerBtn().click();
        userRegister.elements.errorMessage().contains('O campo nome deve ser preenchido');
    });

    it('Empty e-mail field', () => {
        userRegister.elements.pageTitle().contains('Cadastro de usuário');
        userRegister.elements.nameField().type(faker.name.firstName());
        userRegister.elements.emailFieldTitle().contains('E-mail');
        userRegister.elements.passwordField().click().type('123456');
        userRegister.elements.registerBtn().click();
        userRegister.elements.errorMessage().contains('O campo e-mail deve ser prenchido corretamente');
    });

    it('Invalid e-mail', () => {
        userRegister.elements.pageTitle().contains('Cadastro de usuário');
        userRegister.elements.nameField().type(faker.name.firstName());
        userRegister.elements.emailFieldTitle().contains('E-mail');
        userRegister.elements.emailField().click().type('fernando@');
        userRegister.elements.passwordField().click().type('123456');
        userRegister.elements.registerBtn().click();
        userRegister.elements.errorMessage().contains('O campo e-mail deve ser prenchido corretamente');
    });

    it('Empty password field', () => {
        userRegister.elements.pageTitle().contains('Cadastro de usuário');
        userRegister.elements.nameField().type(faker.name.firstName());
        userRegister.elements.emailFieldTitle().contains('E-mail');
        userRegister.elements.emailField().click().type(faker.internet.email());
        userRegister.elements.registerBtn().click();
        userRegister.elements.errorMessage().contains('O campo senha deve ter pelo menos 6 dígitos');
    });

    it('Invalid password', () => {
        userRegister.elements.pageTitle().contains('Cadastro de usuário');
        userRegister.elements.nameField().type(faker.name.firstName());
        userRegister.elements.emailFieldTitle().contains('E-mail');
        userRegister.elements.emailField().click().type(faker.internet.email());
        userRegister.elements.passwordFieldTitle().contains('Senha');
        userRegister.elements.passwordField().click().type('123');
        userRegister.elements.registerBtn().click();
        userRegister.elements.errorMessage().contains('O campo senha deve ter pelo menos 6 dígitos');
    })

    it('Successful register', () => {
        let successfullUserRegister;

        userRegister.elements.pageTitle().contains('Cadastro de usuário');
        successfullUserRegister = userRegister.welcomeUser();
        cy.log(successfullUserRegister);
        
        userRegister.elements.emailFieldTitle().contains('E-mail');
        userRegister.elements.emailField().click().type(faker.internet.email());
        userRegister.elements.passwordFieldTitle().contains('Senha');
        userRegister.elements.passwordField().click().type('123456');
        userRegister.elements.registerBtn().click();
        userRegister.elements.successModalTitle().contains('Cadastro realizado!');
        userRegister.elements.welcomeMessage().contains(`Bem-vindo ${successfullUserRegister}`);
    });
})