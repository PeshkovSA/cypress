describe('Test_6',function ()  {

    const USER_EMAIL='12345qwerty@gmail.com';
    const FIRST_NAME='Semyon';
    const LAST_NAME='Peshkov';
    const PASSWORD='Qwert1234';

    it('Test_6',  () =>{
        cy.visit('https://grinfer.com/')
        cy.viewport(1920,1080)

        cy.get('.sc-2aalce-3')
            .should('be.visible')
            .click()

        cy.get('.sc-1cabfn5-0')
            .should('contain', 'Create an account to get started')

        cy.get('#email').type(USER_EMAIL)
            .should('have.value',USER_EMAIL)

        cy.get('#firstName').type(FIRST_NAME)
            .should('have.value',FIRST_NAME)

        cy.get('#lastName').type(LAST_NAME)
            .should('have.value',LAST_NAME)

        cy.get('#password').type(PASSWORD)
            .should('have.value',PASSWORD)

        cy.get('.sc-p4qn9p-0')
            .should('be.visible')
            .click()
    });
})