package upskill.ebay.pageAction;

import org.openqa.selenium.support.PageFactory;

import upskill.ebay.pageElements.EbaySearchResultLocators;
import upskill.utilities.SetupDrivers;

public class EbaySearchResultActions {
	EbaySearchResultLocators EbaySearchResultLocatorsObj;

	public EbaySearchResultActions() {
		EbaySearchResultLocatorsObj = new EbaySearchResultLocators();
		PageFactory.initElements(SetupDrivers.driver, EbaySearchResultLocatorsObj);
	}

	public void verifyShoesItems() {
		// Oction1
		EbaySearchResultLocatorsObj.txtShoes.isDisplayed();
		// Oction2
		// Assert.assertEquals("shoes",EbaySearchResultLocatorsObj.txtShoes.getText());
		// Oction3
		// Assert.assertTrue(EbaySearchResultLocatorsObj.txtShoes.isDisplayed());
	}

	public void filterBrand(String brand) {
		if (brand.equals("Adidas")) {
			EbaySearchResultLocatorsObj.cbxBrandAdidas.click();
		} else if (brand.equals("Nike")) {
			EbaySearchResultLocatorsObj.cbxBrandNike.click();
		} else if (brand.equals("Unbranded")) {
			EbaySearchResultLocatorsObj.cbxBrandUnbranded.click();
		} else {
			System.out.println("Brand not found,Please implement !");
		}

	}

	public void verifyBrandsItems(String brand) {
		if (brand.equals("Adidas")) {
			// Assert.assert.assertTrue(EbaySearchResultLocatorsObj)
			EbaySearchResultLocatorsObj.cbxBrandAdidas.isSelected();
		} else if (brand.equals("Nike")) {
			EbaySearchResultLocatorsObj.cbxBrandNike.isSelected();
		} else if (brand.equals("Unbranded")) {
			EbaySearchResultLocatorsObj.cbxBrandUnbranded.isSelected();
		} else {
			System.out.println("Brand not found,Please implement !");
		}
	}

	public void filterCountry(String Country) throws InterruptedException {
		if (Country.equals("China")) {
			EbaySearchResultLocatorsObj.ClickDownArrow.click();
			EbaySearchResultLocatorsObj.CbxSCountryChina.click();
		} else if (Country.equals("Bangladesh")) {
			EbaySearchResultLocatorsObj.CbXSCountryBangladesh.click();
		} else if (Country.equals("United States")) {
			EbaySearchResultLocatorsObj.CbxPCountryUSA.click();
		} else {
			System.out.println("Country not found,Please implement !");
		}

	}

	public void verifyItemsByCountry(String Country) {
		if (Country.equals("China")) {

			EbaySearchResultLocatorsObj.CbxSCountryChina.isSelected();
		} else if (Country.equals("Bangladesh")) {
			EbaySearchResultLocatorsObj.btnBlogo.isDisplayed();
			// EbaySearchResultLocatorsObj.CbXSCountryBangladesh.isSelected();
		} else if (Country.equals("United States")) {
			EbaySearchResultLocatorsObj.CbxPCountryUSA.isSelected();
		} else {
			System.out.println("Country not found,Please implement !");
		}
	}

	// Big and cotton tees
	public void firstShirtItem() {
		EbaySearchResultLocatorsObj.BCottonTeesItems.click();
	}

}
