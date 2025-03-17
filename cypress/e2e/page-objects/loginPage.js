import BasePage from "./basePage";

export default class LoginPage extends BasePage {
  #pagePath = "login";
  #userNameInput = () => cy.get("#username");
  #passwordInput = () => cy.get("#password");
  #loginButton = () => cy.get("#login button");
  #messageOnPage = () => cy.get("#flash-messages");

  isLoaded = () => {
    this.isUrlValid(this.#pagePath);
  };

  getPath = () => {
    return this.#pagePath;
  };

  loginAsUser = (userName, userPassword) => {
    this.#userNameInput().type(userName);
    this.#passwordInput().type(userPassword);

    this.#loginButton().click();
  };

  verifyMessage = (message) => {
    this.#messageOnPage().should("contains.text", message);
  };
}
