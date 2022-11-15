package upskill.ebay.stepDef;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import upskill.ebay.pageAction.EbayHomePageActions;

public class EbayHomePageSteps {
	EbayHomePageActions EbayHomePageActionsObj = new EbayHomePageActions();

	@Given("^Search for big tall cotton tee$")
	public void search_for_big_tall_cotton_tee() throws Throwable {
		EbayHomePageActionsObj.searchForBigTall();
	}

	@Given("^Search for Shirt$")
	public void search_for_Shirt() throws Throwable {
		EbayHomePageActionsObj.searchShirts();
	}

	@Given("^Open Ebay Homepage$")
	public void open_Ebay_Homepage() throws Throwable {
		System.out.println("Home page");
	}

	@Given("^Search for \"([^\"]*)\"$")
	public void search_for(String Items) throws Throwable {
		EbayHomePageActionsObj.searchItems(Items);
	}

	@When("^Click on Electronics$")
	public void click_on_Electronics() throws Throwable {
		EbayHomePageActionsObj.clickbtnElectronics();
	}

	@When("^Search for Pants$")
	public void search_for_Pants() throws Throwable {
		// EbayHomePageActionsObj.searchPants();
		EbayHomePageActionsObj.searchPantsFromExel();
	}

	@When("^Search for Shoes$")
	public void search_for_Shoes() throws Throwable {
		EbayHomePageActionsObj.searchShoes();
	}

	@When("^Mouse Hover to MyEbay Summary$")
	public void mouse_Hover_to_MyEbay_Summary() throws Throwable {
		EbayHomePageActionsObj.mouseHoverMyEbay();
	}

	@Then("^Click on Summary$")
	public void click_on_Summary() throws Throwable {
		EbayHomePageActionsObj.clickSummary();
	}

	@When("^Click on Toy$")
	public void click_on_Toy() throws Throwable {
		EbayHomePageActionsObj.clickbtnToy();
	}

}
