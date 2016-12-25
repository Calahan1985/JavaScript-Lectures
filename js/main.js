//1. Написать условие которое будет истинно только если X это строка, Y равен 10, а Z 
//больше или равно Y.
var x = "string", y = 10, z = 12;
if (typeof x == "string" && z >= y) {
	console.log("Success 1!");
}
else {
	console.log("Not success 1!");
}

//2. Написать условие которое будет истинно только если X больше 10 или Y и Y является 
//числом или Z кратно 2
var x = 12, y = 5, z = 8;
if (x > 10 || x > y && typeof y == "number" || z % 2) {
	console.log("Success 2!");
}
else {
	console.log("Not success 2!");
}

//3. Написать условие которое будет истинно только если сумма X и Y кратна 10, а среднее 
//арифметическое X, Y и Z умноженное на 2 больше 100
var x = 60, y = 70, z = 80;
if (x + y % 10 && (x + y + z)/3*2 > 100) {
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
var x = y % 3 ? y : z > y ? z : z + y;
console.log(x);

//5. Написать условие, которое запишет в переменную X первое значение среди переменных 
//Y, Z, которое не число или null используя if...else;
var x, y = 3, z = 5;
if (typeof y != "number") {
	x = y;
	console.log(x);
}
else if (typeof z != "number") {
	x = z;
	console.log(x);
}
else {
	x = null;
	console.log(x);
}

//6. Написать условие которое будет истинно только если Y не false и записать в 
//перемененную X true в виде строки или Z используя if...else.
var x, y = true, z = 5;
if (y != false) {
	x = "true";
	console.log(x);
}
else {
	x = z;
	console.log(x);
}

//7. Написать условие, которое запишет в переменную X, значение Y если оно равно 0 
//или false или undefined или null или значение Z приведённое к числу switch...case.
var x, y = 4, z = "5";
switch (y) {
	case 0:
		x = y;
		console.log(x);
		break;
	case false:
		x = y;
		console.log(x);
		break;
	case undefined:
		x = y;
		console.log(x);
		break;
	case null:
		x = y;
		console.log(x);
		break;	
	default:
		x = +z;
		console.log(x);
}

//8. Сделать то же самое но без оператора break; в тех кейсах, где он не нужен.
var x, y = 4, z = "5";
switch (y) {
	case 0:
		x = y;
		console.log(x);
		break;
	case false:
		x = y;
		console.log(x);
		break;
	case undefined:
		x = y;
		console.log(x);
		break;
	case null:
		x = y;
		console.log(x);
		break;
	case "test":
		x = y;
		console.log(x);
	default:
		x = +z;
		console.log(x);
}

//9. Дан массив arr, в котором могут храниться разнотипные данные, пройтись по массиву 
//всеми известными циклами(в разных решениях) и получить по окончании работы цикла новый 
//массив из тех значений который при приведении к boolean дают true.
var arr = ["", "0", 0, true, undefined, NaN, 234, "ololo", -1, [], {}];
var newArr = [];
for (var index in arr) {
	if (arr[index] == true) {
		newArr.push(arr[index]);
		break;
	}
}
console.log(newArr);













