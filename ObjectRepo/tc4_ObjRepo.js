/**
 * 
 */
function tc4(){
	this.weatherAPIForDevelopersTryButton=element(by.xpath("//a[contains(text(),'Try Free APIs')]"));
	this.connectStationtoOpenWeatherMapButton=element(by.xpath("//a[contains(text(),'Connect')]"));
	this.currentWeatherDataHeader=element(by.xpath("//h3[contains(text(),'Current weather data')]"));
	this.urOpenWeatherMapPageAppear=element(by.xpath("//h2/section"));
};

module.exports = new tc4();