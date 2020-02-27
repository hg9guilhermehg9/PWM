describe('PWM - Editora Moderna', function() {
    it('Melhoria na busca de itens', function() {
      cy.visit('http://pwmpree-commerce-web.azurewebsites.net/pt-BR/')
        //cy.wait(3000),
      

      cy.contains('Acesse sua conta').click()
      cy.get('#username')
        .type('carla@beltrao.com.br')
        //.type('professorrj@teste.com.br')
        .should('have.value','carla@beltrao.com.br')
        
      cy.wait(3000)

      cy.get('#password')  
        .type('Moderna@10')
      cy.get(':nth-child(5) > .btn').click({force:true})

      cy.wait(8000)
      cy.log('Buscando a ultima palavra que compõem o nome do livro')
      cy.get('#search').type('tracos')
      cy.should('have.value','tracos')
      //cy.viewport(2000, 3000)
      //cy.screenshot('busca')
      cy.wait(4000)
      cy.focused().clear()
     
      cy.log('Buscando o livro a Ararinha do bico torto')
      cy.get('#search').type('a ararinha do bico torto')
      cy.should('have.value','a ararinha do bico torto')
      cy.wait(6000)
      cy.focused().clear()

      cy.log('Buscando o livro que contenham a palavra Arariba com ou sem acento')
      cy.get('#search').type('Arariba')
      cy.should('have.value','Arariba')
      cy.wait(4000)
      cy.focused().clear()

    
      cy.log('O resultado da busca retorna  todos os itens que possui a palavra MENINA')
      cy.get('#search').type('menina')
      cy.should('have.value','menina')
      cy.wait(4000)
      cy.focused().clear()
      cy.log('TESTES DE BUSCAS REALIZADOS COM SUCESSO!')

    /*
      cy.get('#search').type('abcdefghij')
      cy.should('have.value','absdefghij')
      cy.focused().clear()
   */

      
      
      
      //cy.get('#search').type('{enter}')

     
    })
  })