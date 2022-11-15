@regression @smoke
Feature: Ebay Search Shoes Functionality

	Scenario: Ebay Search for Shoes
		Given Open Ebay Homepage
		When Search for Shoes
		Then Item list should have only shoes related products
		
		