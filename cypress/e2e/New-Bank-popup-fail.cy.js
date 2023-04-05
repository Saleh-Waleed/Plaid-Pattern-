
describe('Plaid-Pattern', () => {
    it('Creating New User', () => {
      cy.visit('https://pattern.plaid.com/user/sdasd');
      cy.get('.Button-module_text__38wV0').click()
      cy.wait(2000)
    cy.get('#username').type('Saleh Waleed')
   cy.xpath('//*[@id="root"]/div/div/div[2]/form/div/div[3]/button[1]/span').click()
   cy.wait(2000)
   cy.xpath('//*[@id="root"]/div/div/div[2]/div/div[2]/button/span/span[1]').click()
     cy.xpath('//*[@id="root"]/div/div/div[2]/div/div[2]/button/span/span[1]').click()
     cy.wait(5000)
     cy.get('[title="Plaid Link"]').its('0.contentDocument.body').then(cy.wrap).find('#aut-button').click()
     cy.get('[title="Plaid Link"]').its('0.contentDocument.body').then(cy.wrap).find('#aut-ins_56').click()

 
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

cy.wait(2000)
 //Process finish
 cy.get('#click-to-continue-wrapper').click()
})
})         