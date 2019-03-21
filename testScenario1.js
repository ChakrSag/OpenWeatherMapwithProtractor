/**
 * 
 */

describe('Verify whether all Links & Labels are present in OpenWeatherMap home page', function(){
	
	var obj=require("./ObjectRepo/tc1_ObjRepo.js");
	var data=require("./DataRepo/tc1_DataDrive.js");
	var commondata=require("./DataRepo/commonDataDrive.js");
	var commonobj=require("./ObjectRepo/commonObjRepo.js");
	//Kept for multiple iterations if required
	var using = require('jasmine-data-provider');
	//var originalTimeout;
	
	beforeEach(function(){
		/*originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000000000000000000;*/
		commonobj.getURL(commondata.datadrive.URL);
	});
		/**
		 * Test presence of all
		 * Navigable pages
		 */
		
	it('Verify Weather Header is present in the OpenWeatherMap homepage', function(){
		expect(obj.firstNavbarText.getText()).toEqual(data.tc1_datadrive.firstHeaderLink);
	})
	
	it('Verify Maps Header is present in the OpenWeatherMap homepage', function(){
		expect(obj.secondNavbarText.getText()).toEqual(data.tc1_datadrive.secondHeaderLink);
	})
		
	it('Verify Guide Header is present in the OpenWeatherMap homepage', function(){
		expect(obj.thirdNavbarText.getText()).toEqual(data.tc1_datadrive.thirdHeaderLink);
	})	
		
	it('Verify API Header is present in the OpenWeatherMap homepage', function(){
		expect(obj.fourthNavbarText.getText()).toEqual(data.tc1_datadrive.fourthHeaderLink);
	})	
		
	it('Verify Price Header is present in the OpenWeatherMap homepage', function(){
		expect(obj.fifthNavbarText.getText()).toEqual(data.tc1_datadrive.fifthHeaderLink);
	})		
		
	it('Verify Partners Header is present in the OpenWeatherMap homepage', function(){
		expect(obj.sixthNavbarText.getText()).toEqual(data.tc1_datadrive.sixthHeaderLink);
	})	
		
	it('Verify Stations Header is present in the OpenWeatherMap homepage', function(){
		expect(obj.seventhNavbarText.getText()).toEqual(data.tc1_datadrive.seventhHeaderLink);
	})	
		
	it('Verify Widgets Header is present in the OpenWeatherMap homepage', function(){
		expect(obj.eighthNavbarText.getText()).toEqual(data.tc1_datadrive.eighthHeaderLink);
	})		
		
	it('Verify Blog Header is present in the OpenWeatherMap homepage', function(){
		expect(obj.ninthNavbarText.getText()).toEqual(data.tc1_datadrive.ninthHeaderLink);
	})	

		/**
		 * Test presence of all
		 * User Specific Buttons
		 * in the header
		 */
	it('Verify Application Sign In button is present in the OpenWeatherMap homepage', function(){
		expect(obj.signInButtonTop.getText()).toEqual(data.tc1_datadrive.signInButtonText);
	})
		
	it('Verify Application Sign Up button is present in the OpenWeatherMap homepage', function(){
		expect(obj.signUpButtonTop.getText()).toEqual(data.tc1_datadrive.signUpButtonText);
	})	
		
	it('Verify Weather in your city search box is present in the OpenWeatherMap homepage', function(){
		expect(obj.weatherInCitySearchBox.getText()).toEqual(data.tc1_datadrive.weatherInCitySearchBox);
	})	
		/**
		 * Check whether Current Location Button is getting shown
		 */
	it('Verify Current Location Button is present in the OpenWeatherMap homepage', function(){
		expect(obj.currentLocationButton.getText()).toEqual(data.tc1_datadrive.currentLocationButton);
	})	

		/**
		 * Check whether Weather Maps 2 Header is getting shown
		 */
	it('Verify Weather Maps 2.0 header is present in the OpenWeatherMap homepage', function(){
		expect(obj.weatherMapsTwoHeader.getText()).toEqual(data.tc1_datadrive.weatherMapstwoAPIHeader);
	})	
	
		/**
		 * Verify link to Navigate to Support Centre
		 */
	it('Verify Support Centre link is present in the OpenWeatherMap homepage footer', function(){
		expect(obj.supportCentreLink.getText()).toEqual(data.tc1_datadrive.supportCentreLink);
	})	
		
		
		/**
		 * Test presence of OpenWeatherMap logo
		 */
	it('Verify OpenWeatherMap logo is present in the OpenWeatherMap homepage', function(){
		expect(obj.openWeatherMapImg.isPresent()).toBe(true);
	})	
		
		
	/*	obj.openWeatherMapImg.isDisplayed().then(function (isVisible) {
		    if (isVisible) {
		        // element is visible
		    } else {
		        // element is not visible
		    }
		});*/
		

})