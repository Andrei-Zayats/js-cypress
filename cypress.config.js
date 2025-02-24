const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  projectId: `${process.env.CYPRESS_PROJECT_ID}`,
  video: true,
  videoCompression: true,
  videoCompression: 20,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
