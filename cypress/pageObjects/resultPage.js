import { BasePage } from "./basePage";

export class resultPage extends BasePage{
    // Ar šo nedaudz palīdzēja AI Copilot, nevarēju saprast labu laikā kā izmantot "td" kopā ar label
    static validateResult(label, expectedValue) {
        cy.contains('td', label)
            .next()
            .should('contain', expectedValue);    
    }

}