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

export class AddToCartPage {

	addProductToCart(productName)
	{
		addToCartBtn = locator.locateById('add-to-cart-button-4');
		pageBase.clickButtonOrLink(addToCartBtn);
	}

	checkYourCart()
	{
		//cy.get('.cart-label')
		shopingCart = locator.locateByClass('cart-label');
		pageBase.scrollToElement(shopingCart);
		pageBase.clickButtonOrLink(shopingCart);
	}

	acceptTermsAndConfirm()
	{
		acceptTerms = locator.locateById('termsofservice');
		pageBase.clickButtonOrLink(acceptTerms);		
		checkoutBtn = locator.locateById('checkout');
		pageBase.clickButtonOrLink(checkoutBtn);
	}

} 