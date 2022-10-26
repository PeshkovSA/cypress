import LoginCy from "../PageObject/Login.cy";
import loginCy from "../PageObject/Login.cy";

describe('Assertion', () => {

    const login = new LoginCy()

    it('Assert Web Test', () => {
        cy.visit('https://unsplash.com/')
        cy.viewport(1920, 1080)
        cy.location('protocol').should('eq', 'https:')
        cy.title().should('eq', 'Beautiful Free Images & Pictures | Unsplash')

        LoginCy.btnLogin().should('be.visible').click()

        LoginCy.email().type('abcdef@gmail.com').should('have.value', 'abcdef@gmail.com')

        LoginCy.password().type('1234qwerty').should('have.value', '1234qwerty')

        LoginCy.clickBtnLogin().should('be.visible').click()

        cy.contains('Invalid email or password').should('be.visible')
    })
})