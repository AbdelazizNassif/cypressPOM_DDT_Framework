/// <reference types="Cypress" />

const { PageBase } = require("../pages/PageBase");
const { LocatorBase } = require("../pages/LocatorBase");
const { HomePage } = require("../pages/HomePage");
const { RegisterPage } = require("../pages/RegisterPage");
const { ContactUsPage } = require("../pages/ContactUsPage");

const pageBase = new PageBase();;
const locator = new LocatorBase();
const homeObj = new HomePage();
const contactObj = new ContactUsPage();
var fname;
var lName;
var emailAdd;
var enquiry;

describe("Contact Us Suite", () => {

    beforeEach(() => {
        cy.visit('/');
        homeObj.clickContactUs();
        cy.fixture('EndToEndTestData').as('data');
        cy.get('@data').then((testData) => {
            fname = testData.firstName;
            lName = testData.lastName;
            emailAdd = testData.email;
            enquiry = testData.enquiryKey;
        })
    })
    it('Enter Valid Contact us Data', () => {
        contactObj.fillName(fname + " " + lName);
        contactObj.fillEmailAddress(emailAdd);
        contactObj.fillEnquiry(enquiry);
        contactObj.clickSubmitButton();
    })
})
