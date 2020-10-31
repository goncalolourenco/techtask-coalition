describe('Login page tests', () => {
  beforeEach(() => cy.visit('/login'));

  it('correct login credentials', () => {
    cy.findByLabelText('Username').type('user@example.com');
    cy.findByLabelText('Password').type('useruser');

    cy.findByText('login').click();

    cy.url().should('includes', '/dashboard');
  });

  it('incorrect login credentials', () => {
    cy.findByLabelText('Username').type('fakeUser');
    cy.findByLabelText('Password').type('useruser');

    cy.findByText('login').click();

    cy.url().should('includes', '/login');
    cy.findByText('Request failed with status code 404').should('exist');
  });
});
