# Introduction to Debugging

## Prerequisites

-   JavaScript
-   Visual Studio Code
-   Node.js installed locally (if you have not yet installed Node, please refer back to your Installfest repo and install Node)

## Objectives

-   Students will be able to explain what debugging is and why it is important.
-   Students will be able to use a variety of console tools in Chrome to debug.
-   Students will be able to use VS Code's built-in debugger to find and resolve errors.

## Agenda

1. Preface
2. A Methodical Approach
3. Console Methods
4. Chrome and VS Code Debugger
5. Additional Resources

## Preface

Throughout this course, you will encounter many errors, or "bugs" in your code. These errors may be the result of problems with syntax, references, logic, scope, methods, and so on. The process of determining the causes of these errors and resolving them is called "debugging."

Strong debugging skills are often considered to be one of the characteristics that separates junior developers from senior developers. During job interviews, potential employers may also ask you about a difficult bug you encountered and how you solved it.

Just like anything else we teach you in this course, debugging is a _SKILL_ -- you will get better at it over time, with more practice and more experience. But taking a **methodical approach** to debugging, understanding the range of available **debugging tools and options**, and getting practice at **finding errors** will help you to become a faster, more efficient debugger AND a better developer overall.

## A Methodical Approach to Debugging

![Debugging definition](images/debugging.jpg)

When you encounter a bug, your first instinct may be to dive into debugging and make changes to your code right away to try to get it to work.

However, if you do that, you might forget what changes you made and what approaches you tried. Instead, consider taking a structured, step-by-step approach to debugging.

Below is a useful series of questions to ask yourself when debugging.

1. **Where is my error?**
    - Narrow down the location of your bug to the file, code block, and line if you can.
    - JavaScript often gives file and line numbers in its error messages, which can point you in the right direction.
    - Good code formatters also highlight problem areas (usually syntax issues), so look for red squiggly lines in VS Code .
    - You can also comment out code and comment it back in one block at a time to locate the source of the problem.
    - More sophisticated methods will be covered below!
2. **What is my code supposed to be doing?**
    - If you don't yet have pseudo-code or comments, add them in line by line to translate what you think your code is doing.
    - Sometimes this process alone helps you spot your error!
    - As you examine your code, consider issues such as scope, hoisting, side effects, etc.
3. **How do I test my assumptions?**
    - Once you have a good understanding of what the code should be doing, use debugging tools to test whether your assumptions about the code are correct.
    - Determine where in the code to place console methods or a breakpoint to test whether your assumptions regarding the code's behavior are correct.

Run the code and evaluate the results. Update your code based on these results and run again; try to only change one thing at a time. If you return another error message, repeat the process until your code works the way you want it too.

> Remember to remove any console logs, breakpoints, and other debugging tools from code that will be deployed and any other projects that you plan to show employers.

## Beyond the Log: Other Console Methods

![Hitting console.log](images/consolelog.jpg)

As a new developer, you probably rely heavily on console.log() for not just debugging, but understanding what your code is doing. Console is a built-in JavaScript object, and like many other built-in objects (Arrays, Math, etc.), Besides "log", Console has a multitude of other methods (functions that belong to an object) available to us.

## `console.error()`

This method is used to specifically log error messages to the console. The message will be highlighted in red. You will see this method again when we learn how to make API calls.

```javascript
console.error('This is my error message');
```

## `console.warn()`

Similar to console.error, but logs warning messages to the console. The message will be highlighted yellow with a caution symbol.

## `console.table()`

If you are logging an array or object, it might be visually helpful to log the message with table formatting.

```javascript
const userInfo = {
	userOne: {
		userName: 'esin87',
		password: 'abc123',
		email: 'esin@saribudak.com'
	},
	userTwo: {
		userName: 'jimmy512',
		password: 'meowsers',
		email: 'jimmy@cats.com'
	},
	userThree: {
		userName: 'gordoTRON',
		password: 'kibbles4LYFE',
		email: 'gordon@pets.com'
	}
};
console.table(userInfo);
```

## `console.trace()`

If you are trying to figure out where in the code a function is being called, you can include a `console.trace()` message to place a metaphorical breadcrumb in the call stack.

```javascript
function functionTwo() {
	return functionThree();
}

function functionThree() {
	console.trace();
}

//remember to call the function to trace it:
functionThree();
```

## `console.log() with style`

For developers who are visually-oriented and working with multiple console messages, it might be helpful to stylize your different console logs by prefacing your message with `%c` and adding styling properties as the second parameter.

```javascript
console.log(
	'%cThis is my stylish console log.',
	'background-color: lightgreen; color: red; padding: 5px; border: 1px solid yellow; font-family: Garamond; font-size: 14px;'
);
```

These are just some. There are [more](https://www.w3schools.com/jsref/obj_console.asp) console methods out there to learn!

## Interactive Debuggers

Google Chrome and VS Code both have an interactive debugger built in. Gaining experience debugging with these more precise tools can help you become an even better developer.

### Debugging in Google Chrome

talk about how to use debugging techniques in Google Chrome

### Debugging in Visual Studio Code

> Make sure you have Node.js installed on your computer. If you're unsure, type `node -v` in your terminal. This should return the version of Node you have installed. If nothing returns, please refer back to your Installfest scripts to install Node, or refer to their [documentation](https://nodejs.org/en/) for installation directions.

talk about built in debugging in VS code

## Conclusion

Getting errors in your code can be really frustrating, but they can also be really instructive and revealing. View errors as an opportunity to gain a deeper and more intuitive understanding of how JavaScript works, as well as a chance to become stronger at analytical thinking and problem solving. And you'll realize after finally solving your error that there is no better feeling than when your code finally runs the way it's supposed to.

![That moment when your code works](images/tonystark.jpg)

## Additional Resources

-   W3 Schools provides a high-level overview of debugging [here](https://www.w3schools.com/js/js_debugging.asp).
-   This [video](https://www.youtube.com/watch?v=TtsvMRxmfGA) goes into much greater depth of all the different debugging tools available.
-   This [article](https://raygun.com/javascript-debugging-tips) covers common debugging techniques with good visuals of the code being used.
-   Google's own [tutorial](https://developers.google.com/web/tools/chrome-devtools/javascript/) for using their Chrome dev tools to debug JavaScript.
