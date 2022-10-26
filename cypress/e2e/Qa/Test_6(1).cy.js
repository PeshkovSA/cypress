describe('Test_6(1)',function ()  {

    const USER_EMAIL='12345qwerty@gmail.com';
    const PASSWORD='Qwert1234';

    it('Test_6(1)',  () =>{
        cy.visit('https://grinfer.com/')
        cy.viewport(1920,1080)

        cy.get('.sc-2aalce-2')
            .should('be.visible')
            .click()

        cy.get('.sc-1cabfn5-0')
            .should('contain', 'Welcome back')

        cy.get('#email').type(USER_EMAIL)
            .should('have.value',USER_EMAIL)

        cy.get('#password').type(PASSWORD)
            .should('have.value',PASSWORD)

        cy.get('.sc-p4qn9p-0')
            .should('be.visible')
            .click()

       /* cy.get('.sc-2aalce-2')
            .should('be.visible')
            .click()*/

    });
})