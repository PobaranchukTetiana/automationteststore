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
})

  const RegistrationTest = [

    { testData: 
     {
      FirstName: 'Tata',
      LastName: 'Lololo',
      EMail: 'tbcsvebefdfs44gggg66666@sharklasers.com',
      Address1: 'Some adress',
      Region: 'Halland',
      City: 'City',
      ZIPCode: '30-867',
      LoginName: 'pobaranchukTfffddf',
      Password: 'Qweasd',
      PasswordConfirm: 'Qweasd',
     },
      expectedResult: 
      {
        success: 'Your Account Has Been Created!',
      }
    }
   ]

   RegistrationTest.forEach(({testData, expectedResult}) => {
    it('Registration', () => {
      cy.log('Open website login page');
      cy.visit('https://automationteststore.com/');
      cy.contains('a', 'Login or register').click();
      cy.log('Register user');
      cy.get('[title="Continue"]').click();
      cy.get('#AccountFrm_firstname').type(testData.FirstName);
      cy.get('#AccountFrm_lastname').type(testData.LastName);
      cy.get('#AccountFrm_email').type(testData.EMail);
      cy.get('#AccountFrm_address_1').type(testData.Address1);
      cy.get('#AccountFrm_city').type(testData.City);
      cy.get('select#AccountFrm_country_id.form-control').select(1)
      cy.get('select#AccountFrm_zone_id.form-control').select(3)
      cy.get('#AccountFrm_postcode').type(testData.ZIPCode);
      cy.get('#AccountFrm_loginname').type(testData.LoginName);
      cy.get('#AccountFrm_password').type(testData.Password);
      cy.get('#AccountFrm_confirm').type(testData.PasswordConfirm);
      cy.get('#AccountFrm_agree').click();
      cy.get('#AccountFrm_newsletter0').click();
      cy.get('[title="Continue"]').click();

      cy.get('.maintext').should('have.text', expectedResult.success);
    })
  })
})

/*
const RegistrationTest = [
  {
    expectedResult: 
   {
    success: " Your Account Has Been Created!",
   }
  }
  ]
  RegistrationTest.forEach(({expectedResult}) => {
  it('Registration', () => {
    cy.log('Open website login page');
    cy.visit('https://automationteststore.com/index.php?rt=account/success');
     cy.get('.maintext').should('have.text', expectedResult.success);
  
  
  
  })
  })
  */