export class AssertResults {
    
    assertElmentVisible(WebElement)
	{
		WebElement.should('be.visible');
    }
	assertElmentContainsAttribute(WebElement, attr)
	{
		WebElement.should('have.attr' , attr);
	}
	assertPageTitleContains(partOfTitle)
	{
		cy.title().should('contain' , partOfTitle);
	}
	assertPageUrlEquals(url)
	{
		cy.url().should('equal' , url);
	}
	assertElementTextEquals(WebElement, elemTxt)
	{
		WebElement.should('have.text', elemTxt);
	}
	assertLisIsEmpty(listElem)
	{
		listElem.should('not.have.descendants' , 'li');
	}
	assertLisIsNotEmpty(listElem)
	{
		listElem.should('have.descendants' , 'li');
	}
	assertElementContainsCss(WebElement, cssKey, cssValue)
	{
		WebElement.should('have.css', cssKey, cssValue);
	}


	


} 