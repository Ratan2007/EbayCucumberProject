package upskill.ebay.stepDef;

import cucumber.api.java.en.Then;
import upskill.ebay.pageAction.EbayElectornicsPageActions;

public class EbayElectronicsPageStepDef {

	EbayElectornicsPageActions EbayElectornicsPageActionsObj = new EbayElectornicsPageActions();

	@Then("^Item list should have only electronics related products$")
	public void item_list_should_have_only_electronics_related_products() throws Throwable {
		EbayElectornicsPageActionsObj.VerifyViewElectronicsPage();
	}

}
