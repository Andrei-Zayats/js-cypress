import LoginPage from "../page-objects/loginPage";
import SecurePage from "../page-objects/securePage";

describe("Secure Page", () => {
  const loginPage = new LoginPage();
  const securePage = new SecurePage();

  beforeEach(() => {
    cy.visit(loginPage.getPath());
    loginPage.loginAsUser(Cypress.env("user"), Cypress.env("password"));
  });

  it("User can logout", () => {
    securePage.isLoaded();
    securePage.verifyMessage("You logged into a secure area!");
    securePage.logout();

    loginPage.isLoaded();
    loginPage.verifyMessage("You logged out of the secure area!");
  });
});
