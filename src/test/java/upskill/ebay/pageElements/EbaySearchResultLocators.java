package upskill.ebay.pageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class EbaySearchResultLocators {

	// Validate Shoes Items
	@FindBy(xpath = "//span[2][contains(text(), 'Shoes')]")
	public WebElement txtShoes;

	// Validate Shirts Items
	@FindBy(xpath = "//span[2][contains(text(), 'shirts')]")
	public WebElement txtShirts;

	// Validate Pants Items
	@FindBy(xpath = "//span[2][contains(text(), 'pants')]")
	public WebElement txtPants;

	// Checkbox Brand Adidas
	@FindBy(xpath = "//input[@aria-label='adidas']")
	public WebElement cbxBrandAdidas;

	// Checkbox Brand Nike
	@FindBy(xpath = "//input[@aria-label='Nike']")
	public WebElement cbxBrandNike;

	// Checkbox Brand Unbranded
	@FindBy(xpath = "//input[@aria-label='Unbranded']")
	public WebElement cbxBrandUnbranded;
//________________________________________________________
	// Shoes Checkbox Country China
	@FindBy(how = How.XPATH, using = "//*[@id=\"s0-51-12-0-1-2-6-0-2[1]-4[5]-3\"]")
	public WebElement ClickDownArrow;
	// Shirts Checkbox Country China
	@FindBy(how = How.XPATH, using = "//*[@id=\"x-refine__group_1__5\"]/ul/li[6]/div/a/div/span/input")
	public WebElement CbxSCountryChina;
	// Shirts Checkbox Country Bangladesh
	@FindBy(how = How.XPATH, using = "//*[@id=\"x-refine__group_1__3\"]/ul/li[2]/div/a/div/span/input") //// *[@id="x-refine__group_1__3"]/ul/li[2]/div/a/div/span/input
	public WebElement CbXSCountryBangladesh;
	@FindBy(how = How.XPATH, using = "//*[@id=\"s0-51-12-6-3-4[0]-3-1-1-list\"]/li/div/a/div")
	public WebElement btnBlogo;
	// Pants Checkbox Country United States
	@FindBy(how = How.XPATH, using = "//*[@id=\"x-refine__group_1__2\"]/ul/li[6]/div/a/div/span/input")
	public WebElement CbxPCountryUSA;

	// Big & Tall Cotton Tee
	@FindBy(xpath = "//span[text()='Big & Tall Cotton Tee. Sizes 4 XLT to 8XLT. With & without pockets. MADE IN USA']")
	public WebElement BCottonTeesItems;


}
