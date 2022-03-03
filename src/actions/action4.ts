import { btnNewInvoice, topics, listCustomer,  listAmount, inputOrder, inputSearch, btnSearch } from "../targets/linkTransactionsHistoryTarget"

export function orderTransactionsHistory (topic) {
    switch(topic){
        case 'Customer':
            return listCustomer()
        case 'Amount':
            return listAmount()
    }
}

export function sortDesc (topic) {
    topics().contains(topic).click()
    inputOrder().wait(3000).invoke('val').then(($text) => {
        if ($text === 'DESC') {
            return
        } else {
            topics().contains(topic).click()
        }
    })
}

export function sortAsc (topic) {
    topics().contains(topic).click()
    inputOrder().wait(3000).invoke('val').then(($text) => {
        if ($text === 'ASC') {
            return
        } else {
            topics().contains(topic).click()
        }
    })
}

export const generateNewInvoice = () => {
    btnNewInvoice().click()
}

export function fillSearchName (name) {
    inputSearch().clear({force:true}).type(name)
    btnSearch().click().wait(3000)
    return listCustomer()
}