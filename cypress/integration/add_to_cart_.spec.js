//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test


// write a basic test to visit the home page of our Jungle app
describe('Jungle', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it("shows the products on the page", () => {
    cy.get(".products article").should("be.visible");
  });

  it("clicking on a product takes you to the product detail page", () => {
    cy.get(".products article").first().click();
    cy.url().should("include", "/products/")
  });
  
  it("can add a product to the cart", () => {
    cy.get(".products article").first().click();
    cy.get('[data-cy=add-to-cart-button]').click();
    cy.get(".nav-link").contains("My Cart (1)");
  });
});