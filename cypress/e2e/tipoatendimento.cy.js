describe("Tipo de atendimento", () => {
    beforeEach(() =>{
        cy.visit('https://front-cras.app.fslab.dev/');
        cy.get("#email").type("dev@gmail.com");
        cy.get("#senha").type("123");
        cy.get('.styles_button__dr0t2').click();
      })

    it.skip("Deve cadastrar tipo de atendimento com todos os campos preenchidos", () =>{

    })

    it.skip("Deve retornar msg de campos obrigatórios", () =>{

    })

    it.skip("Deve pesquisar um tipo de atendimento e alterar seu nome", () =>{

    })
});