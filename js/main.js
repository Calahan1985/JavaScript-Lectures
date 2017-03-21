var array = [1, 2, 3, 3, 4];

//console.log(_.chunk(array, 2));

//console.log(_.difference(array, [1, 3], [4]));

// var array = [1.2, 2.2, 3.5, 3.3, 4.6];
// console.log(_.differenceBy(array, [1, 3], [4], Math.floor));

// console.log(_.differenceBy([
	// { 'x': 1,
	 // "y": 1
	// },
	// { 'x': 2,
	 // "y": 2
	// }
	// ], [
	// { 'x': 1,
	 // y: 2
	// }
// ], 'x'));

// console.log(_.differenceWith([
	// { 'x': 1,
	 // "y": 1
	// },
	// { 'x': 2,
	 // "y": 2
	// }
	// ], [
	// { 'x': 1,
	 // y: 1
	// }
// ], _.isEqual));

var users = [
	{user: 'barney', active: false},
	{user: 'fred', active: false},
	{user: 'pebbles', active: true}
];

// console.log(_.findIndex(users, function(object) {
	// return object.user === 'fred';
// }));

//console.log(_.findIndex(users, {'user' : 'fred', 'active' : false}));

// console.log(_.findIndex(users, ['active', false]));
// console.log(_.findIndex(users, 'active'));

// var object = {
	// key1: {name: 'test'},
	// key2: {name: 'rest'}
// };

// console.log(_.find(users, 'active'));
// console.log(_.find(object, {name: 'rest'}));

// console.log(_.findLastIndex(users, {'active': false}));

// console.log(_.head(users));
// console.log(_.first(users));
// console.log(_.last(users));

//console.log(_.intersection(users, [_.last(users)]));
//console.log(_.intersectionBy(users, [{user: 'pebbles', active: true}], 'user'));

//console.log(_.pull(users, _.last(users), users[0]));
//console.log(users);

// console.log(_.pullAll(users, [_.last(users), users[0]]));
// console.log(users);

// console.log(_.pullAllBy(users,  [{'some' : 'rest', 'active': true}], 'active'));

// console.log(_.pullAllWith(users,  [{'some' : 'rest', 'active': true}], function (obj1, obj2) {
	// return obj1.active === obj2.active;
// } ));

//console.log(_.pullAt(users, [0, 2]));

// console.log(_.remove(users, {'active': false}));
// console.log(users);

// console.log(_.uniq([1, 1, 2, 3]));
// console.log(_.uniqBy(users, 'active'));
// console.log(_.uniqWith(users, function (object) {
	// return object.active;
// }));

// var array1 = [{user: 'bob', active: false},
	// {user: 'pebbles', active: true}];
	
// console.log(_.union([1, 2], [2, 3], [3, 4]));
// console.log(_.union(users, array1));
// console.log(_.unionBy(users, array1, 'user'));
// console.log(_.unionWith(users, array1, _.isEqual));

// console.log(_.without(users, _.last(users)));
// console.log(users);

// function test() {
	// console.log("test");
// }
// var newTest = _.after(3, test);

// $("h1").on("click", newTest);

// var newTest = _.before(3, test);

// $("h1").on("click", newTest);

// function test(arg1, arg2) {
	// console.log(arg1 + arg2);
// }

// var newTest = _.bind(test, null, "test 1");
// var newTest = _.bind(test, null, _, "test 1");

// newTest(" arg 2 ");

// var object = {};
// var newBind = _.bindKey(object, "someMethod", 1, 5);
// object.someMethod = function (arg1, arg2) {
		// console.log(arg1, arg2);
// };

// newBind();

// var debounce = _.debounce(function () {
	// console.log("You stopped clicking, at last!");
// }, 1000);

// $("h1").on("click", debounce);

// var debounce = _.debounce(function () {
	// console.log("You stopped clicking, at last!");
// }, 1000, {
	// leading: true,
	// maxWait: 4000,
	// trailing: false
// });

// $("h1").on("click", debounce);

function onScroll (e) {
	console.log(window.scrolly);
}

//var newOnScroll = _.throttle(onScroll, 5000);

//$(window).on("scroll", onScroll);
//$(window).on("scroll", newOnScroll);

// var newOnScroll = _.throttle(onScroll, 5000, {
	// leading: true,
	// trailing: false
// });

// $("h1").on("click", newOnScroll);

var object = {
	key1: 1,
	key2: 2,
	innerObject: {
		key1: 25,
		key2: 30
	}
}

object.__proto__ = {
	protol: 40
}

// console.log(_.clone(object));
// console.log(_.clone(object) === object);
// console.log(_.clone(object).innerObject === object.innerObject);
// console.log(_.cloneDeep(object).innerObject === object.innerObject);

// console.log(_.assign({}, object, {key1: 25}));
// console.log(_.assignIn({}, object));

// $("h1").customPlugin({
	// great: true,
	// size: "big",
	// clickable: false
// });

// console.log(_.defaults(object, {key1: 30, key25: 50}));
// console.log(_.defaultsDeep(object, {key1: 30, key25: 50, 
// innerObject: {
	// key1: "rest",
	// key3: "test"
// }}));

function test(a, b, c) {
	console.log(a - b - c);
}

var newTest = _.curry(test);

var newTest = newTest(_, 2, 10);
// newTest(1, 2, 3);
// newTest(1, 2)(3);

$("h1").on("click", function() {
	newTest(25);
})




















