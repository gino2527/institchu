const API_URL = 'https://jsonplaceholder.typicode.com';
const FIELDS = {
  name: 'Name',
  username: 'Username',
  email: 'Email',
  company_name: 'Company Name',
};

describe('Create User Page', () => {
  it('can create user', () => {
    cy.intercept('POST', `${API_URL}/users`).as('createUser');
    cy.visit('http://localhost:3000/users/create');

    Object.entries(FIELDS).forEach(([key, value]) => cy.get(`#${key}`).type(value));
    cy.get('[type="submit"]').click();

    cy.wait('@createUser')
      .should(({ response }) => {
        expect(response.statusCode).to.eq(201);
        expect(response.body).to.include(FIELDS);
      });
  });
});
