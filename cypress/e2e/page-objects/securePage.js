import BasePage from './basePage';
import LoginPage from './loginPage';

export default class SecurePage extends BasePage{
    #path = 'secure';
    #logoutButton = () => cy.get("a[href='/logout']");
    #messageOnPage = () => cy.get("#flash-messages");

    isLoaded = () => {
        this.isUrlValid(this.#path);
    };

    logout = () => {
        this.#logoutButton().click();
        return new LoginPage();
    };

    verifyMessage = (message) => {
        this.#messageOnPage().should("contains.text", message);
    }
};