describe('Scrolling', function (){
    it('scroll to carousel ', function () {
        cy.visit('https://unsplash.com/');
     /*   cy.contains('Search Unsplash').type('Car{enter}')*/
        cy.get('[data-test="homepage-header-search-form-input"]').type('Car{enter}')
        cy.scrollTo(0,1500)
        cy.get(':nth-child(3) > :nth-child(5) > .YdIix > :nth-child(1) > .GIFah > .zmDAx > .rEAWd > .omfF5 > .MorZF > .VQW0y > [data-test="photo-grid-multi-col-img"]')
            .click()
    });
})