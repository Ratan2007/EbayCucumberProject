package upskill.ebay.pageAction;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;

import upskill.ebay.pageElements.ShettyHomepageLocator;
import upskill.utilities.SetupDrivers;

public class ShettyHomepageActions {

	ShettyHomepageLocator ShettyHomepageLocatorObj;

	public ShettyHomepageActions() {
		ShettyHomepageLocatorObj = new ShettyHomepageLocator();
		PageFactory.initElements(SetupDrivers.driver, ShettyHomepageLocatorObj);
	}
	public void loadShettyHomepage() throws Exception{
		SetupDrivers.driver.get("https://rahulshettyacademy.com/AutomationPractice/");
		Thread.sleep(3000);
	}

	public void ShettyHomepageIframe() {
		SetupDrivers.driver.switchTo().frame("iframe-name");

		//ShettyHomepageLocatorObj.ClickIFrameHome.click();
	}

	public void clickHome() {

		List<WebElement> framelist = SetupDrivers.driver.findElements(By.id("courses-iframe"));

		for (int i = 0; i < (framelist.size()); i++) {
			SetupDrivers.driver.switchTo().frame(i);

			try {
				ShettyHomepageLocatorObj.ClickIFrameHome.click();
			} catch (Exception e) {
				System.out.println("Element not found in iframes");
			}
		}

	}

	public void verifyShetty() throws InterruptedException {
		Thread.sleep(5000);
		ShettyHomepageLocatorObj.ClickIFrameHome.isDisplayed();
	}
	
	

}
