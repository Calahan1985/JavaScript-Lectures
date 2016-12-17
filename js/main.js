
//1.
// var i = 0;
// while(i < 10) {
	// i++;
	// console.log(i);
// }

// var i = 0; //run at least once
// do {
	// i++;
	// console.log(i);
// } while (false)
	
//2.
// for (var i = 0; i < 10; i++) {
	// console.log(i);
// }

// for (var i = 10; i > 5; i--) {
	// console.log(i);
// }

// for (var i = 10; i > 0; i -= 2) {
	// console.log(i);
// }

// var i = 10;
// for (; i > 5;) {
	// i--
	// console.log(i);
// }

// var i = 0;
// while (true) {
	// console.log(i);
	// i++;
	// if (i > 10) {
		// break;
	// }
// }

// var i = 0;
// do {
	// console.log(i);
	// i++;
	// if (i > 10) {
		// break;
	// }
// } while (i < 100);

// for (var i = 0; i < 100; i++) {
	// console.log(i);
	// if (i > 10) {
		// break;
	// }
// }

// var i = 0;
// while (i < 10) {
	// i++;
	// if (i > 5 && i < 8) {
		// continue;
	// }
	// console.log(i);
// }

// var i = 0;
// do {
	// i++;
	// if (i > 5 && i < 8) {
		// continue;
	// }
	// console.log(i);
// } while (i < 10)
	
// for (var i = 0; i < 10; i++) {
	// if (i > 5 && i < 8) {
		// continue;
	// }
	// console.log(i);
// }

//Error - Unexpected token continue
// for (var i = 0; i < 10; i++) {
	// i > 5 && i < 8 ? continue : null;
	// console.log(i);
// }

// var i = 0;
// outerFor: while(true) {
	// console.log("outer i=", i);
	// while (true) {
		// i++;
		// console.log("outer i=", i);
		// if (i > 10) {
			// break outerFor;
		// }
	// }
// }

// var i = 0;
// outerFor: do {
	// console.log("outer i=", i);
	// do {
		// i++;
		// console.log("inner i=", i);
		// if (i > 10) {
			// break outerFor;
		// }
	// } while (true)
// } while(true)
	
// outerFor: for (var i = 0;;) {
	// console.log("outer i=", i);
	// for (;;) {
		// i++;
		// console.log("inner i=", i);
		// if (i > 10) {
			// break outerFor;
		// }
	// }
// }

// outer: for (var i = 0; i < 1000;) {
	// console.log("outer i=", i);
	// for (;;) {
		// i++;
		// console.log("inner i=", i);
		// if (i > 10) {
			// continue outer;
		// }
	// }
// }

// var i = 0;
// outer: while (i < 30) {
	// console.log("outer i=", i);
	// while (true) {
		// console.log("inner i=", i);
		// i++;
		// if (i > 10) {
			// continue outer;
		// }
	// }
// }

// var i = 0;
// outer: do {
	// console.log("outer i=", i);
	// do {
		// i++;
		// console.log("inner i=", i);
		// if (i > 10) {
			// continue outer;
		// }
	// } while (true)
// } while (i < 30) 
	
//-----------------------------------------
// var object = {
	// key1: "value 1",
	// key2: "value 2",
	// key3: "value 3",
	// anyKeyName: "any Data",
	// isObject: {
		// test: "test"
	// },
	// isArray: [1, 2, null]
// }

// console.log(object.key1);
// console.log(object["key2"]);

// for (var key in object) {
	// console.log(key);
	// console.log(object[key]);
// }

//-------------------------------------------------------------------

// var array = [1, 2, 3, "string", null];

// array.someKey = "some value"; //dicrease speed of work with array

// for (var index in array) {
	// console.log(index);
	// console.log(array[index]);
// }

//-------------------------------------------------------------------

// var arr = [];
// var arr = [1, "string", null];
// var arr = new Array(); //[]
// var arr = new Array(1, "string", null); //[1, "string", null]
// var arr = new Array(2); //[undefined, undefined]

// console.log(arr.length);
// console.log(arr[0]);
// console.log(arr);

//--------------------------------------------------------------------

// var arr = [1, 2 ,3];
// console.log(arr.length); //3
// console.log(arr.push(10)); //4
// console.log(arr.length); //4
// arr.push("test") > 4 ? console.log("We have a big array!") : null;
// arr.push("test") > 4 && console.log("We have a big array!");

// var newLength = arr.push("test");
// console.log(newLength);

// var z;
// if (z = 8 > 6) {
	// console.log("z = 8 > 6 =", z);
// }

// console.log("Our array =", arr);

//--------------------------------------------------------------------

// var arr = [1, 2 ,3];
// var arr = {};
// console.log(Array.isArray(arr));

//--------------------------------------------------------------------

// var array = ["test", 123, [], {}, null];
// for (var i = 0; i < array.length; i++) {
	// var currentElement = array[i];
	// if (typeof currentElement == "object" && !Array.isArray(currentElement)) {
		// console.log(currentElement);
		// break;
	// }
	// console.log("iteration =", i + 1);
// }

// var array = ["test", 123, [], {}, null];
// var newArray = [];
// for (var i = 0; i < array.length; i++) {
	// var currentElement = array[i];
	// if (typeof currentElement != "object" && typeof currentElement != "function" || currentElement === null) {
		// newArray.push(currentElement);
		// break;
	// }
	// console.log("iteration =", i + 1);
// }
// console.log(newArray);

//---------------------------------------------------------------------------

var array = ["test", 123, [], {}, null];
array.length = 10;
console.log(array);












