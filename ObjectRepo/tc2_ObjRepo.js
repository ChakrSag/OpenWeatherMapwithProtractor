/**
 * 
 */

function tc2(){
	this.searchBoxforCityEntry=element(by.css("input#q:nth-child(2)"));
	this.searchButtonForCity=element(by.css("button[class='btn btn-orange']"));
	this.cityNotFoundError=element(by.xpath("//div[@class='alert alert-warning' and contains(text(),'Not found')]"));
	this.actualCityFound=element(by.xpath("//div[@id='forecast_list_ul']//td[2]//b/a"));
	this.weatherWidgetHeader=element(by.css("div#weather-widget h2"));
	this.weatherWidgetTempDetails=element(by.css("div#weather-widget h3"));
	this.foreCastHeader=element(by.css("div.weather-forecast-hourly-graphic h2"));
};

module.exports = new tc2();