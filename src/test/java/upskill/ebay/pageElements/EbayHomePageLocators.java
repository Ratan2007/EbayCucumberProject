package upskill.ebay.pageElements;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import upskill.utilities.SetupDrivers;

public class EbayHomePageLocators {

	// Search Text Box
	@FindBy(xpath = "//input[@placeholder='Search for anything']")
	public WebElement txtbxSearch;

	// Search Button
	@FindBy(xpath = "//input[@value='Search']")
	public WebElement btnSearch;

	// Electronics Button
	@FindBy(xpath = "//*[@id=\"mainContent\"]/div[1]/ul/li[4]/a")
	public WebElement btnElectronics;

	// Toy button
	@FindBy(xpath = "//*[@id=\"mainContent\"]/div[1]/ul/li[8]/a")
	public WebElement btnToy;
	
    //My ebay links
	@FindBy(xpath = "//a[@title='My eBay']")
	public WebElement linkMyEbay;// "//a[@title='My eBay']"
	
    //summary
	@FindBy(xpath = "//a[contains(text(),'Summary')]")
	public WebElement linkSummary;// "//a[contains(text(),'Summary')]"

	// Locators using without Page Factory
	public WebElement test = SetupDrivers.driver.findElement(By.xpath("//input[contains(@value, 'Search')]"));


}
