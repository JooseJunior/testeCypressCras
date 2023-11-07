describe("Meu Perfil", () => {
    beforeEach(() =>{
        cy.visit('https://front-cras.app.fslab.dev/');
        cy.get("#email").type("dev@gmail.com");
        cy.get("#senha").type("123");
        cy.get('.styles_button__dr0t2').click();
      })


    // obs: para o caso de teste acima é nescessário escolher ou usuario para não impedir os outros teste não altere a senha do dev@gmail.com, após a alteração realize login para confirmar a alteração da senha.
    it("Deve alterar os campos e a senha", () =>{
        
    })
});