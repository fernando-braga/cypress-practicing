/// <reference types="cypress" />

import commom_page from '../support/Pages/common_page';
import login_page from '../support/Pages/login_page';

describe('Login', () => {
    
    const loginPage = new login_page();
    const commomPage = new commom_page();

    beforeEach('Access application', () => {
        commomPage.accessLoginApplication();
    })

    it('Invalid e-mail', () => {
        loginPage.elements.pageTitle().contains('Login');
        loginPage.elements.emailField().click().type('fernando@');
        loginPage.elements.passwordField().click().type('123456');
        loginPage.elements.loginBtn().click();
        loginPage.elements.errorMessage().contains('E-mail inválido.')
    });

    it('Empty email', () => {
        loginPage.elements.pageTitle().contains('Login');
        loginPage.elements.passwordField().click().type('123456');
        loginPage.elements.loginBtn().click();
        loginPage.elements.errorMessage().contains('E-mail inválido.')
    });

    it('Invalid Password', () => {
        loginPage.elements.pageTitle().contains('Login');
        loginPage.elements.emailField().click().type('fernando@gmail.com');
        loginPage.elements.passwordField().click().type('123');
        loginPage.elements.loginBtn().click();
        loginPage.elements.errorMessage().contains('Senha inválida.')
    });

    it('Empty password', () => {
        loginPage.elements.pageTitle().contains('Login');
        loginPage.elements.emailField().click().type('fernando@gmail.com');
        loginPage.elements.loginBtn().click();
        loginPage.elements.errorMessage().contains('Senha inválida.')
    });

    it('Successful login', () => {
        loginPage.elements.pageTitle().contains('Login');
        loginPage.elements.emailField().click().type('fernando@gmail.com');
        loginPage.elements.passwordField().click().type('123456');
        loginPage.elements.loginBtn().click();
        loginPage.elements.successfulMessage().contains('Login realizado');
    });
})