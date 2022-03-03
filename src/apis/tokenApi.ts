import tokenApi from '../fixtures/tokenApi.json'

export function postAuthenticate () {
    return cy.request({
        method: 'POST',
        url: tokenApi.url + tokenApi.postAuthenticate.path,
        headers: {
            'Ocp-Apim-Subscription-Key': tokenApi.header.OcpApimSubscriptionKey,
        },
        body: {
            'email': Cypress.env('email'),
            'password': Cypress.env('password')
        }
    })
}