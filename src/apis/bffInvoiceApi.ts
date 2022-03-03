import bffApi from '../fixtures/bffApi.json'

export function getByFilters(token, sortDesc, orderBy) {
    return cy.request({
        method: 'GET',
        url: bffApi.url + bffApi.getByFilters.path,
        headers: {
            'Ocp-Apim-Subscription-Key': bffApi.header['Ocp-Apim-Subscription-Key'],
            Authorization: 'Bearer ' + token
        },
        qs: {
            pageNumber: 1,
            rowsOfPage: 9999,
            sortDesc: sortDesc,
            orderBy: orderBy
        }
    })
}

export function getGetPLO(token) {
    return cy.request({
        method: 'GET',
        url: bffApi.url + bffApi.getPLO.path,
        headers: {
            'Ocp-Apim-Subscription-Key': bffApi.header['Ocp-Apim-Subscription-Key'],
            Authorization: 'Bearer ' + token
        },
        qs: {
            merchantExternalId: bffApi.externalId,
            currency: "usd",
            startDate: "2020-01-01 09:29:54.6900000",
            endDate: "2024-02-22 18:29:54.6900000"
        }
    })
}