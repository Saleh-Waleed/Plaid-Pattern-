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

/******adding popup Tets */
/******adding popup Tets */
/******adding popup Tets */

/******adding popup Tets */
cy.xpath('//*[@id="root"]/div/div/div[5]/button/span/span[1]').click()
cy.wait(4000)
cy.get('#plaid-link-iframe-4').its('0.contentDocument.body').then(cy.wrap).find('#aut-button').click({force:true})
cy.wait(4000)
      cy.wait(5000)
      cy.get('#plaid-link-iframe-4').its('0.contentDocument.body').then(cy.wrap).find('#aut-ins_56').click()

     // cy.get('#plaid-link-iframe-4').its('0.contentDocument.body').then(cy.wrap).find('#aut-button').click()


const pop_url = "https://cdn.plaid.com/link/v2/stable/sandbox-oauth-login.html?client_name=Plaid+Pattern+PFM&redirect_uri=https%3A%2F%2Fcdn.plaid.com%2Flink%2Fv2%2Fstable%2Foauth.html&state=eyJvYXV0aF9zdGF0ZV9pZCI6ImUyYjZkYmU3LTA4ZGQtNDQzNC05M2ExLWExZGUxNWYzN2JlNyIsInVzZV9vYXV0aF9jYWxsYmFjayI6ZmFsc2UsInBsYWlkX2VudiI6InNhbmRib3giLCJyZWRpcmVjdF91cmkiOiJwbGFpZC1saW5rLW9hdXRoOi8vaGFuZG9mZiJ9"
cy.window().then(win => {
  const stub = cy.stub(win, 'open').as('windowopen')
}) 
cy.window().then(win => {
    win.location.href = pop_url
 })
 //Entering the Credentials 
cy.get('#username').type('user_good')
cy.get('#password').type('pass_good')
cy.get('#submit-credentials').click()

//Entering the mobile number
cy.xpath('//*[@id="submit-device"]').click()

cy.get('#container').type('123456789')
cy.get('#submit-code').click()

//Create information account
//cy.xpath('//*[@id="accounts-list"]/li[1]/label/input').check()
cy.get("li").find('label[for="account_0"]').click()

cy.scrollTo('bottom')

cy.get('#name').click()
cy.get('#account-number').check()
cy.get('#submit-accounts').click()

//Confirm Account information
cy.get("li").find('#terms-label').click()
cy.get('#submit-confirmation').click()




//Test is Complete
 cy.log('Test Complete')
 })

})
    
 
