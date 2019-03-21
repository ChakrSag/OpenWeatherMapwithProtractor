/**
 * 
 */
function tc3(){
	this.sentinelOpenweatherAPIStartButton=element(by.xpath("(//a[contains(text(),'How to start')])[1]"));
	this.moveToAgroMonitoringStartButton=element(by.xpath("//a[contains(text(),'Move to agromonitoring.com')]"));
	this.AgroAPIDocumentationPage=element(by.xpath("//h3[contains(text(),'Sign up and get an API key ')]"));
	this.AgroAPISatelliteImgHeader=element(by.css("div.agro-mainpage-banner__layout p"));
	this.getWindowCount=function windowCount (count) {
	    return function () {
	        return browser.getAllWindowHandles().then(function (handles) {
	            return handles.length === count;
	        });
	    };
	}; 
};

module.exports = new tc3();