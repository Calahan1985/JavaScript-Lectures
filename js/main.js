//1. Написать условие которое будет истинно только если X это строка, Y равен 10, а Z 
//больше или равно Y.
var x = "string", y = 10, z = "12";
if (typeof x == "string" && y == 10 && z >= y) {
	console.log("Success 1!");
}
else {
	console.log("Not success 1!");
}

//2. Написать условие которое будет истинно только если X больше 10 или Y и Y является 
//числом или Z кратно 2
var x = 12, y = 5, z = 8;
if (x > 10 || x > y && typeof y === "number" || z % 2 === 0) {
	console.log("Success 2!");
}
else {
	console.log("Not success 2!");
}

//3. Написать условие которое будет истинно только если сумма X и Y кратна 10, а среднее 
//арифметическое X, Y и Z умноженное на 2 больше 100
var x = 60, y = 70, z = 80;
if ((x + y) % 10 === 0 && (x + y + z) / 3 * 2 > 100) {
	console.log("Success 3!");
}
else {
	console.log("Not success 3!");
}

//4. Написать тернарный оператор который будет записывать в переменную X значение Y, 
//если оно кратно трём или значение Z если оно больше Y или сумму Y и Z.
//var x = /* if */ 10 > 15 ? /* then */ "test" : /*else*/ "rest";
//var z = 10 > 15 ? "test" : true ? "last" : "best";
var y = 9, z = 10;
var x = y % 3 === 0 ? y : (z > y) ? z : z + y;
console.log(x);

//5. Написать условие, которое запишет в переменную X первое значение среди переменных 
//Y, Z, которое не число или null используя if...else;
var x, y = 3, z = 5;
if (typeof y !== "number") {
	x = y;
}
else if (typeof z !== "number") {
	x = z;
}
else {
	x = null;
}
console.log(x);
	
//6. Написать условие которое будет истинно только если Y не false и записать в 
//перемененную X true в виде строки или Z используя if...else.
var x, y = true, z = 5;
if (y !== false) {
	x = "true";
}
else {
	x = z;
}
console.log(x);

//7. Написать условие, которое запишет в переменную X, значение Y если оно равно 0 
//или false или undefined или null или значение Z приведённое к числу switch...case.
var x, y = 4, z = "5";
switch (y) {
	case 0:
		x = y;
		break;
	case false:
		x = y;
		break;
	case undefined:
		x = y;
		break;
	case null:
		x = y;
		break;	
	default:
		x = +z;
}
console.log(x);

//8. Сделать то же самое но без оператора break; в тех кейсах, где он не нужен.
var x, y = 4, z = "5";
switch (y) {
	case 0:
	case false:
	case undefined:
	case null:
		x = y;
		break;
	default:
		x = +z;
}
console.log(x);

//9. Дан массив arr, в котором могут храниться разнотипные данные, пройтись по массиву 
//всеми известными циклами(в разных решениях) и получить по окончании работы цикла новый 
//массив из тех значений который при приведении к boolean дают true.
var arr = ["", "0", 0, true, undefined, NaN, 234, "ololo", -1, [], {}];
var newArr = [];
var lengthArray = arr.length;
for (var i = 0; i < lengthArray; i++) {
	if (arr[i]) {
		newArr.push(arr[i]);
	}
}
console.log(newArr);

//10. Дан массив arr, в котором могут храниться разнотипные данные, пройтись по массиву 
//всеми известными циклами(в разных решениях) и получить по окончании работы цикла новый 
//массив из тех значений которые являются числом или строкой которую можно к нему привести, 
//а также являются положительными.
var positiveArray = [];
var arr = ["0", 0, undefined, 234, 15, -29, "-287", "", [1, 2, 3], {key: "value"}, "test", false];
var lengthArray = arr.length;

for (var i = 0; i < lengthArray; i++) {
	if((typeof arr[i] === "number" || +arr[i]) && arr[i] > 0) {
		positiveArray.push(arr[i]);
	}
}
console.log(positiveArray);

//11. Сгенерировать массив, который состоит из чисел от 1 до 99, каждое и рассортировать 
//результаты в 3 равных массивов, которые будут чередовать значения исходного массива, 
//тоесть [1], [2], [3]. 
var baseArray = [];
var newArray1 = [];
var newArray2 = [];
var newArray3 = [];

for (var i = 1; i < 100; i++) {
	baseArray.push(i);
}

var k = 0;
var lengthBaseArray = baseArray.length;
while (k < lengthBaseArray) {
	newArray1.push(baseArray[k]);
	newArray2.push(baseArray[k+1]);
	newArray3.push(baseArray[k+2]);
	k += 3;
}
console.log(baseArray);
console.log(newArray1, newArray2, newArray3);

//another variant

var arr = [];
for (var i = 1; i < 101; i++) {
	arr.push(i);
}

var newArr1 = [],
    newArr2 = [],
    newArr3 = [];

for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
        newArr1.push(arr[i]);
    } else if (arr[i] % 2 === 0) {
        newArr2.push(arr[i]);
    } else {
        newArr3.push(arr[i]);
    }
}	
console.log(arr);
console.log(newArr1);
console.log(newArr2);
console.log(newArr3);










































