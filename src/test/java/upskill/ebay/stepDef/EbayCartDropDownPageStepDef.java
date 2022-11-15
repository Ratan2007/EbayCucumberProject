package upskill.ebay.stepDef;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import upskill.ebay.pageAction.EbayCartDropDownPageActions;

public class EbayCartDropDownPageStepDef {
	EbayCartDropDownPageActions EbayCartDropDownPageActionsObj = new EbayCartDropDownPageActions();

	@When("^Select Size$")
	public void select_Size() throws Throwable {
		EbayCartDropDownPageActionsObj.switchNewWindow();
		EbayCartDropDownPageActionsObj.selectSize();
	}

	@When("^Select Men Size$")
	public void select_Men_Size() throws Throwable {
		EbayCartDropDownPageActionsObj.selectMenSize();
	}

	@When("^Select Shade$")
	public void select_Shade() throws Throwable {
		EbayCartDropDownPageActionsObj.selectShade();
	}

	@When("^Select Quantity$")
	public void select_Quantity() throws Throwable {
		EbayCartDropDownPageActionsObj.inputQuantity();
	}

	@Then("^Add to shoppint Cart$")
	public void add_to_shoppint_Cart() throws Throwable {
		EbayCartDropDownPageActionsObj.clickAddToCart();
	}

}
