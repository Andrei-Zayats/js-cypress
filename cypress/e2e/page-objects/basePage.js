export default class BasePage {
  isUrlValid = (path) => {
    cy.url().should("eq", path);
  };
}
