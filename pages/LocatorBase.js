export class LocatorBase {
    
    locateById(id)
	{
		return cy.get('#' + id);
	}

	locateByClass(classAttr)
	{
		return cy.get('.' + classAttr);
	}

	locateByTxt(txt)
	{
		return cy.contains(txt);
	}
	
	locateByName(nameAttr)
	{
		return cy.get( "[name=" + nameAttr + "]" );
	}

	locateByFullCss(full_css)
	{
		return cy.get(full_css);
	}

	locateFromListById(id, list_index)
	{
		return cy.get('#' + id).find('li').eq(list_index);
	}

	locateByAttr(attr, attrValue)
	{
		return cy.get( "[" + attr + "="  + nameAttr + "]" );
	}

	locatefromList(root, todoIndex, child)
	{
		return cy.get(root + " li:nth-child(${todoIndex + 1}) " + child );
    }
    


} 