describe('Log in',function (){
    it('Sign in', function(){
        cy.visit('https://unsplash.com/')
        cy.contains('Log in').click()
        cy.get("input[type='email']").type('abcdefg@gmail.com')
        cy.get("input[type='password']").type('12345qwerty')
        cy.get("input[type='submit']").click()
    })
})