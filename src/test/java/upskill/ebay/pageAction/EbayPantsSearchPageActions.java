package upskill.ebay.pageAction;

import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import upskill.ebay.pageElements.EbayPantsSearchResultLocator;
import upskill.utilities.SetupDrivers;

public class EbayPantsSearchPageActions {
	EbayPantsSearchResultLocator EbayPantsSearchResultLocatorObj;

	public EbayPantsSearchPageActions() {
		EbayPantsSearchResultLocatorObj = new EbayPantsSearchResultLocator();
		PageFactory.initElements(SetupDrivers.driver, EbayPantsSearchResultLocatorObj);
	}

	public void verifySearchPants() {
		// Oction1
		
		EbayPantsSearchResultLocatorObj.txtPants.isDisplayed();
		// Oction2
		// Assert.assertEquals("Title",EbayPantsSearchResultLocatorObj.getTitle());
		// Oction3
		Assert.assertTrue(EbayPantsSearchResultLocatorObj.txtPants.isDisplayed());
	}

}
