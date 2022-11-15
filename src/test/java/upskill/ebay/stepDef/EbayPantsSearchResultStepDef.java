package upskill.ebay.stepDef;

import cucumber.api.java.en.Then;
import upskill.ebay.pageAction.EbayPantsSearchPageActions;

public class EbayPantsSearchResultStepDef {

	EbayPantsSearchPageActions EbayPantsSearchPageActionsObj = new EbayPantsSearchPageActions();

	@Then("^Item list should have only pants related products$")
	public void item_list_should_have_only_pants_related_products() throws Throwable {
		EbayPantsSearchPageActionsObj.verifySearchPants();
	}

}
