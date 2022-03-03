import { orderTransactionsHistory, sortAsc, sortDesc } from '../actions/transactionsAction'
import { loginToYourAccount } from '../actions/loginAction'
import { getByFilters } from '../apis/bffInvoiceApi'
import { postAuthenticate } from '../apis/tokenApi'

describe('Order Transactions', () => {

  beforeEach('setup', () => {
    cy.visit('/')

    loginToYourAccount()
    cy.visit('https://sf.dev.sellersfundingapp.com/merchant')

    cy.contains('Transactions')
  })

  it('Customer sortDesc: false', () => {
    var topic = 'Customer'

    sortAsc(topic)

    postAuthenticate().then(response => {
      var token = response.body.result.token

      getByFilters(token, false, topic).then(response => {
        var customersApi = []
        var data = response.body.result.data
        for (var count = 0; count < 5; count++) {
          customersApi[count] = Cypress._.toUpper(data[count].customer.name)
        }

        customersApi.sort()

        orderTransactionsHistory(topic).each(($element, index, $list) => {
          var customerName = $element.get(0).innerText
          expect(Cypress._.toUpper(customerName)).to.have.eql(customersApi[index])
        })
      })
    })
  })

  it('Amount sortDesc: true', () => {
    var topic = 'Amount'

    sortDesc(topic)

    postAuthenticate().then(response => {
      var token = response.body.result.token

      getByFilters(token, true, topic).then(response => {
        var amountsApi = []
        var data = response.body.result.data
        for (var count = 0; count < 5; count++) {
          amountsApi[count] = parseFloat(data[count].totalAmount)
        }

        amountsApi.sort(function (a, b) { return a - b; }).reverse()

        orderTransactionsHistory(topic).each(($element, index, $list) => {
          var totalAmount = $element.get(0).innerText
          expect(totalAmount).to.have.eql(amountsApi[index].toLocaleString('en-US', { style: 'currency', currency: 'USD' }))
        })
      })
    })
  })
})