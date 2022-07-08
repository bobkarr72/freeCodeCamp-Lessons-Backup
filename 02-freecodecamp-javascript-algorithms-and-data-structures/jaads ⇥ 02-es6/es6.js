// ! Compare Scopes of the var and let Keywords.

function checkScope() {
  "use strict";
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}

// ! Mutate an Array Declared with const.
/* The const declaration has many use cases in modern JavaScript. */
/* Some developers prefer to assign all their variables using const by default, unless they know they will need to reassign the value. Only in that case, they use let. */
/* However, it is important to understand that objects (including arrays and functions) assigned to a variable using const are still mutable. Using the const declaration only prevents reassignment of the variable identifier. */

const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editInPlace();

// ! Prevent Object Mutation.
/* As seen in the previous challenge, const declaration alone doesn't really protect your data from mutation. To ensure your data doesn't change, JavaScript provides a function Object.freeze to prevent data mutation. */
/* Any attempt at changing the object will be rejected, with an error thrown if the script is running in strict mode. */

function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
Object.freeze(MATH_CONSTANTS);
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

// ! Use Arrow Functions to Write Concise Anonymous Functions.
/* In JavaScript, we often don't need to name our functions, especially when passing a function as an argument to another function. Instead, we create inline functions. We don't need to name these functions because we do not reuse them anywhere else. */
/* When there is no function body, and only a return value, arrow function syntax allows you to omit the keyword return as well as the brackets surrounding the code. This helps simplify smaller functions into one-line statements. */

const magic = () => {
  return new Date();
};

// ! Write Arrow Functions with Parameters.
/* Just like a regular function, you can pass arguments into an arrow function. */
