import BasePage from "./basePage";

export default class LoginPage extends BasePage {
  #pageUrl = "https://the-internet.herokuapp.com/login";
  #userNameInput = () => cy.get("#username");
  #passwordInput = () => cy.get("#password");
  #loginButton = () => cy.get("#login button");
  #messageOnPage = () => cy.get("#flash-messages");

  isLoaded = () => {
    this.isUrlValid(this.#pageUrl);
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
