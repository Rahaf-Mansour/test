describe("home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  context("hero section", () => {
    it("the h1 contains the correct text", () => {
      // cy.get("h1").contains("Testing Next.js Applications with Cypress")

      // cy.get('[data-test="hero-heading"]').contains(
      //   "Testing Next.js Applications with Cypress"
      // )

      cy.getByData("hero-heading").contains(
        "Testing Next.js Applications with Cypress"
      )
    })

    it("the features on the homepage are correct", () => {
      // cy.get("dt").eq(0).contains("4 Courses")
      cy.get("dt")
        .first()
        .contains(/courses/i)

      cy.get("dt").eq(0).contains("4 Courses")
      cy.get("dt").eq(1).contains("25+ Lessons")
      cy.get("dt").eq(2).contains("Free and Open Source")
    })
  })

  context("courses section", () => {
    it("course1: Testing Your First Next.js Application", () => {
      cy.getByData("course-0").find("a").last().click() // or .eq(3).click()
      cy.location("pathname").should("eq", "/testing-your-first-application")
    })
    it("course2: Testing Foundations", () => {
      cy.getByData("course-1").find("a").last().click() // or .eq(3).click() or .contains("Get started").click()
      cy.location("pathname").should("eq", "/testing-foundations")
    })
    it("course3: Cypress Fundamentals", () => {
      cy.getByData("course-2").find("a").last().click() // or .eq(3).click()
      cy.location("pathname").should("equal", "/cypress-fundamentals")
    })
  })
})
