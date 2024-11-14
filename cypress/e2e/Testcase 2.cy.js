describe('Negative username test', () => {
  it('Valdate login with invalid username & valide password', () => {
    cy.visit('https://practicetestautomation.com/practice-test-login/');
    cy.get('#username').type('incorrectUser');
    cy.get('#password').type('Password123');
    cy.get('#submit').click();
    cy.get('#error').should('be.visible');
    cy.get('#error').should('have.text', 'Your username is invalid!');

  })
})