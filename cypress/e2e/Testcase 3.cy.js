describe('Negative password test', () => {
  it('Valdate login with valid username & invalide password', () => {
    cy.visit('https://practicetestautomation.com/practice-test-login/');
    cy.get('#username').type('student');
    cy.get('#password').type('incorrectPassword');
    cy.get('#submit').click();
    cy.get('#error').should('be.visible');
    cy.get('#error').should('have.text', 'Your password is invalid!');

  })
})