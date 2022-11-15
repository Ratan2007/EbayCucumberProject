@regression @smoke
Feature: Ebay Electronics Page Functionality

	Scenario: Ebay Electronics Page View
		Given Open Ebay Homepage
		When Click on Electronics
		Then Item list should have only electronics related products