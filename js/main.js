//1. �������� ������� ������� ����� ������� ������ ����X ��� ������, Y ����� 10, � Z 
//������ ��� ����� Y.
var x = "string", y = 10, z = 12;
if (typeof x == "string" && z >= y) {
	console.log("Success 1!");
}
else {
	console.log("Not success 1!");
}

//2. �������� ������� ������� ����� ������� ������ ����X ������ 10 ��� Y � Y �������� 
//������ ��� Z ������ 2
var x = 12, y = 5, z = 8;
if (x > 10 || x > y && typeof y == "number" || z % 2) {
	console.log("Success 2!");
}
else {
	console.log("Not success 2!");
}

//3. �������� ������� ������� ����� ������� ������ ���� ����� X � Y������� 10, � ������� 
//�������������� X, Y � Z ���������� �� 2 ������ 100
var x = 60, y = 70, z = 80;
if (x + y % 10 && (x + y + z)/3*2 > 100) {
	console.log("Success 3!");
}
else {
	console.log("Not success 3!");
}

//4. �������� ��������� �������� ������� ����� ���������� � ���������� X �������� Y, 
//���� ��� ������ ��� ��� �������� Z ���� ��� ������ Y ��� ����� Y � Z.
//var x = /* if */ 10 > 15 ? /* then */ "test" : /*else*/ "rest";
//var z = 10 > 15 ? "test" : true ? "last" : "best";
var y = 9, z = 10;
var x = y % 3 ? y : z > y ? z : z + y;
console.log(x);

//5. �������� �������, ������� ������� � �����������X ������ �������� ����� ���������� 
//Y, Z, ������� �� ����� ��� null ����������if...else;
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

//6. �������� ������� ������� ����� ������� ������ ���� Y �� false � �������� � 
//������������ X true�� ���� ��������� Z ����������if...else.
var x, y = true, z = 5;
if (y != false) {
	x = "true";
	console.log(x);
}
else {
	x = z;
	console.log(x);
}

//7. �������� �������, ������� ������� � �����������X, �������� Y ���� ��� ����� 0 
//��� false���� undefined���� null �����������Z ���������� � ����� switch...case.
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

//8. ���������� �� ����� �� ��� ��������� break; � ��� ������, ��� �� �� �����.
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

//9. ��� ������ arr, � ������� ����� ��������� ����������� ������, �������� �� ������� 
//����� ���������� �������(� ������ ��������) � �������� �� ��������� ������ ����� ����� 
//������ �� ��� �������� ������� ��� ���������� � boolean ���� true.
var arr = ["", "0", 0, true, undefined, NaN, 234, "ololo", -1, [], {}];
var newArr = [];
for (var index in arr) {
	if (arr[index] == true) {
		newArr.push(arr[index]);
		break;
	}
}
console.log(newArr);













