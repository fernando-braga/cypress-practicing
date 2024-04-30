/// <reference types="cypress" />

class commom_page{
    accessApplication(){
        cy.visit('/')
            .get('#top_header')
            .get('.fa-lock').click();
    }

    accessLoginApplication() {
        cy.visit('/')
            .get('#top_header')
            .get('.fa-user').click();
    }
}

export default commom_page