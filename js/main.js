//1.
// console.log('2 + 2 * 2 =', 2 + 2 * 2); //6
// console.log("2 + 2 =", 2 + 2); //4
// console.log("5 - 3 =", 5 - 3); //2
// console.log("5 * 3 =", 5 * 3); //15
// console.log("5 % 3 =", 5 % 3); //2
// var x = 25;
// console.log("-x =", -x);

// var y = '25';
// console.log("y =", y); //string '25'
// console.log("typeof y =", typeof y);
// console.log("+ y =", +y); //number 25
// console.log("typeof y =", typeof +y);

// var z = '10';
// z = +z;
// console.log("typeof z =", typeof z); //number

//2.
// console.log('5 > 3 =', 5 > 3); //true
// console.log('5 < 3 =', 5 < 3); //false
// console.log('3 >= 3 =', 3 >= 3); //true
// console.log('3 <= 5 =', 3 <= 5); //true
// console.log('5 != 5 =', 5 != '5'); //false
// console.log('5 !== 5 =', 5 !== '5'); //true
// console.log('null == undefined =', null == undefined); //true
// console.log('null === undefined =', null === undefined); //false

//3.
// function test() {
	// return "test success!";
// }

// console.log(true && test() && "test" && "end of list"); //"end of list"
// console.log(true && test() && 0 && "end of list"); //0
// console.log(false && 6); //false

//4.
// console.log(false || 6); //6
// console.log(true || 6); //true
// console.log(false || "end" || 0); //"end"
// console.log("start" || true || 0); //"start"

//5.
// console.log("!0 =", !0); //true
// console.log("! =", !""); //true
// console.log("!'true because contains text'", !"true because contains text"); //true
// console.log("!\'true because \\ contains \ text' =", !"true because contains text"); //true
// console.log("!true =", !true); //false

//6.
// var x = (3, 4, 5);
// console.log(x); //5

// var x = 10, y = 5, z = x + y;
// console.log(z); //15
// console.log("undefined + 25 =", undefined + 25); //NaN
// console.log("NaN == NaN =", NaN == NaN);
// console.log("NaN === NaN =", NaN === NaN);
// console.log("typeof NaN =", typeof NaN);
// console.log("2 * (2 + 3) =", 2 * (2 + 3));

//7.
// var x = 10;
// x++; //10
// console.log(x);
// console.log(x++); //11

// var y = 10;
// ++y; //11
// console.log(y); //11
// console.log(++y); //12

// var x = 10;
// x--; //10
// console.log(x); //9
// console.log(x--); //9

// var y = 10;
// --y; //9
// console.log(y); //9
// console.log(--y); //8

//8.
// console.log("'x' > 'y' =", 'x' > 'y'); //false
// console.log("'x' > 'Y' =", 'x' > 'Y'); //true
// console.log("'test' > 'tes' =", 'test' > 'tes'); //true
// console.log("'test' > 'zes' =", 'test' > 'zes'); //false
// console.log("'1' > '2' =", '1' > '2'); //false
// console.log("'12' > '2' =", '12' > '2'); //false
// console.log("+'12' > +'2' =", +'12' > +'2'); //true

//9.
// console.log("'2' > 1 =", '2' > 1); //true
// console.log("'1.0' == 1 =", '1.0' == 1); //true
// console.log("true == 1 =", true == 1); //true
// console.log("false == 0 && false == '' =" , false == 0 && false == ''); //true
// console.log("false == 0 =", false == 0); //true

//10.
// console.log("null == undefined =", null == undefined); //true
// console.log("null > 0 =", null > 0); //false
// console.log("null == 0 =", null == 0); //false
// console.log("null < 0 =", null < 0); //false
// console.log("null >= 0 =", null >= 0); //true
// console.log("null <= 0 =", null <= 0); //true

//11.
// true == !"", !0, !false, !null, !undefined, !NaN, [], {}, function () {};
// false == "", false, null, undefined, NaN;

// if (true) {
	// console.log(true);
// }

// if (true)
	// console.log("i");

//12.
// if (25 && 0 || "text")
	// console.log("Success?");
// else 
	// console.log("Not success");

// if (25 && 0 || false) {
	// console.log("Success?");
// } else {
	// console.log("Not success");
// }

// var nameX = 325; //"Vasya", "Petya"
// console.log(typeof nameX);
// if (nameX == "Vasya") {
	// alert("Hello admin " + nameX);
// }
// else if (typeof nameX == 'string') {
	// alert("Hello user " + nameX);
// }
// else {
	// alert("Enter your name!");
// }

//13.
// if (10 > 15) {
	// var x = "test";
// }
// else {
	// var x = "rest";
// }

// //var x = /* if */ 10 > 15 ? /* then */ "test" : /*else*/ "rest";
// var y = /* if */ 10 < 15 ? /* then */ "test" : /*else*/ "rest";
// console.log(x);
// console.log(y);
// var z = 10 > 15 ? "test" : true ? "last" : "best";
// console.log(z); //"last"

//14.
// var x = '25';
// switch (x) {
	// case "test":
		// console.log("Action 1");
		// break;
	// case "lost":
		// console.log("Action 2");
		// break;
	// case true:
		// console.log("Action 3");
		// break;
	// case 25:
		// console.log("Action 4");
		// break;	
	// default:
		// console.log("Defoult action");
// }

// var x = [];
// if (typeof x == "array" && x[0] == 25 || x === undefined) {
	// console.log("Action 1");
// }
// else {
	// console.log("Action 2");
// }

var x = NaN, y = 15;
if (x == NaN) {
	console.log("Action 1");
}
else if (y % 2 - 2) {
	console.log("Action 2");
}
else {
	console.log("Action 3");
}