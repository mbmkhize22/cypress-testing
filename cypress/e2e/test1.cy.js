describe('Wonder Lab Test Spec', () => {
  it('Radio Buttons', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    // Checking Radio button 3
    cy.get('[for="radio3"]').find('input').check()

    // Validating that only radio button 2 is selected
    cy.get('#radio-btn-example > fieldset').find('label').each(($label, index) => {
        if(index == 0)
            cy.wrap($label).find('input').should('not.be.checked')

        if(index == 1)
            cy.wrap($label).find('input').should('not.be.checked')
        
        if(index == 2)
            cy.wrap($label).find('input').should('be.checked')
    })

    // waiting so that you can see that Radio button was selected
    cy.wait(5000)

    // Checking Radio button 2
    cy.get('[for="radio2"]').find('input').check()

    // Validating that only radio button 2 is selected
    cy.get('#radio-btn-example > fieldset').find('label').each(($label, index) => {
        if(index == 0)
            cy.wrap($label).find('input').should('not.be.checked')

        if(index == 1)
            cy.wrap($label).find('input').should('be.checked')
        
        if(index == 2)
            cy.wrap($label).find('input').should('not.be.checked')
    })
  })
})