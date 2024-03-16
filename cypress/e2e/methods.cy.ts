const users = [
  {
    username: "John",
    password: "password123",
  },
  {
    username: "Jane",
    password: "password123",
  },
]

describe("methods understading", () => {
  it("apply right assertion using its", () => {
    cy.wrap(["Wai Yan", "Yu"]).its(1).should("eq", "Yu") // true
    cy.wrap({ age: 52 }).its("age").should("eq", 52) // true
  })

  it("give the same password which is password123 for all users", () => {
    cy.wrap(users).each((user) => {
      cy.wrap(user).its("password").should("eq", "password123")
    })
  })
})
