describe('Test API get', ()=>{
    it('Get-Test',  ()=> {
        cy.request('http https://swapi.dev/api/people/1/').then((response) => {
            expect(response.body).to.have.property('status', 200)
        })
    });
})