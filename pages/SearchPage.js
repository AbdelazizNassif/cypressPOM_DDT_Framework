/// <reference types="Cypress" />

import { PageBase } from "./PageBase";
import { LocatorBase } from "./LocatorBase";

const pageBase = new PageBase();
const locator = new LocatorBase();

var searchBox;
var searchBtn;
var firstOpt;




export class SearchPage {

	searchProductWithoutAutoComp(productName)
	{
		searchBox = locator.locateById('small-searchterms');
		pageBase.setTextElementText(searchBox, productName);
	}

	searchProductChooseFromAutoComp(partofproductName)
	{
		searchBox = locator.locateById('small-searchterms');
		pageBase.setTextElementText(searchBox, partofproductName);
		firstOpt = locator.locateFromListById('ui-id-1', 1);
		firstOpt.click();
	}

	submitUsingSrchBtn()
	{
		searchBtn = locator.locateByFullCss('form > .button-1');
		pageBase.clickButtonOrLink(searchBtn);
	}



} 