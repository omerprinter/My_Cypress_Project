/// <reference types='Cypress' />
describe('Temel Cypress Komutları', () => {
    it('cy.visit komutu', () => {
        cy.visit('/')                         // base url tanımlı ise
        cy.visit('https://wwww.amazon.com')  // base url tanımlı değilse
       
    });
    it('cy.visit komutu.2', () => {
        cy.visit('/about-us')
        
    });
    it('cy.title komutu', () => {
        cy.visit('/') //baseUrl adrese gider
        cy.title().should('eq','Wise Quarter Course – Deliver more than expected') //title için tam eşitlik durumudur
        cy.title().should('include', 'expected') //verilen string içerme durumu
        cy.title().should('contains','Deliver')
        
    });
    it.only('cy.url ve cy.location', () => {
        cy.visit('/')
        cy.url().should('eq', 'https://wisequarter.com/') //Url tam eşitlik durumunu kontrol eder
        cy.url().should('include','wisequarter') //Url string içerme durumuna bakar
        
        
    });

});