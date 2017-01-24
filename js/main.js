var string = "soMe text email@test.com";
var email = "email@test.com";
var email2 = "aMail@test.com\nemail2@test.com";
var phone = "soMe text +7(567)789-45-56";
var phone2 = "soMe text +73(567)789-45-56";
var phone3 = "735677894556";

var regExp = /some/i;

function testRegExp(string, regExp) {
	return string.match(regExp);
}

//? - может быть, а может и не быть
console.log(testRegExp(string, /some/));
console.log(testRegExp(string, /some/i));
console.log(testRegExp(string, /^some/i));
console.log(testRegExp(string, /^text/i));
console.log(testRegExp(string, /text/i));
console.log(testRegExp(email2, /\w+@\w+\.{1}\w{2,}/i));
console.log(testRegExp(email2, /^\w+@\w+\.{1}\w{2,}$/im));
console.log(testRegExp(email2, /^\w+@\w+\.{1}\w{2,}$/img));
console.log(testRegExp(email2, /^\w+@\w+\.{1}\w{2,}$/mg));
console.log(testRegExp(email2, /^\w+@\w+\.{1}\w{2,}$/g));
console.log(testRegExp(email2, /(\w)+@[^]/));
console.log(testRegExp(email2, /([a-z]+)@\w+\.{1}\w{2,}/));
console.log(testRegExp(email2, /(?:[a-z]+)@(\w+)\.{1}(\w{2,})/));
console.log(testRegExp(phone,  /\+?\d{1,2}[^]?\d{3}[^]?\d{3}-?\d{2}-?\d{2}/));
console.log(testRegExp(phone2, /\+?\d{1,2}[^]?\d{3}[^]?\d{3}-?\d{2}-?\d{2}/));
console.log(testRegExp(phone3, /\+?\d{1,2}[^]?\d{3}[^]?\d{3}-?\d{2}-?\d{2}$/));

var testText = '"asd" "bsd" "ifg"';

console.log(testRegExp(testText, /"(.+)"/g));
console.log(testRegExp(testText, /"(.+?)"/g));
console.log(testRegExp(testText, /.+/g));
console.log(testRegExp(testText, /.+/g));

// console.log(testText.replace(/"(.+?)"/g, function (elem) {
	
// })
