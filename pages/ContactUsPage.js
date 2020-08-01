/// <reference types="Cypress" />

import { PageBase } from "./PageBase";
import { LocatorBase } from "./LocatorBase";

const pageBase = new PageBase();
const locator = new LocatorBase();

var emailBox;
var nameBox;
var enqBox;
var submitBtn;


export class ContactUsPage {

	fillEmailAddress(email)
	{
		emailBox = locator.locateById('Email');
		pageBase.setTextElementText(emailBox, email);
	}

	fillName(name)
	{
		nameBox = locator.locateById('FullName');
		pageBase.setTextElementText(nameBox, name);
	}

	fillEnquiry(enquiry)
	{
		enqBox = locator.locateById('Enquiry');
		pageBase.setTextElementText(enqBox, enquiry);
	}

	clickSubmitButton()
	{
		// Objecting the framework send-email
		submitBtn = locator.locateByName('send-email');
		pageBase.clickButtonOrLink(submitBtn);
	}

} 