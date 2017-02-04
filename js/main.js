// function Pet(name) {
	// var name = name;
	// this.getName = function () {return name;};
// }

//var myPet = new Pet("Tom");
//console.log(myPet.getName());

// function Cat(name, weight) {
	// Pet.apply(this, arguments);
	// var weight = weight;
	// this.getWeight = function () {return weight;}
// }

//var myCat = new Cat("Tomcat", 5);
// console.log(myCat.getName());
// console.log(myCat.getWeight());
// console.log(myPet.getName());

// function Pet(name) {
	// this._name = name;
	// this.getName = function () {return this._name;};
// }

// console.log(myCat.getName());
// console.log(myCat.getWeight());
// console.log(myPet.getName());
// console.log(myCat);
// console.log(myPet);

// function Cat(name, weight) {
	// Pet.apply(this, arguments);
	// var weight = weight;
	// this._name = "Cat " + name;
	// this.getWeight = function () {return weight;}
	// this.setWeight = function (newWeight) {weight = newWeight;}
// }

// function CatV2 (name, weight) {
	// Cat.apply(this, arguments);
	// var oldGetWeight = this.getWeight;
	// this.getWeight = function () {return oldGetWeight() + "kg";}
// }

// console.log(myCat.getName());
// console.log(myPet.getName());

// var myCatV2 = new CatV2("Tom V2", 5);

// console.log(myCatV2.getWeight());
// console.log(myCatV2.getName());

// function CatV2 (name, weight) {
	// Cat.apply(this, arguments);
	// var oldGetWidht = this.getWeight;
	// this.getWeight = function () {return oldGetWidht() + "kg";}
// }

// function CatV2 (name, weight) {
	// Cat.apply(this, arguments);
	// this.getWeight = function () {return oldGetWidht() + "kg";}
// }

// function CatV2 (name, weight) {
	// Cat.apply(this, arguments);
	// var oldGetWidht = this.getWeight;
	// this.getWeight = function () {return oldGetWidht() + "kg";}
// }

//========= prototypes ==================================================

// var object1 = {test1: "test1"};
// var object2 = {test2: "test2"};

// object2.__proto__ = object1;

// console.log(object2.test2);
// console.log(object2.test1);

// object2.test1 = "new test1";

// console.log(object2.test1);
// console.log(object1.test1);

function OOPet(name) {
	this._name = name;
}

OOPet.prototype.getName = function() {return this._name;}

var myOOPet = new OOPet("Tom");
//console.log(myOOPet.getName());

function OOCat(name, weight) {
	OOPet.apply(this, arguments);
	this._weight = weight;
}

OOCat.prototype = Object.create(OOPet.prototype);
OOCat.prototype.constructor = OOCat;
OOCat.prototype.getWeight = function () {return this._weight};

var myOOCat = new OOCat("My OOCat", 5);

//console.log(myOOCat);

// function OOCatV2(name, weight) {
	// OOCat.apply(this, arguments);
// }

// OOCatV2.prototype = Object.create(OOCat.prototype);
// OOCatV2.prototype.constructor = OOCatV2;
// OOCatV2.prototype.getWeight = function () {return this._weight + "kg"};

function OOCatV2(name, weight) {
	OOCat.apply(this, arguments);
}

OOCatV2.prototype = Object.create(OOCat.prototype);
OOCatV2.prototype.constructor = OOCatV2;
OOCatV2.prototype.getWeight = function () {return OOCat.prototype.getWeight.call(this) + "kg";};

var myOOCatV2 = new OOCatV2("OOCatV2", 5);

// console.log(myOOCatV2.getWeight());

// console.log(OOPet.prototype.isPrototypeOf(myOOCatV2)); //true
// console.log(OOCat.prototype.isPrototypeOf(myOOCatV2)); //true
// console.log(OOCatV2.prototype.isPrototypeOf(myOOCatV2)); //true
// console.log(Object.prototype.isPrototypeOf(myOOCatV2)); //true
// console.log(Array.prototype.isPrototypeOf(myOOCatV2)); //false

// console.log(myOOCatV2 instanceof OOPet); //true
// console.log(myOOCatV2 instanceof OOCat); //true
// console.log(myOOCatV2 instanceof OOCatV2); //true
// console.log(myOOCatV2 instanceof Object); //true
// console.log(myOOCatV2 instanceof Array); //false

// console.log(Array.prototype.isPrototypeOf([]));
// console.log(Array.prototype.isPrototypeOf({}));
// console.log(Array.prototype.isPrototypeOf(""));
// console.log(Array.prototype.isPrototypeOf(null));

(function ($) {
	var ul = $("ul");
	//var links = ul.find("a"); //or
	var links = $("a", ul);
	links.each(function (index, elem) {
		//console.log(elem);
	});
	links.on("click", function (event) {
		event.preventDefault();
		links.css("color", $(this).text());
	});
	links.filter(".blue").on("click", function () {
		ul.css({
			"opacity": .5,
			"margin": "0 0 0 50px"
		});
	});
	links.filter(":has(span)").on("click", function () {
		ul.css({
			"opacity": 1,
			"margin": "0"
		});
	});
	
	// console.log($("li", ul).filter(":has(a span)").index());
	// console.log($("li", ul).filter(":has(>span)").index());
	// console.log($("li:eq(2)", ul));
	// console.log($("ul li [href='#']"));
	// console.log($("ul li [title]"));
	// console.log($(":text, :radio, :checkbox"));
	console.log($(":checked"));
	
	$(".send").on("click", function () {
		console.log($(":checked"));
		console.log($("[checked]"));
	});
	
	//Selectors
	//"ul .class #id"
	//"ul + .class" //выбираем всех потомков
	//"ul ~ .class" //выбираем следующего
	//$("ul").prev() //предыдущий элемент
	//$("ul").next() //следующий элемент
	//$("ul li:eq(1)"); $("ul li").eq(1); //element by index
	//$("ul li:first"); $("ul li:last"); //first or last li
	//$("ul li:first-child"); $("ul li:last-child"); //first or last elem
	//$("ul li:has(span)"); $("ul li").has("span"); //first or last elem
	//$("ul li [hraf]"); //find elem by attribute
	//$("ul li [hraf="#"]"); //find elem by attribute
		
}) (jQuery);

















