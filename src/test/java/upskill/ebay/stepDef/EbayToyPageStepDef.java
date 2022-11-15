package upskill.ebay.stepDef;

import cucumber.api.java.en.Then;
import upskill.ebay.pageAction.EbayToyPageActions;

public class EbayToyPageStepDef {
	EbayToyPageActions EbayToyPageActionsObj = new EbayToyPageActions();

	@Then("^Item list should have only toy related products$")
	public void item_list_should_have_only_toy_related_products() throws Throwable {
		EbayToyPageActionsObj.verifyToyPage();
	}

}
