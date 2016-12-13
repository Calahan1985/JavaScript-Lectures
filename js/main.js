
"use strict";
//alert("Hello World");
//=============================
//console.log("Hello World");
//=============================
//debugger;
//var x = "My x";
//x = "Another x";
//=============================
//var x = "string";
//console.log(typeof x); //"string"

//var x = 5;
//console.log(typeof x); //"number"

//var x = true;
//console.log(typeof x); //"boolean"

//var x = null;
//console.log(typeof x); //null -> object

//var x = undefined;
//console.log(typeof x); //undefined

// var x = {
	// key1: "value1",
	// key2: "value2",
	// "key3": "value3"
// };
// x.key1 = "new value";
// x["key2"] = "new value 2";
// console.log(typeof x); //object

// var x = ["element1", "element2", "element3", 25, {}, [], null];
// console.log(x[3]);
// x[3] = 56;
// console.log(typeof x); //array
// x.test = 123;
// Array.isArray(x); //true

// var x = function() {};
// x.key1 = "test";
// console.log(x.key1); // "test"
// console.log(typeof x); //function

// var x = ["element1", "element2", "element3", 25, {}, [], null];
// x.test = 123;
// console.log(x.test);
// console.log(x);

var x = ["123"];
console.log(x); //["123"]
var y = x;
console.log(y); //["123"]
y[0] = 345;
console.log(y); //["345"]
console.log(x); //["345"]

