(function () {
	"use strict";
	var modules = {};
	var ourAwesomeApi = {};
	ourAwesomeApi.addModule = addModule;
	ourAwesomeApi.getModule = getModule;
	ourAwesomeApi.addMethod = addMethod;
	window.api = ourAwesomeApi;
	
	//Functions
	function addModule(name, module) {
		if (modules[name]) {
			throw("Module already exist!");
		}
		else {
			var fn = new Function("return function " + name + "(){}") ();
			fn.prototype = module;
			modules[name] = fn;
		}
	}
	
	function addMethod(moduleName, name, method) {
		if (!modules[moduleName]) {
			throw("Module does not exist!");
		}
		else if (modules[moduleName].prototype[name]) {
			throw("Method already exist!");
		}
		else {
			modules[moduleName].prototype[name] = method;
		}
	}
	
	function getModule(name) {
		if (modules[name]) {
			return new modules[name] ();
		}
		else {
			throw("Module does not exist!");
		}
	};
		
}) ();

//example begin

// api.addModule("test", {});
// api.addMethod("test", "testMethod", function () {console.log("Hooray!!!")});

// var testModule = api.getModule("test");

// console.log(testModule);

// testModule.testMethod();

//example end

(function () {
	api.addModule("regExpService", {
		hasTextBySample: hasTextBySample,
		getMatches: getMatches,
		getPartedPhone: getPartedPhone,
		checkEveryLineMatch: checkEveryLineMatch
	});
	
	//Functions
	function hasTextBySample(string, regExp) {
		return string.match(regExp) !== null ? true : false;
	};
	
	function getMatches(string, regExp) {
		var str = regExp.toString();
		var newStr = str.substr(1,str.length-2);
		var newRegExp = new RegExp(newStr,"g");
		var arr = arr||[];
		return arr = string.match(newRegExp);
	};
	
	function getPartedPhone(string) {
		var arrWholeNumber = string.match(/\+?\d{1,2}[^]?\d{3}[^]?\d{3}-?\d{2}-?\d{2}/);
		if (Array.isArray(arrWholeNumber)) {
			
		}
		else {
			throw("Invalid number!");
		}
	};
	
	function checkEveryLineMatch(string, regExp) {
		var arrOfStrings = string.split(/\n/);
	};
})();

//var testModule = api.getModule("regExpService");

//console.log(testModule.hasTextBySample("sldhsh/123/dishefiejfilkdfpw", "/123/"));
//console.log(testModule.getMatches("sld123hsh123dishefi123ejfil123kdfpw", "/123/"));
//console.log(testModule.getPartedPhone("+38(057)123-45-67"));

(function () {
	api.addModule("dataServices", {
		getDayByDate: getDayByDate,
		isYearLeap: isYearLeap,
		getWeekendsCount: getWeekendsCount,
		getPayDate: getPayDate
	});
	
	//Functions
	function getDayByDate(year, month, day) {
		var ourDate = new Date(year, month, day);
		return ourDate.getDay();
	};
	
	function isYearLeap(year) {
		var ourDate = new Date(year, 01, 29);
		return ourDate.getDate() === 29 ? true : false;
	};
	
	function getWeekendsCount(year, month) {
		var weekendsCount = 0;
		var daysInMonthCount = new Date(year, month + 1, 0).getDate();
		for (var i=1; i <= daysInMonthCount; i++) {
			if (getDayByDate(year, month, i) === 0 || getDayByDate(year, month, i) === 6) {
				weekendsCount++;
			}
		}
		return weekendsCount;
	};
	
	function getPayDate(year, month, notification) {
		
	};
})();

var testModule = api.getModule("dataServices");

console.log(testModule.getDayByDate(2017, 00, 28));
console.log(testModule.isYearLeap(2018));
console.log(testModule.getWeekendsCount(2018, 02));




























