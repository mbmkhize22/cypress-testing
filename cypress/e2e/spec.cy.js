describe('template spec', () => {
  it('visiting zamambo website', () => {
    cy.visit('https://google.com')
    cy.get('#APjFqb').type('Zamambo Telecoms {enter}')
    cy.get(':nth-child(2) > .g > .N54PNb > .jGGQ5e > .yuRUbf > :nth-child(1) > [jscontroller="msmzHf"] > a > .LC20lb').click()

  })
})