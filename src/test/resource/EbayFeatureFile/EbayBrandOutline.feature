@regression @smoke
Feature: Ebay Brand OUtline
Description: User should able to filter items by Brand
Background: 
Given Open Ebay Homepage 
Scenario Outline:Filter items by Brand
Given Search for "<Items>"
When Filter by "<Brand>"
Then Item list should have prouduct of "<brand>"
Examples: 
          |Items |Brand     |
          |Shoes |Nike      |
          |Shirts |Adidas   |
          |Pants |Unbranded |
          
       

