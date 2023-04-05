/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('Plaid-Pattern', () => {
 beforeEach(() => { 
  
  cy.viewport(1366, 786)
  cy.visit('https://pattern.plaid.com/');
  
  //Cleaing the cookies, because iframes locators get changes sometimes
  cy.clearCookies() 
});

// Handling Cypress unexpected error
cy.on('uncaught:exception', (err, runnable) => {
 return false 
  }),

  it('Creating New User', () => {
    
    //Adding the User
    cy.wait(4000)
    cy.xpath('//*[@id="root"]/div/div/button/span' ).click()
    cy.wait(2000)
    cy.get('#username').type('Saleh Waleed')
   cy.xpath('//*[@id="root"]/div/div/div[2]/form/div/div[3]/button[1]/span').click()
   cy.wait(2000)
   cy.xpath('//*[@id="root"]/div/div/div[2]/div/div[2]/button/span/span[1]').click()
     cy.xpath('//*[@id="root"]/div/div/div[2]/div/div[2]/button/span/span[1]').click()
     cy.wait(5000)
  

                      /****Adding the Bank Details****/
                      //accessing the iframes, then its body with JQuery and finding the element
    cy.wait(3000)
    cy.get('[title="Plaid Link"]').its('0.contentDocument.body').then(cy.wrap).find('#aut-button').click()
    cy.wait(7000)

    //Adding the Instutution (Bank)
  cy.get('[title="Plaid Link"]').its('0.contentDocument.body').then(cy.wrap).find('#aut-ins_13').click()
  cy.wait(7000)


  //Entering the Credentials
  cy.get('[title="Plaid Link"]').its('0.contentDocument.body').then(cy.wrap).find('#aut-input-0').type('user_good')

  cy.get('[title="Plaid Link"]').its('0.contentDocument.body').then(cy.wrap).find('#aut-input-1').type('pass_good')

  cy.get('[title="Plaid Link"]').its('0.contentDocument.body').then(cy.wrap).find('#aut-button').click()
 cy.wait(8000)


 //Selecting the Accounts
 cy.iframe().find('[type="checkbox"]').check({ force: true }).should('be.checked')
cy.wait(5000)
 cy.iframe().find('#aut-button').click()
 


 //Account Successfully Added
 cy.wait(4000)
 cy.iframe().find('#aut-button').click()

 cy.scrollTo('bottom')

   cy.wait(6000)



                  /****Adding another Bank****/
cy.xpath('//*[@id="root"]/div/div/div[5]/button/span/span[1]').click()
cy.wait(4000)
cy.get('#plaid-link-iframe-3').its('0.contentDocument.body').then(cy.wrap).find('#aut-button').click({force:true})
cy.wait(4000)

//Adding the Instutution (Bank)
cy.get('#plaid-link-iframe-3').its('0.contentDocument.body').then(cy.wrap).find('#aut-ins_5').click()
 

  //Entering the Credentials
cy.get('#plaid-link-iframe-3').its('0.contentDocument.body').then(cy.wrap).find('#aut-input-0').type('user_good')

cy.get('#plaid-link-iframe-3').its('0.contentDocument.body').then(cy.wrap).find('#aut-input-1').type('pass_good')

cy.get('#plaid-link-iframe-3').its('0.contentDocument.body').then(cy.wrap).find('#aut-button').click()
cy.wait(8000)

//Selecting the Accounts
cy.get('#plaid-link-iframe-3').its('0.contentDocument.body').then(cy.wrap).find('[type="checkbox"]').check({ force: true }).should('be.checked')

cy.get('#plaid-link-iframe-3').its('0.contentDocument.body').then(cy.wrap).find('#aut-button').click()
 
cy.wait(2000)
cy.get('#plaid-link-iframe-3').its('0.contentDocument.body').then(cy.wrap).find('#aut-button').click()

cy.scrollTo('bottom')

//Test is Complete
 cy.log('Test Complete')
 })

})
    
 
