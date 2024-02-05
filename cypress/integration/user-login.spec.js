// Write a new feature spec that will test that users can login successfully and are taken to the home page once they are signed in.

describe('Jungle', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it("should be able to login", () => {
    cy.get(".nav").contains("Login").click();
    cy.get('input[name=username]').type('Jungle');
    cy.get('input[name=password]').type('  ');
    cy.get('input[name=commit]').click();
    cy.get(".nav").contains("Logout").click();
  });
});