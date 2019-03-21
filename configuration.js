/**
 * 
 */
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
const fs = require('fs');
var today = new Date(),
timeStamp = today.getMonth() + 1 + '-' + today.getDate() + '-' + today.getFullYear() + '-' + today.getHours() + 'h-' + today.getMinutes() + 'm';

function getFormattedTime() {
    var today = new Date();
    var y = today.getFullYear();
    // JavaScript months are 0-based.
    var m = today.getMonth() + 1;
    var d = today.getDate();
    var h = today.getHours();
    var mi = today.getMinutes();
    var s = today.getSeconds();
    return y + "-" + m + "-" + d + "-" + h + "-" + mi + "-" + s;
}

exports.config = {
		/**
		 * Commented out as connectiong through directConnect
		 */
		//seleniumAddress:"http://localhost:4444/wd/hub",
		//specs:['testScenario1.js'],
		
		onPrepare : function(){
			browser.manage().window().maximize();
			
			jasmine.getEnv().addReporter(
		        new Jasmine2HtmlReporter({
		        	consolidateAll: true,
		        	savePath: 'target/screenshots',
		            filePrefix: 'index -'+today
		        })
		     );
			
			fs.copyFile('./target/screenshots/htmlReport.html', './target/customSuitesResult_'+getFormattedTime()+'.html', (err) => {
				  if (err) throw err;
				  //console.log('OK! Copy FILE.xml');
				});
				
			},
			
		// Options to be passed to Jasmine.
		jasmineNodeOpts: {
			  showColors:true,
			  defaultTimeoutInterval: 400000,
			  isVerbose: true,
			  includeStackTrace: true
			  },
		
		suites :
			{
			custom: ['testScenario1.js','testScenario2.js','testScenario4.js']
			},
		
		multiCapabilities: [
		    {
		        'browserName': 'chrome'
		    },
		    {
		        'browserName': 'firefox'
		    }
		  ],
		 maxSessions: 1
};