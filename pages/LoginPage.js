/// <reference types="Cypress" />

import { PageBase } from "./PageBase";
import { LocatorBase } from "./LocatorBase";
const { AssertResults } = require("../assertions/Assertions");


const pageBase = new PageBase();
const locator = new LocatorBase();
const assertTest = new AssertResults();


var emailBox;
var passwordBox;
var loginBtn;
var logoutBtn;

export class LoginPage {

	fillEmailAddress(email)
	{
		emailBox = locator.locateById('Email');
		pageBase.setTextElementText(emailBox, email);
	}

	fillPassword(password)
	{
		passwordBox = locator.locateById('Password');
		pageBase.setTextElementText(passwordBox, password);
	}

	clickLoginButton()
	{
		// Objecting the framework
		loginBtn = locator.locateByFullCss('form > .buttons > .button-1')
		pageBase.clickButtonOrLink(loginBtn);
	}

	assertLogoutButtonIsDisplayed()
	{
		logoutBtn = locator.locateByClass('ico-logout');
		assertTest.assertElmentVisible(logoutBtn);
	}

} 