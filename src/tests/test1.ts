import { loginToYourAccount } from '../actions/loginAction'
import { getGetPaymentsLinkOverview } from '../apis/bffInvoiceApi'
import { postAuthenticate } from '../apis/tokenApi'
import { labelApprovalRate, labelLinksGenerated, labelReceivedThisMonth, labelTotalEarnings, labelTotalLinksGenerated, labelUnderAnalisys } from '../targets/target'

describe('BNPL Invoices Overview', () => {

  beforeEach('setup', () => {
    cy.visit('/')

    loginToYourAccount()
    cy.contains('Transactions')
  })

  it('Get payments link overview', () => {
    postAuthenticate().then(response => {
      getGetPaymentsLinkOverview(response.body.result.token).then(response => {
        labelTotalEarnings().should('have.text', response.body.result.totalEarnings.toLocaleString('en-US', {
          style: 'currency', currency: 'USD'}))
        labelUnderAnalisys().should('have.text', response.body.result.underAnalisys.toLocaleString('en-US', {
          style: 'currency', currency: 'USD'}))
        labelLinksGenerated().should('have.text', response.body.result.linksGenerated)
        labelApprovalRate().should('have.text', response.body.result.approvalRate + '%')
        labelReceivedThisMonth().should('have.text', response.body.result.currentMonthReceivements.toLocaleString('en-US', {
          style: 'currency', currency: 'USD'}))
        labelTotalLinksGenerated().should('have.text', response.body.result.totalLinksGenerated)
      })
    })
  })
})