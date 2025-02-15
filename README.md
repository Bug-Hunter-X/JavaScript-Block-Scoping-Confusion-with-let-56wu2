# JavaScript Block Scoping Confusion

This repository demonstrates a common confusion in JavaScript related to block scoping using the `let` keyword.  Beginners often expect variables declared with `let` to behave similarly to variables declared with `var`, but there are key differences that can lead to unexpected behavior.

The `bug.js` file contains code that illustrates this issue. The `bugSolution.js` file provides a corrected version.

## Understanding the Bug

In JavaScript, `let` introduces block scope. This means that a variable declared with `let` is only accessible within the block of code it is declared in (enclosed in curly braces `{}`).  This is different from `var`, which has function scope.

## Solution

The solution involves understanding how block scoping with `let` works and adjusting the code accordingly.  The `bugSolution.js` demonstrates the correct approach.