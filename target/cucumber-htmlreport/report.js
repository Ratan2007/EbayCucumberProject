$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("EbayBrandOutline.feature");
formatter.feature({
  "line": 2,
  "name": "Ebay Brand OUtline",
  "description": "Description: User should able to filter items by Brand",
  "id": "ebay-brand-outline",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Filter items by Brand",
  "description": "",
  "id": "ebay-brand-outline;filter-items-by-brand",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "Search for \"\u003cItems\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Filter by \"\u003cBrand\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Item list should have prouduct of \"\u003cbrand\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "ebay-brand-outline;filter-items-by-brand;",
  "rows": [
    {
      "cells": [
        "Items",
        "Brand"
      ],
      "line": 11,
      "id": "ebay-brand-outline;filter-items-by-brand;;1"
    },
    {
      "cells": [
        "Shoes",
        "Nike"
      ],
      "line": 12,
      "id": "ebay-brand-outline;filter-items-by-brand;;2"
    },
    {
      "cells": [
        "Shirts",
        "Adidas"
      ],
      "line": 13,
      "id": "ebay-brand-outline;filter-items-by-brand;;3"
    },
    {
      "cells": [
        "Pants",
        "Unbranded"
      ],
      "line": 14,
      "id": "ebay-brand-outline;filter-items-by-brand;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2256610700,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "EbayHomePageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 959003500,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Filter items by Brand",
  "description": "",
  "id": "ebay-brand-outline;filter-items-by-brand;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Search for \"Shoes\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Filter by \"Nike\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Item list should have prouduct of \"\u003cbrand\u003e\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Shoes",
      "offset": 12
    }
  ],
  "location": "EbayHomePageSteps.search_for(String)"
});
formatter.result({
  "duration": 4467208500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nike",
      "offset": 11
    }
  ],
  "location": "EbaySearchResultsSteps.filter_by(String)"
});
formatter.result({
  "duration": 2538929300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cbrand\u003e",
      "offset": 35
    }
  ],
  "location": "EbaySearchResultsSteps.item_list_should_have_prouduct_of(String)"
});
formatter.result({
  "duration": 321200,
  "status": "passed"
});
formatter.after({
  "duration": 278139700,
  "status": "passed"
});
formatter.before({
  "duration": 1786529100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "EbayHomePageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 65056300,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Filter items by Brand",
  "description": "",
  "id": "ebay-brand-outline;filter-items-by-brand;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Search for \"Shirts\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Filter by \"Adidas\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Item list should have prouduct of \"\u003cbrand\u003e\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Shirts",
      "offset": 12
    }
  ],
  "location": "EbayHomePageSteps.search_for(String)"
});
formatter.result({
  "duration": 5283225400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adidas",
      "offset": 11
    }
  ],
  "location": "EbaySearchResultsSteps.filter_by(String)"
});
formatter.result({
  "duration": 3525648600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cbrand\u003e",
      "offset": 35
    }
  ],
  "location": "EbaySearchResultsSteps.item_list_should_have_prouduct_of(String)"
});
formatter.result({
  "duration": 133600,
  "status": "passed"
});
formatter.after({
  "duration": 293505900,
  "status": "passed"
});
formatter.before({
  "duration": 2156638700,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "EbayHomePageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 76493900,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Filter items by Brand",
  "description": "",
  "id": "ebay-brand-outline;filter-items-by-brand;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Search for \"Pants\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Filter by \"Unbranded\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Item list should have prouduct of \"\u003cbrand\u003e\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Pants",
      "offset": 12
    }
  ],
  "location": "EbayHomePageSteps.search_for(String)"
});
formatter.result({
  "duration": 4082186100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Unbranded",
      "offset": 11
    }
  ],
  "location": "EbaySearchResultsSteps.filter_by(String)"
});
formatter.result({
  "duration": 3169263600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cbrand\u003e",
      "offset": 35
    }
  ],
  "location": "EbaySearchResultsSteps.item_list_should_have_prouduct_of(String)"
});
formatter.result({
  "duration": 79800,
  "status": "passed"
});
formatter.after({
  "duration": 273613000,
  "status": "passed"
});
formatter.uri("EbayCartDorpDownCart.feature");
formatter.feature({
  "line": 2,
  "name": "Ebay cart Drop Down Functionality",
  "description": "\r\nDescription: User should able to add Item in cart\r\n\r\nBackround: Given Open Ebay Homepage",
  "id": "ebay-cart-drop-down-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "duration": 1757726500,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Ebay cart functionality",
  "description": "",
  "id": "ebay-cart-drop-down-functionality;ebay-cart-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "Search for big tall cotton tee",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Select the first shirt on item list",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Select Size",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Select Men Size",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Select Shade",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Select Quantity",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Add to shoppint Cart",
  "keyword": "Then "
});
formatter.match({
  "location": "EbayHomePageSteps.search_for_big_tall_cotton_tee()"
});
formatter.result({
  "duration": 2932893800,
  "status": "passed"
});
formatter.match({
  "location": "EbaySearchResultsSteps.select_the_first_shirt_on_item_list()"
});
formatter.result({
  "duration": 713861100,
  "status": "passed"
});
formatter.match({
  "location": "EbayCartDropDownPageStepDef.select_Size()"
});
formatter.result({
  "duration": 4786921400,
  "status": "passed"
});
formatter.match({
  "location": "EbayCartDropDownPageStepDef.select_Men_Size()"
});
formatter.result({
  "duration": 3671514900,
  "status": "passed"
});
formatter.match({
  "location": "EbayCartDropDownPageStepDef.select_Shade()"
});
formatter.result({
  "duration": 2217362000,
  "status": "passed"
});
formatter.match({
  "location": "EbayCartDropDownPageStepDef.select_Quantity()"
});
formatter.result({
  "duration": 144945600,
  "status": "passed"
});
formatter.match({
  "location": "EbayCartDropDownPageStepDef.add_to_shoppint_Cart()"
});
formatter.result({
  "duration": 116179900,
  "status": "passed"
});
formatter.after({
  "duration": 1247875700,
  "status": "passed"
});
formatter.uri("EbayCountryOutline.feature");
formatter.feature({
  "line": 2,
  "name": "Ebay Country Outline",
  "description": "Description: User should able to filter items by Country",
  "id": "ebay-country-outline",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Filter items by country",
  "description": "",
  "id": "ebay-country-outline;filter-items-by-country",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "Search for \"\u003cItems\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Region of Manufacture \"\u003cCountry\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Item list should from \"\u003cCountry\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "ebay-country-outline;filter-items-by-country;",
  "rows": [
    {
      "cells": [
        "Items",
        "Country"
      ],
      "line": 11,
      "id": "ebay-country-outline;filter-items-by-country;;1"
    },
    {
      "cells": [
        "Shoes",
        "China"
      ],
      "line": 12,
      "id": "ebay-country-outline;filter-items-by-country;;2"
    },
    {
      "cells": [
        "Shirts",
        "Bangladesh"
      ],
      "line": 13,
      "id": "ebay-country-outline;filter-items-by-country;;3"
    },
    {
      "cells": [
        "Pants",
        "United States"
      ],
      "line": 14,
      "id": "ebay-country-outline;filter-items-by-country;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1896344400,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "EbayHomePageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 59784000,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Filter items by country",
  "description": "",
  "id": "ebay-country-outline;filter-items-by-country;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Search for \"Shoes\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Region of Manufacture \"China\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Item list should from \"China\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Shoes",
      "offset": 12
    }
  ],
  "location": "EbayHomePageSteps.search_for(String)"
});
formatter.result({
  "duration": 4171218200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "China",
      "offset": 23
    }
  ],
  "location": "EbaySearchResultsSteps.region_of_Manufacture(String)"
});
formatter.result({
  "duration": 71961000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"s0-51-12-0-1-2-6-0-2[1]-4[5]-3\"]\"}\n  (Session info: chrome\u003d107.0.5304.88)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027RATAN\u0027, ip: \u0027192.168.68.53\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.88, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: C:\\Users\\SKRAT\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:55588}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 4c2949b7e34e1f65773a1fc9bb2bb1c5\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"s0-51-12-0-1-2-6-0-2[1]-4[5]-3\"]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:419)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy22.click(Unknown Source)\r\n\tat upskill.ebay.pageAction.EbaySearchResultActions.filterCountry(EbaySearchResultActions.java:53)\r\n\tat upskill.ebay.stepDef.EbaySearchResultsSteps.region_of_Manufacture(EbaySearchResultsSteps.java:18)\r\n\tat ✽.When Region of Manufacture \"China\"(EbayCountryOutline.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "China",
      "offset": 23
    }
  ],
  "location": "EbaySearchResultsSteps.item_list_should_from(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1051748800,
  "status": "passed"
});
formatter.before({
  "duration": 1786315800,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "EbayHomePageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 71963200,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Filter items by country",
  "description": "",
  "id": "ebay-country-outline;filter-items-by-country;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Search for \"Shirts\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Region of Manufacture \"Bangladesh\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Item list should from \"Bangladesh\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Shirts",
      "offset": 12
    }
  ],
  "location": "EbayHomePageSteps.search_for(String)"
});
formatter.result({
  "duration": 5272661900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bangladesh",
      "offset": 23
    }
  ],
  "location": "EbaySearchResultsSteps.region_of_Manufacture(String)"
});
formatter.result({
  "duration": 2981620200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bangladesh",
      "offset": 23
    }
  ],
  "location": "EbaySearchResultsSteps.item_list_should_from(String)"
});
formatter.result({
  "duration": 68766800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"s0-51-12-6-3-4[0]-3-1-1-list\"]/li/div/a/div\"}\n  (Session info: chrome\u003d107.0.5304.88)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027RATAN\u0027, ip: \u0027192.168.68.53\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.88, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: C:\\Users\\SKRAT\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:55662}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: a48a68d69362ed44f85ee62b853eb789\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"s0-51-12-6-3-4[0]-3-1-1-list\"]/li/div/a/div}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:419)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy22.isDisplayed(Unknown Source)\r\n\tat upskill.ebay.pageAction.EbaySearchResultActions.verifyItemsByCountry(EbaySearchResultActions.java:70)\r\n\tat upskill.ebay.stepDef.EbaySearchResultsSteps.item_list_should_from(EbaySearchResultsSteps.java:23)\r\n\tat ✽.Then Item list should from \"Bangladesh\"(EbayCountryOutline.feature:9)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1158777200,
  "status": "passed"
});
formatter.before({
  "duration": 1833988800,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "EbayHomePageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 67888700,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Filter items by country",
  "description": "",
  "id": "ebay-country-outline;filter-items-by-country;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Search for \"Pants\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Region of Manufacture \"United States\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Item list should from \"United States\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Pants",
      "offset": 12
    }
  ],
  "location": "EbayHomePageSteps.search_for(String)"
});
formatter.result({
  "duration": 3931169800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United States",
      "offset": 23
    }
  ],
  "location": "EbaySearchResultsSteps.region_of_Manufacture(String)"
});
formatter.result({
  "duration": 2849900300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United States",
      "offset": 23
    }
  ],
  "location": "EbaySearchResultsSteps.item_list_should_from(String)"
});
formatter.result({
  "duration": 462337000,
  "status": "passed"
});
formatter.after({
  "duration": 546717600,
  "status": "passed"
});
formatter.uri("EbayElectronicsPage.feature");
formatter.feature({
  "line": 2,
  "name": "Ebay Electronics Page Functionality",
  "description": "",
  "id": "ebay-electronics-page-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "duration": 1963238100,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Ebay Electronics Page View",
  "description": "",
  "id": "ebay-electronics-page-functionality;ebay-electronics-page-view",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Click on Electronics",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Item list should have only electronics related products",
  "keyword": "Then "
});
formatter.match({
  "location": "EbayHomePageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 111959400,
  "status": "passed"
});
formatter.match({
  "location": "EbayHomePageSteps.click_on_Electronics()"
});
formatter.result({
  "duration": 2830692500,
  "status": "passed"
});
formatter.match({
  "location": "EbayElectronicsPageStepDef.item_list_should_have_only_electronics_related_products()"
});
formatter.result({
  "duration": 7665101400,
  "status": "passed"
});
formatter.after({
  "duration": 282967100,
  "status": "passed"
});
formatter.uri("EbaySearchPants.feature");
formatter.feature({
  "line": 2,
  "name": "Ebay Search Pants Functionality",
  "description": "",
  "id": "ebay-search-pants-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "duration": 1709957000,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Ebay Search for Pants",
  "description": "",
  "id": "ebay-search-pants-functionality;ebay-search-for-pants",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Search for Pants",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Item list should have only pants related products",
  "keyword": "Then "
});
formatter.match({
  "location": "EbayHomePageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 72300200,
  "status": "passed"
});
formatter.match({
  "location": "EbayHomePageSteps.search_for_Pants()"
});
formatter.result({
  "duration": 3901508300,
  "status": "passed"
});
formatter.match({
  "location": "EbayPantsSearchResultStepDef.item_list_should_have_only_pants_related_products()"
});
formatter.result({
  "duration": 799501300,
  "status": "passed"
});
formatter.after({
  "duration": 372582700,
  "status": "passed"
});
formatter.uri("EbaySearchShoes.feature");
formatter.feature({
  "line": 2,
  "name": "Ebay Search Shoes Functionality",
  "description": "",
  "id": "ebay-search-shoes-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "duration": 1908144800,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Ebay Search for Shoes",
  "description": "",
  "id": "ebay-search-shoes-functionality;ebay-search-for-shoes",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Search for Shoes",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Item list should have only shoes related products",
  "keyword": "Then "
});
formatter.match({
  "location": "EbayHomePageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 73101800,
  "status": "passed"
});
formatter.match({
  "location": "EbayHomePageSteps.search_for_Shoes()"
});
formatter.result({
  "duration": 4198107400,
  "status": "passed"
});
formatter.match({
  "location": "EbaySearchResultsSteps.item_list_should_have_only_shoes_related_products()"
});
formatter.result({
  "duration": 372795800,
  "status": "passed"
});
formatter.after({
  "duration": 342309400,
  "status": "passed"
});
formatter.uri("EbaySummaryMouseHover.feature");
formatter.feature({
  "line": 2,
  "name": "Ebay Summary Mousehover",
  "description": "",
  "id": "ebay-summary-mousehover",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 2018327400,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Ebay Summay Mousehover",
  "description": "",
  "id": "ebay-summary-mousehover;ebay-summay-mousehover",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Mouse Hover to MyEbay Summary",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Click on Summary",
  "keyword": "Then "
});
formatter.match({
  "location": "EbayHomePageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 79918200,
  "status": "passed"
});
formatter.match({
  "location": "EbayHomePageSteps.mouse_Hover_to_MyEbay_Summary()"
});
formatter.result({
  "duration": 4111517800,
  "status": "passed"
});
formatter.match({
  "location": "EbayHomePageSteps.click_on_Summary()"
});
formatter.result({
  "duration": 4100525900,
  "status": "passed"
});
formatter.after({
  "duration": 327607900,
  "status": "passed"
});
formatter.uri("EbayToyPage.feature");
formatter.feature({
  "line": 2,
  "name": "Ebay Toy Page Functionality",
  "description": "",
  "id": "ebay-toy-page-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "duration": 1813793800,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Ebay Toy Page View",
  "description": "",
  "id": "ebay-toy-page-functionality;ebay-toy-page-view",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open Ebay Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Click on Toy",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Item list should have only toy related products",
  "keyword": "Then "
});
formatter.match({
  "location": "EbayHomePageSteps.open_Ebay_Homepage()"
});
formatter.result({
  "duration": 77098200,
  "status": "passed"
});
formatter.match({
  "location": "EbayHomePageSteps.click_on_Toy()"
});
formatter.result({
  "duration": 2557517900,
  "status": "passed"
});
formatter.match({
  "location": "EbayToyPageStepDef.item_list_should_have_only_toy_related_products()"
});
formatter.result({
  "duration": 3068831400,
  "status": "passed"
});
formatter.after({
  "duration": 340863100,
  "status": "passed"
});
formatter.uri("EmployeeApiTesting.feature");
formatter.feature({
  "line": 2,
  "name": "App user should able to create, update, get and delete employee details",
  "description": "",
  "id": "app-user-should-able-to-create,-update,-get-and-delete-employee-details",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@apitesting"
    }
  ]
});
formatter.before({
  "duration": 1915404500,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Upskill multiple employee records",
  "description": "",
  "id": "app-user-should-able-to-create,-update,-get-and-delete-employee-details;upskill-multiple-employee-records",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "Create new employee record",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Update employee record",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Get all employee data",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Get single employee data by id",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Delete employee record",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 275495400,
  "status": "passed"
});
formatter.uri("RahulShettyIframe.feature");
formatter.feature({
  "line": 2,
  "name": "Rahul Shetty iframe practice",
  "description": "",
  "id": "rahul-shetty-iframe-practice",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 1870154400,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Iframe Practice",
  "description": "",
  "id": "rahul-shetty-iframe-practice;iframe-practice",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open Shetty Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Click on iFrame Home",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "It should reload iframe homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "ShettyHomepageStepDef.open_Shetty_Homepage()"
});
formatter.result({
  "duration": 7997619900,
  "status": "passed"
});
formatter.match({
  "location": "ShettyHomepageStepDef.click_on_iFrame_Home()"
});
formatter.result({
  "duration": 69713000,
  "status": "passed"
});
formatter.match({
  "location": "ShettyHomepageStepDef.it_should_reload_iframe_homepage()"
});
formatter.result({
  "duration": 5083708500,
  "status": "passed"
});
formatter.after({
  "duration": 212675800,
  "status": "passed"
});
});