package upskill.ebay.stepDef;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import upskill.api.restAssured.EmployeeRestAssuredActions;

public class EmployeeRestAssuredSteps {
	EmployeeRestAssuredActions EmployeeRestAssuredActionsObj = new EmployeeRestAssuredActions();

	@Given("^Create new employee record$")
	public void create_new_employee_record() throws Throwable {
		EmployeeRestAssuredActionsObj.createNewEmployeeRecord();

	}

	@Given("^Update employee record$")
	public void update_employee_record() throws Throwable {
		EmployeeRestAssuredActionsObj.updateEmployeeRecord();

	}

	@When("^Get all employee data$")
	public void get_all_employee_data() throws Throwable {
		EmployeeRestAssuredActionsObj.getAllEmployeeData();

	}

	@Then("^Get single employee data by id$")
	public void get_single_employee_data_by_id() throws Throwable {
		EmployeeRestAssuredActionsObj.getSingleEmployeeDataById();

	}

	@Then("^Delete employee record$")
	public void delete_employee_record() throws Throwable {
		EmployeeRestAssuredActionsObj.deleteEmployeeRecord();

	}
}
