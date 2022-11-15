@regression@smoke 
Feature: Ebay cart Drop Down Functionality 

	Description: User should able to add Item in cart

Backround: Given Open Ebay Homepage

Scenario: Ebay cart functionality 
	Given Search for big tall cotton tee 
	When Select the first shirt on item list 
	And Select Size 
	And Select Men Size 
	And Select Shade 
	And Select Quantity 
	Then Add to shoppint Cart 
