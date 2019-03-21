/**
 * 
 */
describe('Verify weather details of a city entered by the user', function(){
	
	var obj=require("./ObjectRepo/tc2_ObjRepo.js");
	var data=require("./DataRepo/tc2_DataDrive.js");
	var commondata=require("./DataRepo/commonDataDrive.js");
	var commonobj=require("./ObjectRepo/commonObjRepo.js");
	//Kept for multiple iterations if required
	var using = require('jasmine-data-provider');
	
	beforeEach(function(){
		commonobj.getURL(commondata.datadrive.URL);
	});
	
	it('Verify No Weather details is found if user enters an invalid city name', function(){
		
		obj.searchBoxforCityEntry.sendKeys(commonobj.invalidCityName(5));
		obj.searchButtonForCity.click();
		
		/**
		 * Validation for invalid city
		 */
		expect(obj.cityNotFoundError.isPresent()).toBe(true);
		
	})
	
	it('Verify proper Weather details is found if user enters a valid city name', function(){
		
		obj.searchBoxforCityEntry.sendKeys(data.tc2_datadrive.validCityName);
		obj.searchButtonForCity.click();
		obj.actualCityFound.click();
		
		/**
		 * Validation for valid city for Weather & Temparature details
		 */
		
		expect(obj.weatherWidgetHeader.isPresent()).toBe(true);
		expect(obj.weatherWidgetTempDetails.isPresent()).toBe(true);
		expect(obj.foreCastHeader.isPresent()).toBe(true);
		
	})
	
})