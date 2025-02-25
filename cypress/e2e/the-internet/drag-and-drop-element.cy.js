describe("Drag and Drop Page", () => {
  const elementA = "#column-a";
  const elementB = "#column-b";
  const elements = "#columns>div";

  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/drag_and_drop");
  });

  it("Drag and drop elements", () => {
    cy.get(elementA).should("be.visible");
    cy.get(elements).first().should("have.text", "A");

    const dataTransfer = new DataTransfer();

    cy.get(elementA)
      .trigger("mousedown", { which: 1 })
      .trigger("dragstart", { dataTransfer })
      .trigger("drag", { dataTransfer });

    cy.get(elementB)
      .trigger("dragover", { dataTransfer })
      .trigger("drop", { dataTransfer })
      .trigger("mouseup", { force: true });

    cy.get(elements).first().should("have.text", "B");

    cy.get(elementB)
      .trigger("mousedown", { which: 1 })
      .trigger("dragstart", { dataTransfer })
      .trigger("drag", { dataTransfer });

    cy.get(elementA)
      .trigger("dragover", { dataTransfer })
      .trigger("drop", { dataTransfer })
      .trigger("mouseup", { force: true });

    cy.get(elements).first().should("have.text", "A");
  });
});
