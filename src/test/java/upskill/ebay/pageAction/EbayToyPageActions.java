package upskill.ebay.pageAction;

import org.openqa.selenium.support.PageFactory;

import upskill.ebay.pageElements.EbayToyPageLocators;
import upskill.utilities.SetupDrivers;

public class EbayToyPageActions {
	EbayToyPageLocators EbayToyPageLocatorsObj;

	public EbayToyPageActions() {
		EbayToyPageLocatorsObj = new EbayToyPageLocators();
		PageFactory.initElements(SetupDrivers.driver, EbayToyPageLocatorsObj);
	}

	public void verifyToyPage() throws InterruptedException {
		Thread.sleep(3000);
		
		String title=SetupDrivers.driver.getCurrentUrl();
		System.out.println("Print Toy page Title:"+title);
		EbayToyPageLocatorsObj.ToypageeBaylogo.isDisplayed();
	}

}
