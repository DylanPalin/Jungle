// Write a new feature spec that will test that users can navigate from the home page to the product detail page by 
// clicking on a product.

describe('Jungle', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it("shows the products on the page", () => {
    cy.get(".products article").should("be.visible");
  });

  it("There is 2 products on the page", () => {
    cy.get(".products article").should("have.length", 2);
  });

  it("clicking on a product takes you to the product detail page", () => {
    cy.get(".products article").first().click();
    cy.url().should("include", "/products/")
  });
  
});