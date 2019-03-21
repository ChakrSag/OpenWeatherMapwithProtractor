/**
 * 
 */

function commonObj(){
	this.getURL=function(URL){
		browser.waitForAngularEnabled(false);
		browser.get(URL);
		//console.log("Sagar");
	};
	
	this.invalidCityName=function makeid(length) {
		  var text = "";
		  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		  for (var i = 0; i < length; i++)
		    text += possible.charAt(Math.floor(Math.random() * possible.length));
		  return text;
		};
};

module.exports = new commonObj();