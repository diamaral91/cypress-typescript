export const labelTotalEarnings = () => { return cy.getElement(".flex-wrap.gap-1 > :nth-child(1) > .font-bold") }
export const labelUnderAnalisys = () => { return cy.wait(3).getElement(".flex-wrap.gap-1 > :nth-child(2) > .font-bold") }
export const labelLinksGenerated = () => { return cy.getElement(".flex-wrap.gap-1 > :nth-child(3) > .font-bold") }
export const labelApprovalRate = () => { return cy.getElement(":nth-child(4) > .font-bold") }
export const labelReceivedThisMonth = () => { return cy.getElement(":nth-child(5) > .font-bold") }
export const labelTotalLinksGenerated = () => { return cy.getElement(":nth-child(6) > .font-bold") }