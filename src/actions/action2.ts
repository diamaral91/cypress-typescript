import { labelApprovalRate, labelLinksGenerated, labelReceivedThisMonth, labelTotalEarnings, labelUnderAnalisys } from '../targets/target'

export const checkTotalEarnings = () => {
    return labelTotalEarnings()
}

export const checklabelApprovalRate = () => {
    return labelApprovalRate()
}

export const checkApprovalRate = () => {
    return labelApprovalRate()
}

export const checkUnderAnalisys = () => {
    return labelUnderAnalisys()
}

export const checkLinksGenerated = () => {
    return labelLinksGenerated()
}

export const checkReceivedThisMonth = () => {
    return labelReceivedThisMonth()
}