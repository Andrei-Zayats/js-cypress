describe("Add/Remove Elements Page", () => {

  const addElementButton = ".example>button";
  const deleteButtons = "#elements button";

  beforeEach(() => {
    cy.visit("add_remove_elements/");
  });

  it("add elements", () => {
    cy.get(addElementButton).should("be.visible");
    cy.get(addElementButton).click();
    cy.get(addElementButton).click();
    cy.get(addElementButton).click();
    cy.get(deleteButtons).should("have.length", 3);
  });

  it("delete elements", () => {
    cy.get(addElementButton).should("be.visible");
    cy.get(addElementButton).click();
    cy.get(addElementButton).click();
    cy.get(addElementButton).click();
    cy.get(deleteButtons).should("have.length", 3);
    cy.get(deleteButtons).last().click();
    cy.get(deleteButtons).should("have.length", 2);
    cy.get(deleteButtons).first().click();
    cy.get(deleteButtons).should("have.length", 1);
  });

  it.skip("dummy test", () => {
    cy.get(addElementButton).should("not.be.visible");
  });
});
