import LoginPage from "../page-objects/loginPage";
import SecurePage from "../page-objects/securePage";

describe("Login Page", () => {
  const loginPage = new LoginPage();
  const securePage = new SecurePage();
  const username = Cypress.env("USER");
  const password = Cypress.env("PASSWORD");

  const testCases = [
    {
      description: "User can login with valid credentials",
      username,
      password,
      message: "You logged into a secure area!",
    },
    {
      description: "User can't login with invalid user name",
      username: "user",
      password,
      message: "Your username is invalid!",
    },
    {
      description: "User can't login with invalid password",
      username,
      password: "password",
      message: "Your password is invalid!",
    },
  ];

  beforeEach(() => {
    cy.visit("login");
  });

  testCases.forEach((testCase) => {
    it(testCase.description, () => {
      loginPage.isLoaded();
      loginPage.loginAsUser(testCase.username, testCase.password);
      securePage.verifyMessage(testCase.message);
    });
  });
});
