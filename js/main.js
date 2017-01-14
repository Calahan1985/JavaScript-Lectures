
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

//1.
function addOpacity(hexColor, opacity) {
	
	// if (hexColor.length > 4) {
		// var red = parseInt(hexColor[1] + hexColor[2])
	// }
	
	// return (rgba())
}
// console.log(addOpacity("#00ff00", 0.5));

//2. done
function blockGrower(width, height) {
	var wNumber = parseFloat(width);
	var hNumber = parseFloat(height);
	
	var wString = String(wNumber);
	var hString = String(hNumber);
	
	var lengthOfPostfixWidth = width.length - wString.length;
	var lengthOfPostfixHeight = height.length - hString.length;
	
	var wEnd = width.substring(width.length - lengthOfPostfixWidth);
	var hEnd = height.substring(height.length - lengthOfPostfixHeight);
	 
	return 'width:' + wNumber*1.5 + wEnd + ',' + 'height:' + hNumber*1.5 + hEnd +',';
}
console.log(blockGrower("500px", "20%"));

//3.

//4. done
function checkNumberType(number) {
	numberString = String(number);
	return numberString.indexOf(".") === -1 ? "intger" : "float";
}
console.log(checkNumberType(500.1));

//5.
