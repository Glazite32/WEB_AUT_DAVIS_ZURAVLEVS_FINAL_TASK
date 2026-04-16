import { BasePage } from "./basePage";

export class practiceFormPage extends BasePage {
    static get url() {
        return '';
    }

    static get firstName() {
        return cy.get("#firstName");
    }

    static get lastName() {
        return cy.get("#lastName");
    }

    static get emailAddress() {
        return cy.get("#userEmail");
    }

    static get genderBtn() {
        return cy.get("#gender-radio-1");
    }

    static get mobileNumber() {
        return cy.get("#userNumber");
    }

    static get subjectField() {
        return cy.get("#subjectsInput");
    }

    static selectHobby(hobbyName) {
    const hobbyMap = {
        "Sports": "#hobbies-checkbox-1",
        "Reading": "#hobbies-checkbox-2",
        "Music": "#hobbies-checkbox-3"
    };
        return cy.get(hobbyMap[hobbyName]);
    }

    static get uploadPicture() {
        return cy.get("#uploadPicture");
    }

    static get currentAddress() {
        return cy.get("#currentAddress");
    }

    static get selectState() {
        return cy.get("#state");
    }

    static pickState(state) {
        return cy.contains("div", state);
    }

    static get selectCity() {
        return cy.get("#city")
    }

    static pickCity(city) {
        return cy.contains("div", city);
    }

    static get submitBtn() {
        return cy.get("#submit")
    }

}