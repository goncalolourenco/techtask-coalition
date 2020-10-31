describe('Dashboard page tests', () => {
  beforeEach(() => {
    cy.fixture('security').then(({ loginToken }) => {
      localStorage.setItem('id_token', loginToken);
      localStorage.setItem('currentUser', 'fakeUser');
      cy.visit('/dashboard');
    });
  });

  it('Dataleaks by user and domain default', () => {
    cy.findAllByText('dataleak1').should('have.length', 2);
    cy.findAllByText('dataleak_abc').should('have.length', 2);
    cy.findAllByText('dataleak_123').should('have.length', 2);
    cy.findAllByText('dataleak_gg12').should('have.length', 2);
  });

  it('Dataleaks by user custom and domain default', () => {
    cy.findByLabelText('Email').clear().type('intention_layer@example.com');
    cy.findByTestId('search.email').click();

    cy.findAllByText('dataleak1').should('have.length', 2);
    cy.findByText('dataleak_abc').should('exist');
    cy.findByText('dataleak_123').should('exist');
    cy.findByText('dataleak_gg12').should('exist');
  });

  it('Dataleaks by user and domain custom ', () => {
    cy.findByLabelText('Email').clear().type('intention_layer@example.com');
    cy.findByTestId('search.email').click();

    cy.findByLabelText('Domain').clear().type('custom');
    cy.findByTestId('search.domain').click();

    cy.findByText('dataleak1').should('exist');
    cy.findAllByText('dataleak_abc').should('have.length', 0);
    cy.findAllByText('dataleak_123').should('have.length', 0);
    cy.findAllByText('dataleak_gg12').should('have.length', 0);
  });
});
