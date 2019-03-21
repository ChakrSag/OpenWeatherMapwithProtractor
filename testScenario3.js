/**
 * 
 */
describe('Verify navigation to Sentinel-2 API and Agriculture API is successful', function(){
	
	var obj=require("./ObjectRepo/tc3_ObjRepo.js");
	var data=require("./DataRepo/tc3_DataDrive.js");
	var commondata=require("./DataRepo/commonDataDrive.js");
	var commonobj=require("./ObjectRepo/commonObjRepo.js");
	//Kept for multiple iterations if required
	var using = require('jasmine-data-provider');
	
	beforeEach(function(){
		commonobj.getURL(commondata.datadrive.URL);
	});
	
	it('Verify upon starting Sentinel-2 API user is navigating to Agro API Home page', function(){
		//obj.sentinelOpenweatherAPIStartButton.click();
		browser.executeScript("arguments[0].click();", obj.sentinelOpenweatherAPIStartButton);
		browser.wait(obj.getWindowCount(2), 20000);
		browser.getAllWindowHandles().then(function(handles){
		    browser.switchTo().window(handles[1]).then(function(){
		    	//expect(obj.AgroAPIDocumentationPage.isPresent()).toBe(true);
		    	browser.ignoreSynchronization = true;
		    	expect(browser.getCurrentUrl()).toEqual(data.tc3_datadrive.AgroAPIDocumentationURL);
		    });
		});
	})
	
	it('Verify upon starting Agriculture API user is navigating to Agro API Satellite Image page', function(){
		//obj.moveToAgroMonitoringStartButton.click();
		browser.executeScript("arguments[0].click();", obj.moveToAgroMonitoringStartButton);
		browser.wait(obj.getWindowCount(2), 20000);
		browser.getAllWindowHandles().then(function(handles){
		    browser.switchTo().window(handles[1]).then(function(){
		    	//expect(obj.AgroAPISatelliteImgHeader.isPresent()).toBe(true);
		    	browser.ignoreSynchronization = true;
		    	expect(browser.getCurrentUrl()).toEqual(data.tc3_datadrive.AgroMAPURL);
		    });
		});
	})
})