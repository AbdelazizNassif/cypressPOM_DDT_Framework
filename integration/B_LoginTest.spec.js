/// <reference types="Cypress" />

const { PageBase } = require("../pages/PageBase");
const { LocatorBase } = require("../pages/LocatorBase");
const { HomePage } = require("../pages/HomePage");
const { LoginPage } = require("../pages/LoginPage");

const pageBase = new PageBase();;
const locator = new LocatorBase();
const homeObj = new HomePage();
const LoginObj = new LoginPage();
var emailAdd;
var password;

describe("Login Suite", () => {

    beforeEach(() => {
        cy.visit('https://demo.nopcommerce.com/');
        homeObj.clickLogin();
        cy.fixture('EndToEndTestData').as('data');
        cy.get('@data').then((testData) => {
            emailAdd = testData.email;
            password = testData.regPassword;
        })
    })
    
    it('Enter Valid Login Data', () => {

        LoginObj.fillEmailAddress(emailAdd);
        LoginObj.fillPassword(password);
        LoginObj.clickLoginButton();
        LoginObj.assertLogoutButtonIsDisplayed();
    })
})
