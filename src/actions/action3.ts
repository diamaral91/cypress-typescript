import invoice from '../fixtures/invoice.json'
import date from 'date-and-time';
import { btnAdvanceAndGenerateInvoice, fileAttached, labelAmountChange, labelDate, labelInstallments, labelInterestPlayer, labelInvoiceGeneration, labelItemName, labelItemValue, labelPayerEmail, labelPaymentBegin, labelReceivingFrom, labelShowArrive, labelTotalReceivements, labelTransactionFee } from '../targets/confirmationTarget'

const currency = ' USD'

export const reviewInformation = () => {
    labelDate().should('have.text', date.format(new Date(), 'DD MMM YYYY'))
    labelReceivingFrom().should('have.text', invoice.payerInformation.name)
    labelInvoiceGeneration().should('have.text', invoice.confirmation.invoiceGeneration)
    labelPayerEmail().should('have.text', Cypress.env('email'))
    labelShowArrive().should('have.text', invoice.confirmation.showArrive)
}

export const reviewDescriptionInvoice = () => {
    labelItemName().each(($element, index, $list) => {
        cy.wrap($element).should('have.text', invoice.priceAndItems.describeInvoiceItems[index].name)
    })
    labelItemValue().each(($element, index, $list) => {
        var quantity = invoice.priceAndItems.describeInvoiceItems[index].quantity
        var unitPrice = invoice.priceAndItems.describeInvoiceItems[index].unitPrice
        cy.wrap($element).should('have.text', (parseFloat(quantity) * parseFloat(unitPrice)).toLocaleString('en-US', {
            style: 'currency', currency: 'USD', }) + currency)
    })
}

export const reviewAttachedInvoice = () => {
    fileAttached().each(($element, index, $list) => {
        cy.wrap($element).should('have.text', invoice.priceAndItems.uploadMyInvoice.file[index])
    })
}

export const reviewTerms = (interestPlayer, paymentsBeginIn, installmentsAvaiable) => {
    labelInterestPlayer().should('have.text', interestPlayer)
    labelPaymentBegin().should('have.text', paymentsBeginIn)
    labelInstallments().should('have.text', installmentsAvaiable)
}

export const advanceAndGenerateInvoice = (totalAmount, installmentsFee, totalReceivements) => {
    labelAmountChange().should('have.text', parseFloat(totalAmount).toLocaleString('en-US', {
        style: 'currency', currency: 'USD', }) + currency)
    labelTransactionFee().should('have.text', '-' + installmentsFee.toLocaleString('en-US', {
        style: 'currency', currency: 'USD', }) + currency)
    labelTotalReceivements().should('have.text', parseFloat(totalReceivements).toLocaleString('en-US', {
        style: 'currency', currency: 'USD', }) + currency)
    btnAdvanceAndGenerateInvoice().click()
}