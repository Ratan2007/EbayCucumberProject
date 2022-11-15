package upskill.ebay.pageAction;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Action;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;

import upskill.ebay.pageElements.EbayHomePageLocators;
import upskill.utilities.ReadExcelSheet;
import upskill.utilities.SetupDrivers;

public class EbayHomePageActions {

	EbayHomePageLocators EbayHomePageLocatorsObj;

	public EbayHomePageActions() {
		EbayHomePageLocatorsObj = new EbayHomePageLocators();
		PageFactory.initElements(SetupDrivers.driver, EbayHomePageLocatorsObj);
	}

	public void searchShirts() {
		EbayHomePageLocatorsObj.txtbxSearch.sendKeys("Shirts");
		EbayHomePageLocatorsObj.txtbxSearch.sendKeys(Keys.ENTER);
	}

	public void searchShoes() {
		EbayHomePageLocatorsObj.txtbxSearch.sendKeys("Shoes");
		EbayHomePageLocatorsObj.txtbxSearch.sendKeys(Keys.ENTER);
	}

	public void clickbtnElectronics() {
		EbayHomePageLocatorsObj.btnElectronics.click();
	}

	public void clickbtnToy() {
		EbayHomePageLocatorsObj.btnToy.click();
	}

	public void searchPants() {
		EbayHomePageLocatorsObj.txtbxSearch.sendKeys("Pants");
		EbayHomePageLocatorsObj.txtbxSearch.sendKeys(Keys.ENTER);
	}

	public void searchPantsFromExel() throws Exception {
		EbayHomePageLocatorsObj.txtbxSearch.sendKeys(ReadExcelSheet.getMapData("Search"));
		EbayHomePageLocatorsObj.txtbxSearch.sendKeys(Keys.ENTER);
	}

	public void searchItems(String Items) {
		EbayHomePageLocatorsObj.txtbxSearch.sendKeys(Items);
		EbayHomePageLocatorsObj.btnSearch.sendKeys(Keys.ENTER);
	}

	public void searchForBigTall() {
		EbayHomePageLocatorsObj.txtbxSearch.sendKeys("big tall cotton tee");
		// EbayHomePageLocatorsObj.btnSearch.click();
		EbayHomePageLocatorsObj.btnSearch.sendKeys(Keys.ENTER);
	}

	public void mouseHoverMyEbay() throws Exception {
		Actions actions = new Actions(SetupDrivers.driver);
		actions.moveToElement(EbayHomePageLocatorsObj.linkMyEbay);
		actions.perform();
		Thread.sleep(3000);
	}

	public void clickSummary() throws Exception {

		Actions actions = new Actions(SetupDrivers.driver);
		actions.moveToElement(EbayHomePageLocatorsObj.linkMyEbay).moveToElement(EbayHomePageLocatorsObj.linkSummary)
				.click().build().perform();

		Thread.sleep(3000);
	}

//	public void mouseHoverMyEbay() throws InterruptedException {
//	Actions act = new Actions(SetupDrivers.driver);
//	act.moveToElement(EbayHomePageLocatorsObj.linkMyEbay);
//	act.perform();
//	Thread.sleep(1000);
//}
//
//public void clickSummary() throws InterruptedException {
//	//EbayHomePageLocatorsObj.linkSummary.isEnabled();
//	EbayHomePageLocatorsObj.linkSummary.click();
//	Thread.sleep(5000);
//
//}

	public void handleAlert() {
		SetupDrivers.driver.switchTo().alert().accept();
		SetupDrivers.driver.switchTo().alert().dismiss();
		SetupDrivers.driver.switchTo().alert().sendKeys("Survery Loods good");
		SetupDrivers.driver.switchTo().alert().getText();
		SetupDrivers.driver.switchTo().defaultContent();
	}

	public void javaScriptExecutor() {
		JavascriptExecutor js = (JavascriptExecutor) SetupDrivers.driver;
		js.executeScript("EbayHomePageLocatorsObj.btnSearch.sendKeys(Keys.ENTER);");
	}

	public void handleIframe() {
		SetupDrivers.driver.switchTo().frame(0);
		SetupDrivers.driver.switchTo().frame("id");
		SetupDrivers.driver.switchTo().frame("name");
		SetupDrivers.driver.switchTo().frame("id");
	}

	public void dynamicFrame() {
		List<WebElement> framelist = SetupDrivers.driver.findElements(By.tagName("iframe"));
		for (int i = 0; i < (framelist.size()); i++) {
			SetupDrivers.driver.switchTo().frame(i);

			try {
				EbayHomePageLocatorsObj.btnSearch.click();
			} catch (Exception e) {
				System.out.println("Elements not found in iframe");
			}

		}
	}

}
