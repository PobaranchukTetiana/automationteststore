describe("RegistrationAuthorization", () => {

it.skip('Authorization', () => {
  cy.log('Open website login page');
  cy.visit('https://automationteststore.com/');
  cy.contains('a', 'Login or register').click();

  cy.log('Authorize user');
  cy.get('#loginFrm_loginname').type('Reid_Jacobi48');
  cy.get('#loginFrm_password').type('TestPassword');
  cy.get('button[type="submit"]').contains('Login').click();

  cy.get('span.subtext').should('contain', 'Reid')
}),

  it('Registration', () => {
    cy.log('Open website login page');
    cy.visit('https://automationteststore.com/');
    cy.contains('a', 'Login or register').click();
    cy.log('Register user');
    cy.get('[title="Continue"]').click();
    cy.get('#AccountFrm_firstname').type('Tata');
    cy.get('#AccountFrm_lastname').type('Lololo');
    cy.get('#AccountFrm_email').type('tbcsvebefdfs44gggg66666@sharklasers.com');
    cy.get('#AccountFrm_address_1').type('Some adress');
    cy.get('#AccountFrm_city').type('City');
    cy.get('select#AccountFrm_country_id.form-control').select(1)
    cy.get('select#AccountFrm_zone_id.form-control').select(3)
    cy.get('#AccountFrm_postcode').type('30-867');
    cy.get('#AccountFrm_loginname').type('pobaranchukTfffddf');
    cy.get('#AccountFrm_password').type('Qweasd');
    cy.get('#AccountFrm_confirm').type('Qweasd');
    cy.get('#AccountFrm_agree').click();
    cy.get('#AccountFrm_newsletter0').click();
    cy.get('[title="Continue"]').click();
     cy.get('.maintext').should('have.text', " Your Account Has Been Created!");

})
    })



/*
" Your Account Has Been Created!"
  it('Registration', () => {
    cy.log('Open website login page');
    cy.visit('https://automationteststore.com/index.php?rt=account/success');
     cy.get('.maintext').should('have.text', " Your Account Has Been Created!"); 
  })
*/
