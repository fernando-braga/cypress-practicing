const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '2cxhy5',
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportTitle: 'Personal cypress project',
      reportPageTitle: 'Personal cypress project',
    },
    baseUrl: "https://automationpratice.com.br",
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
