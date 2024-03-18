import { Given, Then, When } from "cypress-cucumber-preprocessor/steps"

Given("User visits the website", () => {
  cy.visit("http://localhost:3000")
})

Then("The h1 contains the correct text", () => {
  cy.getByData("hero-heading").contains(
    "Testing Next.js Applications with Cypress"
  )
})

Then("The features on the homepage are correct", () => {
  cy.get("dt").eq(0).contains("4 Courses")
  cy.get("dt").eq(1).contains("25+ Lessons")
  cy.get("dt").eq(2).contains("Free and Open Source")
})

When("User clicks on Get Started link for {string}", (courseId) => {
  cy.getByData(courseId).find("a").contains("Get Started").click()
})

Then("User should be redirected to {string}", (coursePath) => {
  cy.location("pathname").should("eq", coursePath)
})

// When("User clicks on the Get started link for the first course", () => {
//   cy.getByData("course-0").find("a").contains("Get Started").click()
// })

// Then("User should be redirected to the correct first course path", () => {
//   cy.location("pathname").should("eq", "/testing-your-first-application")
// })

// When("User clicks on the Get started link for the second course", () => {
//   cy.getByData("course-1").find("a").contains("Get Started").click()
// })

// Then("User should be redirected to the correct second course path", () => {
//   cy.location("pathname").should("eq", "/testing-foundations")
// })

// When("User clicks on the Get started link for the third course", () => {
//   cy.getByData("course-2").find("a").contains("Get Started").click()
// })

// Then("User should be redirected to the correct third course path", () => {
//   cy.location("pathname").should("equal", "/cypress-fundamentals")
// })
