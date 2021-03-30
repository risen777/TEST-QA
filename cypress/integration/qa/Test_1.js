describe("Log in",function() {
  it("Sign in",function(){
    cy.visit("https://unsplash.com/")
    cy.contains("Login").click()
    cy.get('input[type="email"').type('test@test.com')
    cy.get('input[type="password"').type('123456')
    cy.get('input[type="submit"').click()
    cy.contains('Invalid email or password')
})
})