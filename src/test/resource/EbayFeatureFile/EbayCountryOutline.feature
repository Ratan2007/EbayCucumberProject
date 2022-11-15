@regression @smoke 
Feature: Ebay Country Outline 
	Description: User should able to filter items by Country
Background: 
	Given Open Ebay Homepage 
Scenario Outline: Filter items by country
	Given Search for "<Items>" 
	When Region of Manufacture "<Country>" 
	Then Item list should from "<Country>" 
	Examples: 
		|Items |Country       |
		|Shoes |China         |
		|Shirts|Bangladesh    |
		|Pants |United States |