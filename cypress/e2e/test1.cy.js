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
        cy.wait(3000)

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

    it('Suggestion', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#autocomplete').type('South')
        cy.wait(3000)
        cy.get('#ui-id-1').find('li').each(($el, index) => {
            cy.log($el.find('.ui-menu-item'))
            //cy.wrap($el.find('.ui-menu-item'))
        })

    })

    it('Show/Hide', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
        // Click to hide the text box
        cy.get('#hide-textbox').click()

        // Validating that the text box is hidden
        cy.get('#displayed-text').invoke('attr', 'style').should('contain', 'none')

        // Waiting before starting another test
        cy.wait(3000)

        // Click to show the text box
        cy.get('#show-textbox').click()

        // Validating that the text box is not hidden
        cy.get('#displayed-text').invoke('attr', 'style').should('not.contain', 'none')
    })
  
    it('Web Table Fixed Header', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
        cy.contains('.tableFixHead > #product > tbody tr', 'Joe')
        .find('td')
        .spread((name, pos, city, amount) => {
            return {
                'Name': name,
                'Position': pos,
                'City': city,
                'Amount': amount
            }
        })
        .then($res => {
            cy.log($res['Name'].innerText)
            cy.log($res['Position'].innerText)
            cy.log($res['City'].innerText)
            cy.log($res['Amount'].innerText)

            cy.wrap($res['Amount']).should('contain', 46)
        })
    })
  
})