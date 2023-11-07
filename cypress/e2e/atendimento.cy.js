describe("Atendimentos", () => {
    beforeEach(() =>{
        cy.visit('https://front-cras.app.fslab.dev/');
        cy.get("#email").type("dev@gmail.com");
        cy.get("#senha").type("123");
        cy.get('.styles_button__dr0t2').click();
      })

    it("Deve alterar os dados do atendimento cadastrado", () =>{
        
    })

    it.skip("Deve retornar msg de onde data inicial é maior que final", () =>{

    })

    it.skip("Deve realizar busca somente pelo tipo de atendimento", () =>{

    })

    it.skip("Deve realizar busca somente com as datas inicial e final", () =>{

    })

    it.skip("Deve buscar por tipo de atendimento e alterar os dados do atendimento", () =>{

    })
});