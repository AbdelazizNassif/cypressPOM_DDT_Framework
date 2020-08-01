/// <reference types="Cypress" />

import { PageBase } from "./PageBase";
import { LocatorBase } from "./LocatorBase";

const pageBase = new PageBase();
const locator = new LocatorBase();

var addToCartBtn;
var shopingCart;
var qty;
var updateCart;
var acceptTerms;
var checkoutBtn;

export class SearchPage {

	addProductToCart(productName)
	{
		addToCartBtn = locator.locateById('add-to-cart-button-4');
		pageBase.clickButtonOrLink(addToCartBtn);
	}

	checkYourCart()
	{
		shopingCart = locator.locateByTxt('Shopping cart');
		qty = locator.locateByTxt('itemquantity11262');
		pageBase.setTextElementText('2');
		updateCart = locator.locateByName('updatecart');
		pageBase.clickButtonOrLink(updateCart);		
	}

	acceptTerms()
	{
		acceptTerms = locator.locateById('termsofservice');
		pageBase.clickButtonOrLink(acceptTerms);		
		checkoutBtn = locator.locateById('tercheckoutmsofservice');
		pageBase.clickButtonOrLink(checkoutBtn);
	}

} 