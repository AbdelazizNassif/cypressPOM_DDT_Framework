export class PageBase {
    
    clickButtonOrLink(WebElement)
	{
		WebElement.click();
    }
    setTextElementText(WebElement, textItself)
	{
		//WebElement.clear();
		WebElement.type(textItself);
    }
    scrollToElement(WebElement)
	{
		WebElement.scrollIntoView();
    }
    selectFrmDDListByValue(WebElement, value)
	{
		WebElement.select(value);
    }


} 