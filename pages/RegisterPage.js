/// <reference types="Cypress" />

import { PageBase } from "./PageBase";
import { LocatorBase } from "./LocatorBase";
const { AssertResults } = require("../assertions/Assertions");

const pageBase = new PageBase();
const locator = new LocatorBase();
const assertTest = new AssertResults();

var maleRadBtn;
var firstNameBox;
var lastNameBox;
var dayBirth;
var monthBirth;
var yearBirth;
var emailBox;
var passwordBox;
var confirmPasswordBox;
var registerButton;
var registerResult;

export class RegisterPage {

	clickMaleRadBtn()
	{
		maleRadBtn = locator.locateById('gender-male');
		pageBase.clickButtonOrLink(maleRadBtn);
	}

	fillFirstName(firstName)
	{
		firstNameBox = locator.locateById('FirstName');
		pageBase.setTextElementText(firstNameBox, firstName);
	}

	fillLastName(lastName)
	{
		lastNameBox = locator.locateById('LastName');
		pageBase.setTextElementText(lastNameBox, lastName);
	}

	fillBirthData(day, month, year)
	{
		dayBirth = locator.locateByName('DateOfBirthDay');
		pageBase.selectFrmDDListByValue(dayBirth, day);
		

		monthBirth = locator.locateByName('DateOfBirthMonth');
		pageBase.selectFrmDDListByValue(monthBirth, month)


		yearBirth = locator.locateByName('DateOfBirthYear');
		pageBase.selectFrmDDListByValue(yearBirth, year)
	}

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

	fillConfirmPassword(confirm_password)
	{
		confirmPasswordBox = locator.locateById('ConfirmPassword');
		pageBase.setTextElementText(confirmPasswordBox, confirm_password);
	}

	clickRegisterButton()
	{
		registerButton = locator.locateById('register-button');
		pageBase.clickButtonOrLink(registerButton);
	}

	assertRegisterSucessIsDisplayed()
	{
		registerResult = locator.locateByClass('result');
		assertTest.assertElmentVisible(registerResult);
	}

} 