import { calendarPage } from "../pageObjects/calendarPage";
import { practiceFormPage } from "../pageObjects/practiceFormPage";
import { resultPage } from "../pageObjects/resultPage";

describe("Final task", () => {
    it("fills and submits the form", () => {
        practiceFormPage.visit();

        practiceFormPage.firstName.type("John");
        practiceFormPage.lastName.type("Doe")
        practiceFormPage.emailAddress.type("JohnDoe@test.com");
        practiceFormPage.genderBtn.click();
        practiceFormPage.mobileNumber.type("1234567890")

    //  28th of February, 1930.
        calendarPage.dateOfBirth.click();
        calendarPage.pickYear("1930");
        calendarPage.pickMonth("February");
        calendarPage.pickDate("28").click();

        practiceFormPage.subjectField.type("Economics").press(Cypress.Keyboard.Keys.ENTER);
        practiceFormPage.selectHobby("Music").click();
        practiceFormPage.uploadPicture.selectFile("cypress/files/WhatsApp Image 2026-04-14 at 08.26.28.jpeg")
        practiceFormPage.currentAddress.type("abracadabra village")
        practiceFormPage.selectState.click();
        practiceFormPage.pickState("NCR").click();
        practiceFormPage.selectCity.click();
        practiceFormPage.pickCity("Delhi").click();
        practiceFormPage.submitBtn.click();

        resultPage.validateResult("Student Name", "John Doe")
        resultPage.validateResult('Student Name', 'John Doe');
        resultPage.validateResult('Student Email', 'JohnDoe@test.com');
        resultPage.validateResult('Gender', 'Male');
        resultPage.validateResult('Mobile', '1234567890');
        resultPage.validateResult('Date of Birth', '28 February,1930');
        resultPage.validateResult('Subjects', 'Economics');
        resultPage.validateResult('Hobbies', 'Music');
        resultPage.validateResult('Address', 'abracadabra village');
        resultPage.validateResult('State and City', 'NCR Delhi');
    })
});