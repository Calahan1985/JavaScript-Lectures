//1. Написать функцию, которая возвращает сумму параметров X и Y.
function summ(x, y) {
	return x + y;
}
console.log(summ(12, 5));

//2. Написать функцию, которая вернет true, если передано число и оно позитивное.
function isPositive(x) {
	return typeof x === "number" &&  x > 0;
}
console.log(isPositive(false));

//3. Написать функцию, которая возвращает переданный параметр x приведенный к булевому виду.
function toBoolean(x) {
	return !!x;
}
console.log(toBoolean(null));

//4. Написать функцию, которая возвращает приветствие, которое сосотавлено из параметра name и строки //"Hello", если name это строка и должна вернуть "Wrong name", если name это не строка или пустая строка.
function greeting(name) {
	if (typeof name === "string" && name) {
		return "Hello, " + name + "!";
	}
	else {
		return "Wrong name!";
	}
}
console.log(greeting("5"));

//5. Написать функцию, которая возведет переданное значение в квадрат и вернет строку "Square = " результат 
//вычисления, если Х не число - должно вернуть "Wrong X" (x === x: проверка на Nan)
function square(x) {
	if (typeof x === "number" && x === x) {
		return "Square X = " + (x * x);
	}
	return "Wrong X!";
}
console.log(square(5));

//5. Написать функцию, которая вернет квадрат числа, если оно кратно двум; его куб, если оно кратно трем
//или само переданное число без изменений.
function powerOrNot(x) {
	if (typeof x === "number" && (x % 2 === 0)) {
		return x * x;
	}
	else if (typeof x === "number" && (x % 3 === 0)) {
		return x * x * x;
	}
	else {
		return x;
	}
}
console.log(powerOrNot(6));

//6. Написать функцию, которая возвращает тип переданного параметра х, учитывая особенности типов JS ("null" для null и "array" для массивов).
function getType(x) {
	if (x === null) {
		return "null";
	}
	else if (Array.isArray(x)) {
		return "array";
	}
	else if (x !== x) {
		return "Nan";
	}
	else {
		return typeof x;
	}
}
console.log(getType(NaN));

//7. Написать функцию, которая рассчитает и вернет длину гипотенузы прямоугольного треугольника по координатам
//х1, х2, у1, у2 для одного катета и координатам х3, у3, х4, у4 для второго. Квадрат длины гипотенузы равен
//сумме квадратов катетов. **Выдавать ошибку через алерт, если координаты не верны.
function getLengthOfHyp(x1, x2, y1, y2, x3, y3, x4, y4) {
	var k1, k2;
	//теорема Пифагора |AB|² = (y2 - y1)² + (x2 - x1)²
	k1 = Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2);
	k2 = Math.pow((x4 - x3), 2) + Math.pow((y4 - y3), 2);
	return Math.sqrt(k1 + k2);
}
console.log(getLengthOfHyp(2, 4, 3, 5, 10, 8, 0, 0));

//8. Написать функцию, которая вернет true, если параметр х примитив и приводится к true или вернет false.
function isTruePrimitive(x) {
	// if (!!x === true && typeof x !== "object" && typeof x !== "function") {
		// return true;
	// }
	// return false;
	return typeof x !== "object" && typeof x !== "function" && !!x;
}
console.log(isTruePrimitive(4));






























