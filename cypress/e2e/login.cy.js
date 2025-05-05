describe('Saucedemo Login Tests', () => {
    const url = 'https://www.saucedemo.com/'

    it('Logs in successfully with valid credentials', () => {
        cy.visit(url)
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.url().should('include', '/inventory.html')
    })

    it('Fails to login with invalid credentials', () => {
        cy.visit(url)
        cy.get('[data-test="username"]').type('wrong_user')
        cy.get('[data-test="password"]').type('wrong_pass')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('be.visible')
    })

    it('Shows error for empty form submission', () => {
        cy.visit(url)
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('contain', 'Username is required')
    })
    })
