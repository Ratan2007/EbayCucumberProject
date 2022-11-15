package upskill.ebay.stepDef;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import upskill.ebay.pageAction.EbaySearchResultActions;

public class EbaySearchResultsSteps {

	EbaySearchResultActions EbaySearchResultActionsObj = new EbaySearchResultActions();

	@Then("^Item list should have only shoes related products$")
	public void item_list_should_have_only_shoes_related_products() throws Throwable {
		EbaySearchResultActionsObj.verifyShoesItems();
	}

	@When("^Region of Manufacture \"([^\"]*)\"$")
	public void region_of_Manufacture(String country) throws Throwable {
		EbaySearchResultActionsObj.filterCountry(country);
	}

	@Then("^Item list should from \"([^\"]*)\"$")
	public void item_list_should_from(String country) throws Throwable {
		EbaySearchResultActionsObj.verifyItemsByCountry(country);
	}

	@When("^Filter by \"([^\"]*)\"$")
	public void filter_by(String brand) throws Throwable {
		EbaySearchResultActionsObj.filterBrand(brand);

	}

	@Then("^Item list should have prouduct of \"([^\"]*)\"$")
	public void item_list_should_have_prouduct_of(String brand) throws Throwable {
		EbaySearchResultActionsObj.verifyBrandsItems(brand);
	}

//Big and Tall
	@When("^Select the first shirt on item list$")
	public void select_the_first_shirt_on_item_list() throws Throwable {
		EbaySearchResultActionsObj.firstShirtItem();
	}

}
