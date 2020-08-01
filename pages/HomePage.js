/// <reference types="Cypress" />

import { PageBase } from "./PageBase";
import { LocatorBase } from "./LocatorBase";


const pageBase = new PageBase();
const locator = new LocatorBase();
var registerButton;
var loginButton;
var contactUsLink;

export class HomePage {

	//registerButton = locator.locateByTxt('Register');
	clickRegister()
	{
		registerButton = locator.locateByTxt('Register');
		pageBase.clickButtonOrLink(registerButton);
	}


	clickLogin()
	{
		loginButton = locator.locateByTxt('Log in');
		pageBase.clickButtonOrLink(loginButton);
	}


	clickContactUs()
	{
		contactUsLink = locator.locateByTxt('Contact us');
		pageBase.clickButtonOrLink(contactUsLink);
	}
} 