//1. �������� �������, ������� �������� ���� �� X �� Y � ����� ����� ���� ����� ����� X � Y ������������.
function forSummator(x, y) {
	if (x===y) {
		return x;
	}
	if (x > y){
		var temp = x;
		x = y;
		y = temp;
	}
	var result = 0;
	for (x; x <= y; x++){
		result += x;
	}
	return result;
};	
//console.log(forSummator(1, 3));

//2. �������� �������, ������� ��������� 3 ��������� �, ������� ����� ����� �����, Y, ������� ����� 
//��������� ��������� � Z, ������� ����� �������� ��������� �����. ������� ������ ����� ����������� 
//�������� ���������������� �����.
function isPositive(x) {
	return (typeof x === 'number' && x > 0);
}

function positiveMultiplier(x, y, z) {
	var result = true;
	for (y; y <= z; y += x) {
		if (isPositive(y))
			result *= y;
		}
	return result === true ? 0 : result;	
};
//console.log(positiveMultiplier(1, -2, 1));

//3. �������� ������� ������� ��������� � ���� ������ ������array�� ���������� ����� ���� ����� � 
//���� ������.
function arraySummator(array) {
	if (!Array.isArray(array) || !array.length) {
		return "Invalid data";
	}
	var result = 0;
	for (var i = 0; i < array.length; i++){
		result += array[i];
	}
	return result;
};
//console.log(arraySummator([1, 2, 1]));

//4. �������� ������� ������� ��������� � ���� ������ array � ���������� ���� �������� ���� ������ 
//� ����� "string".
function arrayToConcatString(array) {
	if (!Array.isArray(array)) {
		return "Invalid data";
	}
	var result = '';
	for (var i = 0; i < array.length; i++){
		if (typeof array[i] === 'string'){
			result += array[i];	
		}
	}
	return result || 'array without string';
};
//console.log(arrayToConcatString(["It's", " a ", 1, undefined, "string", " array"]));

//5. �������� ������� ������� ��������� � ���� ������� ����
//[
//� �[1, 2, 3],
//� �[4, 5, 6],
//� �[7, 8, 9]
//]
//� ���������� ������� ����� 5(����� ���������� ����� �� ����� �����), ����� � ������� ����� ���� 
//� ����������� �������, ����� ���������� ����� 5, ���� ������ ����������.
function getPositionOfFive(matrix) {
	var stepCounter = 0;
	var position = '';
		
	outerFor: for (var i = 0; i < matrix.length; i++){
		var outerElement = matrix[i];
		for (var k = 0; k < outerElement.length; k++){
			stepCounter++;
			
			if (outerElement[k] === 5){
				position = i + "," + k;
				break outerFor;
			}
		}
	}
	return 'steps = ' + stepCounter + '; position = ' + position;
};

//6. �������� �������, ������� ����� ������ �� ���� �������� ����� ��� �� Y.
function getArrayOfOdds(�, y) {
	var arrayOfOdd = [];
	if (typeof x !== 'number' || typeof y !== 'number' || x > y) {
		return arrayOfOdd;
	}
	for (x; x <= y; x++){
		if (x % 2) {
			arrayOfOdd.push(x);
		}
	}
	return arrayOfOdd;
};
console.log(getArrayOfOdds([1, 5]));

//7. �������� �������, ������� �������� ���� �� 1���� � ����� ����� ����� ����� ��������� � ���� 
//�����.����� ��������� ��� �������������� ��� � ������� ������ ��������� ����� �������� ������ 2� 
//����������. ������: 1, 2, 3, 5, 8, 13...
function sumOfFibonachi(x){
	var fib = 1;
	var sum = 1;
	if(x === 1){
		return 'fibonachi(1) = ' + fib + '; sum = ' + sum;
	}

	sum ++;

	if(x === 2){
		return 'fibonachi(2) = ' + fib + '; sum = ' + (sum);
	}

	var prePrevious = 1;
	var previous = 1;
	var fib = 1;

	for (var i = 3; i <= x ; i++) {
		fib = prePrevious + previous;
		prePrevious = previous;
		previous = fib;
		sum += fib;
	}
	// return fib;
	return 'fibonachi(' + x +') = ' + fib + '; sum = ' + sum;
}

console.log(sumOfFibonachi(1));
console.log(sumOfFibonachi(2));
console.log(sumOfFibonachi(3));
console.log(sumOfFibonachi(4));
console.log(sumOfFibonachi(5));
console.log(sumOfFibonachi(6));
console.log(sumOfFibonachi(7));
console.log(sumOfFibonachi(8));
console.log(sumOfFibonachi(9));
console.log(sumOfFibonachi(10));


//second variant

function sumOfFibonachi(x) {
	var sum = 0;
	for (i = 1 ; i <= x; i++){
		sum += fib(i);
	}
	return sum;
}

function fib(x){
	if(x === 1 || x === 2){
		return 1;
	}

	var prePrevious = 1;
	var previous = 1;
	var fib = 1;

	for (var i = 3; i <= x ; i++) {
		fib = prePrevious + previous;
		prePrevious = previous;
		previous = fib;
	}
	return fib;
}

console.log('fibonachi(1) = ' + fib(1) + '; sum = ' + sumOfFibonachi(1));
console.log('fibonachi(2) = ' + fib(2) + '; sum = ' + sumOfFibonachi(2));
console.log('fibonachi(3) = ' + fib(3) + '; sum = ' + sumOfFibonachi(3));
console.log('fibonachi(4) = ' + fib(4) + '; sum = ' + sumOfFibonachi(4));
console.log('fibonachi(5) = ' + fib(5) + '; sum = ' + sumOfFibonachi(5));
console.log('fibonachi(6) = ' + fib(6) + '; sum = ' + sumOfFibonachi(6));
console.log('fibonachi(7) = ' + fib(7) + '; sum = ' + sumOfFibonachi(7));
console.log('fibonachi(8) = ' + fib(8) + '; sum = ' + sumOfFibonachi(8));
console.log('fibonachi(9) = ' + fib(9) + '; sum = ' + sumOfFibonachi(9));
console.log('fibonachi(10) = ' + fib(10) + '; sum = ' + sumOfFibonachi(10));

//8. �������� �������, ������� ��������� 3 ��������� ՠ������, ��������� ��������, Y, ������� ����� 
//����� ������, ������� �� ����� ���������� Z, ������� ����� ������������ ������� ������������� �������. 
//������� ������ ����� ������� ����� ������, � ������� ������ ������ �� �������� ������� �� ������� � 
//��������� Y, ����� ��������� ����������� �����, � ���� ������� array, �� ���������� ������ �������, 
//�� �� ����� � ��� ������ ����� ������.
function getElementsByType(x, y, z) {
  var resultArray = [];
  var checkMethod;
  switch (y) {
    case 'array':
      checkMethod = checkArray;
      break;
    case 'null':
      checkMethod = checkNull;
      break;
    case 'object':
      checkMethod = checkObject;
      break;
    default:
      checkMethod = checkType;
  }
  for (var i = 0; i < x.length; i++) {

    if(checkMethod(x[i], y)){
      resultArray.push(x[i]);
      if (resultArray.length === z) {
        break;
      }
    }
  }
  return resultArray;
}

function checkArray(x) {
  return Array.isArray(x);
}

function checkNull(x) {
  return x === null;
}

function checkType(x, y) {
  return typeof x === y;
}

function checkObject(x){
  return typeof x === "object" && !checkArray(x) && !checkNull(x);
}

console.log(getElementsByType([1, 2, 'aa', 34, {}, 'bb', ['ww', 1, 0, null], 'cc', 'dd'], "string", 3));
console.log(getElementsByType([true, 3, 44, false, {}, [], 'dd', true, false], "boolean", 3));
console.log(getElementsByType([1, 2, 'ddd', 45, 11], "number", 3));
console.log(getElementsByType([[], 22, '', 0 , null, [1], [2, 3, 7, null, 'hello'], {}, [333]], "array", 3));
console.log(getElementsByType([null, 2, 3, 'gfg', null, undefined, null, null], "null", 3));
console.log(getElementsByType([null, 2, {}, 3, [], 'gfg', {}, null, undefined, {}], "object", 3));
console.log(getElementsByType([null, 2, undefined, 3, 'gfg', null, undefined,], "undefined", 3));

//9. �������� �������, ������� "�������" ���������������� array��� 2 �����, � ������ ����� ��� ������, 
//� �� ������ ������ ��������� �����, � ����� ����� ������ � ������� ��� ������ ������ �������, � 
//��������� ���� ������ ����������, ���� �������� ����� ������, �������� ������������, � ���� ������ 
//�����, �� �������� ���� ������ ������ ������ ���� null.
function arrayToObject(array){
  var keys = [];
  var values = [];

  for (var i = 0; i < array.length; i++) {
    typeof array[i] === "string" ? keys.push(array[i]) : values.push(array[i]);
  }

  var obj = {};
  for (var i = 0; i < keys.length; i++) {
    i < values.length ? obj[keys[i]] = values[i] : obj[keys[i]] = null;
  }
  return obj;
}

console.log(arrayToObject([32, 'aa', 'bb', 'cc', 'dd', [], 'ee', 'gfg']));












