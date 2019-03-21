/**
 * 
 */

describe('Verify user is able to navigate to Weather for API Developers and connect to personal weather station', function(){

	var obj=require("./ObjectRepo/tc4_ObjRepo.js");
	var data=require("./DataRepo/tc4_DataDrive.js");
	var commondata=require("./DataRepo/commonDataDrive.js");
	var commonobj=require("./ObjectRepo/commonObjRepo.js");
	//Kept for multiple iterations if required
	var using = require('jasmine-data-provider');
	
	beforeEach(function(){
		commonobj.getURL(commondata.datadrive.URL);
	});
	
	it('Verify user is able to navigate to Weather for API Developers', function(){
		
		browser.executeScript("arguments[0].click();", obj.weatherAPIForDevelopersTryButton);
		/**
		 * Validation for Weather for API developers page
		 */
		expect(obj.currentWeatherDataHeader.isPresent()).toBe(true);
		
	})
	
	it('Verify user is able to navigate to your personal weather station', function(){
		
		browser.executeScript("arguments[0].click();", obj.connectStationtoOpenWeatherMapButton);
		/**
		 * Validation for Weather for API developers page
		 */
		expect(obj.urOpenWeatherMapPageAppear.isPresent()).toBe(true);
		
	})
	
})
