import { Given, Then, When } from "cypress-cucumber-preprocessor/steps"

Given("User visits the website", () => {
  cy.visit("http://localhost:3000")
})

When(
  "User wrote his email {string} and click the subscribe button",
  (email) => {
    cy.getByData("email-input").type(email)
    cy.getByData("submit-button").click()
  }
)

Then("A success message should appear including the entered email", () => {
  cy.getByData("success-message").should("exist").contains("tom@aol.com")
})

When("User subscribed by an invalid email {string}", (email) => {
  cy.getByData("email-input").type(email)
  cy.getByData("submit-button").click()
})

Then("The success message should not appear", () => {
  cy.getByData("success-message").should("not.exist")
})

When("User subscribed by an already subscribed email {string}", (email) => {
  cy.getByData("email-input").type(email)
  cy.getByData("submit-button").click()
})

Then(
  "The success message should not appear and An error message should appear showing that this email is already exists",
  () => {
    cy.getByData("success-message").should("not.exist")
    cy.getByData("server-error-message")
      .should("exist")
      .contains("already exists. Please use a different email address.")
  }
)
