describe('Positive LogIn test', () => {
  it('Validate Login with valide Username & Password', () => {
    cy.visit('https://practicetestautomation.com/practice-test-login/');
    cy.get('#username').type('student');
    cy.get('#password').type('Password123');
    cy.get('#submit').click();
    cy.url().should('include', 'practicetestautomation.com/logged-in-successfully/');
    cy.contains('Congratulations').should('be.visible');
    cy.contains('successfully logged in').should('be.visible');
    cy.contains('Log out').should('be.visible');
  })
})