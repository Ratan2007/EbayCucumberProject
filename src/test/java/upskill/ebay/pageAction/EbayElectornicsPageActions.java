package upskill.ebay.pageAction;

import org.openqa.selenium.support.PageFactory;

import upskill.ebay.pageElements.EbayElectronicsPageLocators;
import upskill.utilities.SetupDrivers;

public class EbayElectornicsPageActions {
	EbayElectronicsPageLocators EbayElectronicsPageLocatorsObj;

	public EbayElectornicsPageActions() {
		EbayElectronicsPageLocatorsObj = new EbayElectronicsPageLocators();
		PageFactory.initElements(SetupDrivers.driver, EbayElectronicsPageLocatorsObj);
	}

	public void VerifyViewElectronicsPage() throws InterruptedException {
		Thread.sleep(3000);
		EbayElectronicsPageLocatorsObj.clickCameraImage.click();

		Thread.sleep(3000);
	}
}
