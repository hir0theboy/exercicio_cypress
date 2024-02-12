/// <reference types="cypress" />

describe('Testes para a página de contatos', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app');
  });

  it('Inclusão de contatos', () => {
    cy.get('input[placeholder="Nome"]').type('Eduardo');
    cy.get('input[placeholder="E-mail"]').type('Eduardo@gmail.com');
    cy.get('input[placeholder="Telefone"]').type('219888888');
    cy.get('.adicionar').click()
    cy.get('.sc-beqWaB').should('have.length', 4)
    cy.screenshot('tela-adicao')
  });

  it('Alteração de contatos', () => {
    cy.get('.edit').first().click()
    cy.get('[type="text"]').type(' professor')
    cy.get('.alterar').click()
    cy.get(':nth-child(2) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(1)').should('not.have.text', 'gian Souza')
    cy.screenshot('tela-edit')
  })

  it('Remoção de um contato', () => {
    cy.get('.delete').last().click()
    cy.get('.sc-beqWaB').should('have.length', 3)
    cy.screenshot('tela-subtracao')
  })
});
