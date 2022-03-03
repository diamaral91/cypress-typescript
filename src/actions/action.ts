import { postSendAnEmailWithInvoiceDetails } from "../apis/bffInvoiceApi"
import { postAuthenticate } from "../apis/tokenApi"
import { btnCreateNewInvoice, btnDownloadInvoice, btnSendEmail, codPaymentTo, labelYourInvoicePayment } from "../targets/invoiceCreatedTarget"

export const checkInvoiceCreatedPage = () => {
    labelYourInvoicePayment().contains('Your invoice with payment')
}

export const downloadAndCheckInvoice = () => {
    btnDownloadInvoice().click()
    codPaymentTo().invoke('text').then(value => {
        cy.readFile('cypress/Downloads/Invoice ' + value + '.pdf')  
    })
}

export const createNewInvoice = () => {
    btnCreateNewInvoice().click()
}

export const sendEmail = () => {
    btnSendEmail().click()
    postAuthenticate().then(response => {
        postSendAnEmailWithInvoiceDetails(response.body.result.token)
    })
}

