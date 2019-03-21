/**
 * 
 */

function tc1(){
	
	this.firstNavbarText=element(by.xpath("//li[@class='nav__item']//a[contains(text(),'Weather')]"));
	this.secondNavbarText=element(by.xpath("//li[@class='nav__item dropdown']//a[contains(text(),'Maps')]"));
	this.thirdNavbarText=element(by.xpath("//li[@class='nav__item']//a[contains(text(),'Guide')]"));
	this.fourthNavbarText=element(by.xpath("//li[@class='nav__item']//a[contains(text(),'API')]"));
	this.fifthNavbarText=element(by.xpath("//li[@class='nav__item']//a[contains(text(),'Price')]"));
	this.sixthNavbarText=element(by.xpath("//li[@class='nav__item']//a[contains(text(),'Partners')]"));
	this.seventhNavbarText=element(by.xpath("//li[@class='nav__item']//a[contains(text(),'Stations')]"));
	this.eighthNavbarText=element(by.xpath("//li[@class='nav__item']//a[contains(text(),'Widgets')]"));
	this.ninthNavbarText=element(by.xpath("//li[@class='nav__item']//a[contains(text(),'Blog')]"));
	this.signInButtonTop=element(by.xpath("(//a[contains(text(),'Sign In')])[1]"));
	this.signUpButtonTop=element(by.xpath("(//a[contains(text(),'Sign Up')])[1]"));
	this.weatherInCitySearchBox=element(by.xpath("//a[contains(text(),' Weather in your city')]"));
	this.openWeatherMapImg=element(by.xpath("//img[@src='/themes/openweathermap/assets/vendor/owm/img/logo_OpenWeatherMap_orange.svg']"));
	this.currentLocationButton=element(by.css("button[class='btn search-cities__lnk']"));
	this.weatherMapsTwoHeader=element(by.xpath("//h2[contains(text(),'Weather maps 2.0')]"));
	this.supportCentreLink=element(by.xpath("//a[contains(text(),' Support center')]"));
	
};

module.exports = new tc1();
/*var a=new tc1();
a.getURL();*/