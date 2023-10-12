describe('template spec', () => {
  it('visiting zamambo website', () => {
    cy.visit('https://google.com')
    cy.get('#APjFqb').type('Zamambo Telecoms {enter}')
  })
})