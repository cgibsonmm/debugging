// // If you would like to code along with this lesson, you can do so here. The examples below will be covered in class. You can uncomment them one at a time to see the results in your own console. Feel free to add additional code to test these methods.

// // ADDITIONAL CONSOLE METHODS:

// // ERROR EXAMPLE
//console.error('This is my error message');

// // WARN EXAMPLE
//console.warn('This is my warning message.');

// // TABLE EXAMPLE
// const userInfo = {
// 	userOne: {
// 		userName: 'esin87',
// 		password: 'abc123',
// 		email: 'esin@saribudak.com'
// 	},
// 	userTwo: {
// 		userName: 'jimmy512',
// 		password: 'meowsers',
// 		email: 'jimmy@cats.com'
// 	},
// 	userThree: {
// 		userName: 'gordoTRON',
// 		password: 'kibbles4LYFE',
// 		email: 'gordon@pets.com'
// 	}
// };
//console.log(userInfo);
//console.table(userInfo);

// // TRACE EXAMPLE
// function functionTwo() {
// 	return functionThree();
// }

// function functionThree() {
// 	console.trace();
// }
// //remember to call the function to trace it:
// functionThree();

// // STYLIZED EXAMPLE
// console.log(
// 	'%cThis is my stylish console log.',
// 	'background-color: lightgreen; color: red; padding: 5px; border: 1px solid yellow; font-family: Garamond; font-size: 14px;'
// );

// // Debugger

// // Function that returns the sum of even numbers from zero to the parameter passed in (there is a bug in the function as it's written)

// let myNumber = 7;

//debug this function in Chrome Dev Tools, then VS Code
let myName = 'Allan';

function evenSum(num) {
	for (let i = 0; i <= num; i += 2) {
		myName = 'Steve';
		let sum = 0;
		sum += i;
		debugger;
	}
	myName = 'Roger';
	return sum;
}

console.log(evenSum(12));
