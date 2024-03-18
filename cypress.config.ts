import { default as cucumber } from "cypress-cucumber-preprocessor"
import browserify from "@cypress/browserify-preprocessor"
import resolve from "resolve"

module.exports = {
  ...(on, config) => {
    const options = {
      ...browserify.defaultOptions,
      typescript: resolve.sync("typescript", { baseDir: config.projectRoot }),
    }
    on("file:preprocessor", cucumber(options))
  },

  e2e: {
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
}
