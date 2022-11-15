package upskill.ebay.pageAction;

import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import upskill.ebay.pageElements.EbayCartDropDownPageLocators;
import upskill.utilities.SetupDrivers;

public class EbayCartDropDownPageActions {
	EbayCartDropDownPageLocators EbayCartDropDownPageLocatorsObj;

	public EbayCartDropDownPageActions() {
		EbayCartDropDownPageLocatorsObj = new EbayCartDropDownPageLocators();
		PageFactory.initElements(SetupDrivers.driver, EbayCartDropDownPageLocatorsObj);
	}
	public void switchNewWindow() {
		for(String winHandle: SetupDrivers.driver.getWindowHandles())
	SetupDrivers.driver.switchTo().window(winHandle);
	
	}

	public void selectSize() throws InterruptedException {
		Select dropDown = new Select(EbayCartDropDownPageLocatorsObj.sizeTypeDD);
		dropDown.selectByVisibleText("Big & Tall");
		Thread.sleep(2000);
	}
	public void selectMenSize() throws InterruptedException {
		Select dropDown = new Select(EbayCartDropDownPageLocatorsObj.menSizeDD);
		dropDown.selectByVisibleText("8XLT");
		Thread.sleep(2000);
	}
	public void selectShade() throws InterruptedException {
		Select dropDown = new Select(EbayCartDropDownPageLocatorsObj.shade);
		dropDown.selectByVisibleText("White");
		Thread.sleep(2000);
	}
	public void inputQuantity() {
		EbayCartDropDownPageLocatorsObj.qtyDD.clear();
		EbayCartDropDownPageLocatorsObj.qtyDD.sendKeys("4");
	}
	public void clickAddToCart() {
		EbayCartDropDownPageLocatorsObj.addToCart.click();
	}

}
