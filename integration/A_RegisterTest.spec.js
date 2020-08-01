/// <reference types="Cypress" />

const { PageBase } = require("../pages/PageBase");
const { LocatorBase } = require("../pages/LocatorBase");
const { HomePage } = require("../pages/HomePage");
const { RegisterPage } = require("../pages/RegisterPage");

const pageBase = new PageBase();;
const locator = new LocatorBase();
const homeObj = new HomePage();
const regObj = new RegisterPage();
var fname;
var lName;
var emailAdd;
var password;

describe("Registeration Suite", () => {

    beforeEach(() => {
        cy.visit('/');
        homeObj.clickRegister();
        cy.fixture('EndToEndTestData').as('data');
        cy.get('@data').then((testData) => {
            fname = testData.firstName;
            lName = testData.lastName;
            emailAdd = testData.email;
            password = testData.regPassword;
        })
    })
    it('Enter Valid Reigter Data', () => {
        regObj.clickMaleRadBtn();
        regObj.fillFirstName(fname);
        regObj.fillLastName(lName);
        regObj.fillBirthData('5', '3', '1994');
        regObj.fillEmailAddress(emailAdd);
        regObj.fillPassword(password);
        regObj.fillConfirmPassword(password);
        regObj.clickRegisterButton();
        regObj.assertRegisterSucessIsDisplayed();
    })
})
