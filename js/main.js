var dataElem = $("[data-test]");
// console.log(dataElem.data("test"));
// console.log(dataElem.data("test2"));

// dataElem.data("test", "new value");
// console.log(dataElem.data("test"));
// dataElem.data({
	// "test": "new value 1",
	// "test2": "new value 2"
// });

// console.log(dataElem.data("test"));
// console.log(dataElem.data("test2"));

// dataElem.data("test2", {"isValid": true});
// console.log(dataElem.data("test2"));

// dataElem.removeData("test2");
// console.log(dataElem.data("test2"));

// dataElem.removeAttr("data-test2");
// dataElem.removeData("test2");
// console.log(dataElem.data("test2"));
// console.log(dataElem.attr("data-test2"));

//=====================================================

// dataElem.removeAttr("data-test", "data-test2");
// dataElem.removeAttr("data-test2");
// dataElem.removeData("data-test", "data-test2");
// console.log(dataElem.data("test"));
// console.log(dataElem.data("test2"));

//=====================================================

var logoImage = $(".logo");

// console.log(logoImage.css("width"));
// console.log(logoImage.css(["position", "height"]));
// logoImage.css({
	// "position": "relative",
	// "height": "200px"
// });
// console.log(logoImage.css(["position", "height"]));
// logoImage.css("width", "200px");
// console.log(logoImage.css("width"));

//==========================================================================

//console.log(window.getComputedStyle(logoImage[0])); //show all css styles
//console.log($(":radio:eq(2)")[0].value);

//==========================================================================

// console.log(logoImage.height());
// logoImage.height(200);
// console.log(logoImage.height());

// console.log(logoImage.width());
// logoImage.width(200);
// console.log(logoImage.width());

// logoImage.width("10rem");
// console.log(logoImage.css("width"));
// console.log(logoImage.width());

// console.log(logoImage.innerWidth());
// logoImage.innerWidth(200);
// console.log(logoImage.width());
// console.log(logoImage.innerWidth());

// console.log(logoImage.outerWidth());
// console.log(logoImage.outerWidth(true));
// logoImage.outerWidth(200);

// console.log(logoImage.outerWidth());
// logoImage.outerWidth(200, true);
// console.log(logoImage.outerWidth());

//=========================================================================

// console.log(logoImage.offset());
// console.log(logoImage.position());
// logoImage.offset({"left": 0, "top": 50});
// console.log(logoImage.offset());

//==========================================================================

// logoImage.position(); //has no any setter
// console.log(logoImage.position());

//==========================================================================

// var body = $("body");
// console.log(body.scrollLeft());
// console.log(body.scrollTop());

// setTimeout(function () {
	// body.scrollTop(0);
	// body.scrollLeft(50);
// }, 1000);

// logoImage.parent().on("click", function () {
	// console.log("Bubbled event");
// })
// logoImage.on("click", function () {
	// console.log("handler 1");
// }).on("click", function () {
	// console.log("handler 2");
// }).on("click", function () {
	// console.log("handler 3");
// }).on("click", function () {
// });

logoImage.parent().on("click", function () {
	console.log("Bubbled event");
})
logoImage.on("click", function (e) {
	console.log("handler 1");
	e.stopImmediatePropagation();
}).on("click", function () {
	console.log("handler 2");
}).on("click", function () {
	console.log("handler 3");
}).on("click", function () {
});









