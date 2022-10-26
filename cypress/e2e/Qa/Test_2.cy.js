describe('elektronika',()=>{
    it('By',()=>{
        cy.visit('https://www.aqua-shop.ru/akvariumy_i_tumbyu/');
        cy.contains('Выбрать').click();
      /*  cy.contains('Аквариумы').click();*/
        cy.get("input[type='text']").type('аквариум 50 литров');
        cy.contains('Найти').click();
        cy.contains('Компрессор Atman AT-A3500 для аквариумов до 120 литров, 120 л/ч, регулируемый').click();
    })
})