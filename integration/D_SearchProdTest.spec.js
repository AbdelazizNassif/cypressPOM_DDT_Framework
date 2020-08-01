/// <reference types="Cypress" />

const { PageBase } = require("../pages/PageBase");
const { LocatorBase } = require("../pages/LocatorBase");
const { HomePage } = require("../pages/HomePage");
const { SearchPage } = require("../pages/SearchPage");
const { AddToCartPage } = require("../pages/AddToCartPage");

const pageBase = new PageBase();;
const locator = new LocatorBase();
const homeObj = new HomePage();
const searchObj = new SearchPage();
const addToCartObj = new AddToCartPage();
var prodFullName;
var prodFirstFewLetters;

describe("Search Product Suite", () => {

    beforeEach(() => {
        cy.visit('https://demo.nopcommerce.com/');
        cy.fixture('EndToEndTestData').as('data');
        cy.get('@data').then((testData) => {
            prodFullName = testData.fullProdName;
            prodFirstFewLetters = testData.prodNameAutoComp;
        })
    })
    it('Enter Full Product Name', () => {
        searchObj.searchProductWithoutAutoComp(prodFullName);
        searchObj.submitUsingSrchBtn();
    })
    it('Enter and choose from autocomplete accept terms and confirm order', () => {
        searchObj.searchProductChooseFromAutoComp(prodFirstFewLetters);
        addToCartObj.addProductToCart();
        addToCartObj.checkYourCart();
        addToCartObj.acceptTermsAndConfirm();
    })

  
})
