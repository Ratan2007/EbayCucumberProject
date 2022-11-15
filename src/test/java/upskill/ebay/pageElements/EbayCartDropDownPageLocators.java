package upskill.ebay.pageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class EbayCartDropDownPageLocators {
	@FindBy(how = How.XPATH, using = "//select[@name='Size Type']")
	public WebElement sizeTypeDD;
	
	@FindBy(how = How.XPATH, using = "//select[@id='msku-sel-2']")
	public WebElement menSizeDD;
	
	@FindBy(how = How.XPATH, using = "//select[@name='Shade']")
	public WebElement shade;
	
	@FindBy(how = How.XPATH, using = "//input[@class='qtyInput']")
	public WebElement qtyDD;
	
	@FindBy(how = How.XPATH, using = "//a[@id='atcRedesignId_btn']")
	public WebElement addToCart;

}
