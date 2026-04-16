import { BasePage } from "./basePage";

export class calendarPage extends BasePage{
    static get dateOfBirth(){
        return cy.get("#dateOfBirthInput");
    }

    static pickYear(year) {
       return cy.get('.react-datepicker__year-select').select(year)
    }   

    static pickMonth(month){
        return cy.get(".react-datepicker__month-select").select(month);
    }

    static pickDate(day){
        return cy.get(`.react-datepicker__day--0${day}`).not('.react-datepicker__day--outside-month');
    }


} 