import LoginPage from "../page-objects/loginPage";
const testUser = require("../../fixtures/user.json");

describe("Login Page", () => {
  const loginPage = new LoginPage();
  const username = testUser.name;
  const password = testUser.password;
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
    cy.visit("https://the-internet.herokuapp.com/login");
  });

  testCases.forEach((testCase) => {
    it(testCase.description, () => {
      loginPage.isLoaded();
      loginPage.loginAsUser(testCase.username, testCase.password);
      loginPage.verifyMessage(testCase.message);
    });
  });
});
