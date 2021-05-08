var list = [1, 'ddd'];
var union;
union = 2;
union = 'hi';
// union = true
var union2;
// Literal
var union3;
union3 = 1;
// union3 = 4
var literal;
function merge(n1, n2, resultType) {
	if (resultType === 'as-string') {
		return n1.toString() + n2.toString();
	}
	if (typeof n1 === 'string' || typeof n2 === 'string') return n1.toString() + n2.toString();
	else return n1 + n2;
}
var mergeNumber = merge(2, 5, 'as-number');
var mergeNumber2 = merge(2, 5, 'as-string');
var mergeString = merge('hello', 'world', 'as-string');
console.log(mergeNumber);
console.log(mergeNumber2);
console.log(mergeString);
// Enum
var Color;
(function (Color) {
	Color[(Color['red'] = 0)] = 'red';
	Color[(Color['green'] = 1)] = 'green';
	Color[(Color['blue'] = 2)] = 'blue';
})(Color || (Color = {}));
var Color2;
(function (Color2) {
	Color2[(Color2['red'] = 5)] = 'red';
	Color2[(Color2['green'] = 10)] = 'green';
	Color2[(Color2['blue'] = 1)] = 'blue';
})(Color2 || (Color2 = {}));
var Color3;
(function (Color3) {
	Color3['red'] = 'red';
	Color3['green'] = 'green';
	Color3['blue'] = 'blue';
})(Color3 || (Color3 = {}));
var color = Color.blue;
console.log(color);
console.log(Color3.green);
// any
var randomValue = 666;
randomValue = true;
randomValue = 'abc';
randomValue = {};
randomValue();
randomValue.toUpperCase();
// unknown
var randomValue1 = 666;
randomValue1 = true;
randomValue1 = 'abc';
randomValue1 = {};
// randomValue1()
// randomValue1.toUpperCase()
// void, undefined and never
function printResult() {
	console.log('no return');
}
console.log(printResult()); // undefined
function printResult1() {
	console.log('return');
	return;
}
function printResult3() {
	console.log('no return');
}
function printResult4() {
	console.log('return');
	return 1;
}
function throwError(message, errorCode) {
	throw {
		message: message,
		errorCode: errorCode,
	};
	// never execute here
}
throwError('not found', 404);
function whileLoop() {
	while (true) {
		console.log('hi');
	}
}
// Type Assertions
var message;
message = 'abc';
message.endWith('c');
// // method1
// let ddd = (<string>message).endsWith("c");
// // method2
// let ddd2 = (message as string).endsWith("c")
// function
// object
var person = {
	firstName: 'S',
	lastName: 'C',
	age: 18,
};
