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

console.log(_.remove(users, {'active': false}));
console.log(users);












