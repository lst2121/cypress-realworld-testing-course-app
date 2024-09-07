describe('home page', () => {
  beforeEach(() =>{
    cy.visit('http://localhost:3000/')})

  it('the h1 contains the correct text', () => {
    cy.get('h1').should('exist').contains('Testing Next.js Applications with Cypress')
  })

  it('best practises use data-test attribute instead of class or id', () => {
    cy.get('[data-test="hero-heading"]').should('be.visible').contains('Testing Next.js Applications with Cypress')
  })

  it('the features on homepage are correct', () => {
    const course_features = ['4 Courses', '25+ Lessons', 'Free and Open Source']
    course_features.forEach((feature, index) => {
      cy.get('dt').eq(index).should('be.visible').contains(feature);
    });
    
  })
})