Cypress.Commands.add('getElement', (element) => {
    return cy.wait(500).get(element);
})

declare namespace Cypress {
    interface Chainable<Subject> {
        getElement(element): Chainable<any>
    }
}
