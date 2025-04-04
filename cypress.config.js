const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: `${process.env.CYPRESS_PROJECT_ID}`,
  video: true,
  videoCompression: true,
  videoCompression: 20,
  e2e: {
    baseUrl: "https://the-internet.herokuapp.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
