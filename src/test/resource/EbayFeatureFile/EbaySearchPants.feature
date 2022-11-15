@regression @smoke
Feature: Ebay Search Pants Functionality

	Scenario: Ebay Search for Pants
		Given Open Ebay Homepage
		When Search for Pants
		Then Item list should have only pants related products
		
		