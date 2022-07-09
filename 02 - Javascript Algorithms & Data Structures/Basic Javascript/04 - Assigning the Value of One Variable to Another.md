## ***Assigning the Value of One Variable to Another***
#### ***freeCodeCamp / JavaScript Algorithms & Data Structures / Basic Javascript***
---
After a value is assigned to a variable using the _assignment_ operator, you can assign the value of that variable to another variable using the _assignment_ operator.
```js
var myVar;
myVar = 5;
var myNum;
myNum = myVar;
```
The above declares a `myVar` variable with no value, then assigns it the value `5`. Next, a variable named `myNum` is declared with no value. Then, the contents of `myVar` (which is `5`) is assigned to the variable `myNum`. Now, `myNum` also has the value of `5`.

---

Assign the contents of `a` to variable `b`.
```js
// Setup
var a;
a = 7;
var b;

// Only change code below this line
```
- You should not change code above the specified comment.
- `b` should have a value of `7`.
- `a` should be assigned to `b` with `=`.

---

## ***Solution:***
```js
// Setup
var a;
a = 7;
var b;

// Only change code below this line
var b = a;
```