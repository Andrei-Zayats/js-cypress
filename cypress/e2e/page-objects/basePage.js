export default class BasePage {
  isUrlValid = (path) => {
    cy.url().should("eq", `${Cypress.config('baseUrl')}/${path}`);
  };
}
