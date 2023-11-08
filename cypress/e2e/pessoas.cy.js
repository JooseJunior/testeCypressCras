describe("Pessoas", () => {
    beforeEach(() =>{
        cy.visit('https://front-cras.app.fslab.dev/');
        cy.get("#email").type("dev@gmail.com");
        cy.get("#senha").type("123");
        cy.get('.styles_button__dr0t2').click();
      })

    it.skip("Deve cadastrar pessoa com todos os campos preenchidos", () =>{
        
    })

    it.skip("Deve retornar msg de campos obrigatórios", () =>{

    })

    it.skip("Deve buscar uma pessoa pelo nome e alterar seus dados", () =>{

    })

    it.skip("Deve buscar uma pessoa pelo CPF e alterar seus dados", () =>{

    })

    //obs: para o cadastro de atendimento é nescessário preencher a observação
    it.skip("Deve cadastrar atendimento para a pessoa", () =>{

    })

    it.skip("Deve visualizar os dados da pessoa", () =>{

    })

    it.skip("Deve buscar pessoa listar os atendimentos recebidos e aterar os dados", () =>{

    })
});