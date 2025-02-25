describe("Login Page", () => {
  const userNameInput = "#username";
  const passwordInput = "#password";
  const loginButton = "#login button";

  const username = "tomsmith";
  const password = "SuperSecretPassword!";
  const testCases = [
    {
      description: "User can login with valid credentials",
      username,
      password,
      message: "You logged into a secure area!",
    },
    {
      description: "User can't login with invalid user name",
      username: "username",
      password,
      message: "Your username is invalid!",
    },
    {
      description: "User can't login with invalid password",
      username,
      password: "SecretPassword",
      message: "Your password is invalid!",
    },
  ];

  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/login");
  });

  testCases.forEach((testCase) => {
    it(testCase.description, () => {
      cy.get(userNameInput).type(testCase.username);
      cy.get(passwordInput).type(testCase.password);

      cy.get(loginButton).click();

      cy.get("#flash-messages").should("contains.text", testCase.message);
    });
  });
});
