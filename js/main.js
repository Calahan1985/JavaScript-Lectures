//It's a function
function fn () {
	
}
var object = {}; //[], function () {}

//It's a method
object.method = function () {};

//It's functional expresion
var functionX = function () {
	return "test";
};

//It's functional expresion
var functionY = function fnName() {
	if (true) {
		fnName();
	}
};

console.log(functionX());

//==================================================
var newFnName = new Function("x", "return x");

console.log(newFnName(256));

//==================================================

(function () {
	console.log("test 1");
}());

//===================================================

(function () {
	console.log("test 2");
}());

//====================================================

var test = (function privateName(x) {
	console.log(x);
	if (x < 1) {
		return privateName(x + 1);
	}
	return x;
}(0));

console.log(test);

//====================================================

(function privateName() {
	
}());

//====================================================

var arrWithFunctions = {
	function () {return 0;},
	function () {return 1;},
	function () {return 2;}
}
arrWithFunctions.methodOfArray = function () {
	return "I am a method";
}
//console.log(arrWithFunctions[i]());
console.log(arrWithFunctions.methodOfArray());

//====================================================

function fnName() {
	return "I am a function";
}
fnName.methodOfFunction = function () {
	return "I am a method";
}
console.log(fnName());
console.log(fnName.methodOfFunction());
console.log(fnName["methodOfFunction"]());
console.log(fnName);

var newFunction = fnName;

console.log(newFunction());
console.log(newFunction.methodOfFunction());
console.log(newFunction["methodOfFunction"]());
console.log(newFunction);

newFunction = null;

console.log(fnName());
console.log(fnName.methodOfFunction());
console.log(fnName["methodOfFunction"]());
console.log(fnName); //выводим тело функции

//===================================================

// var obj = {
	// x: 10
// }
// console.log(obj.x);

// chacgeX(obj);
// function chacgeX(obj) {
	// obj.x = 25;
// }
// console.log(obj.x);

//====================================================

// var x = 10;
// var y = x;
// console.log("old x = ", x);
// console.log("old y = ", y);
// x++;
// chacgeX(x);
// function chacgeX(test) {
	// test = 25;
// }
// console.log("new x = ", x);
// console.log("new y = ", y);

//====================================================

// var x = true ? function() { return 25; }() : false;
// console.log(x);

// var fn = x == 25 && function () {return 50};
// console.log(fn);

//====================================================

// var y = "asd";
// function best() {
	// console.log(arguments);
	// var x = Array.apply(null, arguments); //создаем массив из аргументов функции
	// console.log(x);
	// y += " test";
	// z();
	// function z() {
		// var rest = "test value";
	// }
	// //console.log(rest);
// }
// best(1, 2, null, [], 256, "vasia");

// console.log(y);
//====================================================

function getAllNuls(array) {
	if (!Array.isArray(array)) {
		throw("Attribute array is not array"); //бросает в консоль ошибку и прерывает выполнение кода
		console.log("asd");
	}
	var nullsArray = [];
	for (var i = 0; i < array.length; i++) {
		if (array[i] === null) {
			nullsArray.push(array[i]);
		}
	}
	return nullsArray;
}
console.log(getAllNuls([1, 2, "asd", null, undefined, {"null": null}, null]));















