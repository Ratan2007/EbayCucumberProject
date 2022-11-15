@regression @smoke
Feature: Ebay Toy Page Functionality

	Scenario: Ebay Toy Page View
		Given Open Ebay Homepage
		When Click on Toy
		Then Item list should have only toy related products