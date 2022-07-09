// ! Storing Values with the Assignment Operator. 
/* In JavaScript, you can store a value in a variable with the assignment operator (=). If there are any calculations to the right of the = operator, those are performed before the value is assigned to the variable on the left of the operator.  */

var a;
a = 7;

// ! Assigning the Value of One Variable to Another. 
/* After a value is assigned to a variable using the assignment operator, you can assign the value of that variable to another variable using the assignment operator. */

var a;
a = 7;
var b;
b = a;

// ! Initializing Variables with the Assignment Operator. 
/* It is common to initialize a variable to an initial value in the same line as it is declared. */

var a = 9;

// ! Declare String Variables. 
/* A string literal, or string, is a series of zero or more characters enclosed in single or double quotes.  */

var myFirstName = "Robert";
var myLastName = "Carr";

// ! Understanding Uninitialized Variables. 
/* When JavaScript variables are declared, they have an initial value of undefined. If you do a mathematical operation on an undefined variable your result will be NaN which means "Not a Number". If you concatenate a string with an undefined variable, you will get a string of undefined.  */

var a = 5;
var b = 10;
var c = "I am a";

a = a + 1;
b = b + 5;
c = c + " String!";

// ! Understanding Case Sensitivity in Variables.
/* In JavaScript all variables and function names are case sensitive. This means that capitalization matters.  MYVAR is not the same as MyVar nor myvar. It is possible to have multiple distinct variables with the same name but different casing. It is strongly recommended that for the sake of clarity, you do not use this language feature.
/* Write variable names in JavaScript in camelCase. In camelCase, multi-word variable names have the first word in lowercase and the first letter of each subsequent word is capitalized.  */

var StUdLyCapVaR;
var properCamelCase;
var TitleCaseOver;

STUDLYCAPVAR = 10;
PRoperCAmelCAse = "A String";
tITLEcASEoVER = 9000;

var studlyCapVar;
var properCamelCase;
var titleCaseOver;

studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

// ! Explore Differences Between the var and let Keywords.
/* One of the biggest problems with declaring variables with the var keyword is that you can easily overwrite variable declarations  */
/* As your codebase becomes larger, you might accidentally overwrite a variable that you did not intend to. Because this behavior does not throw an error, searching for and fixing bugs becomes more difficult.  */
/* A keyword called let was introduced in ES6, a major update to JavaScript, to solve this potential issue with the var keyword. You'll learn about other ES6 features in later challenges. So unlike var, when you use let, a variable with the same name can only be declared once. */

var catName = "Oliver";
var catSound = "Meow!";

let catName = "Oliver";
let catSound = "Meow!";

// ! Declare a Read-Only Variable with the const Keyword.
/* The keyword let is not the only new way to declare variables. In ES6, you can also declare variables using the const keyword. */
/* const has all the awesome features that let has, with the added bonus that variables declared using const are read-only. They are a constant value, which means that once a variable is assigned with const, it cannot be reassigned.*/
/*  Note: It is common for developers to use uppercase variable identifiers for immutable values and lowercase or camelCase for mutable values (objects and arrays). You will learn more about objects, arrays, and immutable and mutable values in later challenges. Also in later challenges, you will see examples of uppercase, lowercase, or camelCase variable identifiers. */

const FCC = "freeCodeCamp";
let fact = "is cool!";
fact = "is awesome!";
console.log(FCC, fact);

// ! Add Two Numbers with JavaScript.
/* Number is a data type in JavaScript which represents numeric data. Now let's try to add two numbers using JavaScript.JavaScript uses the + symbol as an addition operator when placed between two numbers. */

const sum = 10 + 10;

// ! Subtract One Number from Another with JavaScript.
/* We can also subtract one number from another. JavaScript uses the - symbol for subtraction. */

const difference = 45 - 33;

// ! Multiply Two Numbers with JavaScript.
/* We can also multiply one number by another. JavaScript uses the * symbol for multiplication of two numbers. */

const product = 8 * 10;

// ! Divide One Number by Another with JavaScript.
/* We can also divide one number by another. JavaScript uses the / symbol for division. */

const quotient = 66 / 33;

// ! Increment a Number with JavaScript.
/* You can easily increment or add one to a variable with the ++ operator. */

let myVarOne = 87;
myVarOne = myVarOne + 1;
myVarOne++;

// ! Decrement a Number with JavaScript.
/* You can easily decrement or decrease a variable by one with the -- operator. */

let myVarTwo = 11;
myVarTwo = myVarTwo - 1
myVarTwo--;

// ! Create Decimal Numbers with JavaScript.
/* We can store decimal numbers in variables too. Decimal numbers are sometimes referred to as floating point numbers or floats. */
/* Note: when you compute numbers, they are computed with finite precision. Operations using floating points may lead to different results than the desired outcome. */

const ourDecimal = 5.7;
var myDecimal = 5.7;

// ! Multiply Two Decimals with JavaScript.
/* In JavaScript, you can also perform calculations with decimal numbers, just like whole numbers. */

const productOne = 2.0 * 2.5;

// ! Divide One Decimal by Another with JavaScript.
/* Dividing decimals relies on / symbol as well. */

const quotientOne = 4.4 / 2.0;

// ! Finding a Remainder in JavaScript.  
/* The remainder operator (%) gives the remainder of the division of two numbers. */
/* In mathematics, a number can be checked to be even or odd by checking the remainder of the division of the number by 2. */
/* Note: The remainder operator is sometimes incorrectly referred to as the modulus operator. It is very similar to modulus, but does not work properly with negative numbers. */

const remainder = 11 % 3;

// ! Compound Assignment With Augmented Addition.
/* In programming, it is common to use assignments to modify the contents of a variable. Remember that everything to the right of the equals sign is evaluated first. */
/* Since this is such a common pattern, there are operators which do both a mathematical operation and assignment in one step. One such operator is the += operator. */

let a = 3;
let b = 17;
let c = 12;

a = a + 12;
b = 9 + b;
c = c + 7;

a += 12;
b += 9;
c += 7;

// ! Compound Assignment With Augmented Subtraction.
/* Like the += operator, -= subtracts a number from a variable. */

let a = 11;
let b = 9;
let c = 3;

a = a - 6;
b = b - 15;
c = c - 1;

a -= 6;
b -= 15;
c -= 1;

// ! Compound Assignment With Augmented Multiplication.
/* The *= operator multiplies a variable by a number. */

let a = 5;
let b = 12;
let c = 4.6;

a = a * 5;
b = 3 * b;
c = c * 10;

a *= 5;
b *= 3;
c *= 10;

// ! Compound Assignment With Augmented Division.
/* The /= operator divides a variable by another number. */

let a = 48;
let b = 108;
let c = 33;

a = a / 12;
b = b / 4;
c = c / 11;

a /= 12;
b /= 4;
c /= 11;

// ! Escaping Literal Quotes in Strings. 
/* When you are defining a string you must start and end with a single or double quote. What happens when you need a literal quote: " or ' inside of your string? In JavaScript, you can escape a quote from considering it as an end of string quote by placing a backslash (\) in front of the quote. */
/* This signals to JavaScript that the quote is not the end of the string, but should instead appear inside the string. Use backslashes to assign a string to the variable. */

const myStr = "I am a \"double quoted\" string inside \"double quotes\".";

// ! Quoting Strings with Single Quotes.
/* String values in JavaScript may be written with single or double quotes, as long as you start and end with the same type of quote. Unlike some other programming languages, single and double quotes work the same in JavaScript. */
/* The reason why you might want to use one type of quote over the other is if you want to use both in a string. This might happen if you want to save a conversation in a string and have the conversation in quotes. Another use for it would be saving an <a> tag with various attributes in quotes, all within a string.*/
/* This becomes a problem if you need to use the outermost quotes within it. Remember, a string has the same kind of quote at the beginning and end. But if you have that same quote somewhere in the middle, the string will stop early and throw an error. */

const myStrTwo = '<a href="http://www.example.com" target="_blank">Link</a>';

// ! Escape Sequences in Strings.
/* Quotes are not the only characters that can be escaped inside a string. There are two reasons to use escaping characters: */

/* To allow you to use characters you may not otherwise be able to type out, such as a carriage return. */
/* To allow you to represent multiple quotes in a string without JavaScript misinterpreting what you mean. */

// !  Code    Output
// !  \'	    single quote
// !  \"	    double quote
// !  \\	    backslash
// !  \n	    newline
// !  \r	    carriage return
// !  \t	    tab
// !  \b	    word boundary
// !  \f	    form feed

/* Note that the backslash itself must be escaped in order to display as a backslash. */

const myStrThree = "FirstLine\n\t\\SecondLine\nThirdLine";

// ! Concatenating Strings with Plus Operator.
/* In JavaScript, when the + operator is used with a String value, it is called the concatenation operator. You can build a new string out of other strings by concatenating them together. */
/* Note: Watch out for spaces. Concatenation does not add spaces between concatenated strings, so you'll need to add them yourself. */

const myStrFour = "This is the start. " + "This is the end.";

// ! Concatenating Strings with the Plus Equals Operator.
/* We can also use the += operator to concatenate a string onto the end of an existing string variable. This can be very helpful to break a long string over several lines. */

/* Note: Watch out for spaces. Concatenation does not add spaces between concatenated strings, so you'll need to add them yourself. */

let myStrFive = "This is the first sentence. ";
myStrFive += "This is the second sentence.";

// ! Constructing Strings with Variables.
/* Sometimes you will need to build a string. By using the concatenation operator (+), you can insert one or more variables into a string you're building. */

const myNameOne = "Robert Carr";
const myStrSix = "My name is " + myNameOne + " and I am well!";

// ! Appending Variables to Strings.
/* Just as we can build a string over multiple lines out of string literals, we can also append variables to a string using the plus equals (+=) operator. */

const someAdjective = "the best!";
let myStrSeven = "Learning to code is ";
myStrSeven += someAdjective;

// ! Find the Length of a String.
/* You can find the length of a String value by writing .length after the string variable or string literal. */

let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName.length;

// ! Use Bracket Notation to Find the First Character in a String.
/* Bracket notation is a way to get a character at a specific index within a string. */
/* Most modern programming languages, like JavaScript, don't start counting at 1 like humans do. They start at 0. This is referred to as Zero-based indexing. */
/* For example, the character at index 0 in the word Charles is C. So if const firstName = "Charles", you can get the value of the first letter of the string by using firstName[0]. */

let firstLetterOfLastName = "";
const lastNameOne = "Lovelace";
firstLetterOfLastName = lastNameOne[0];

// ! Understand String Immutability. 
/* In JavaScript, String values are immutable, which means that they cannot be altered once created. */

let myStrEight = "Jello World";
myStrEight = "Hello World";

// ! Use Bracket Notation to Find the Nth Character in a String. 
/* You can also use bracket notation to get the character at other positions within a string. Remember that computers start counting at 0, so the first character is actually the zeroth character. */

const lastNameTwo = "Lovelace";
const thirdLetterOfLastNameTwo = lastNameTwo[2];

// !  Use Bracket Notation to Find the Last Character in a String. 
/* In order to get the last letter of a string, you can subtract one from the string's length. */
/* For example, if const firstName = "Ada", you can get the value of the last letter of the string by using firstName[firstName.length - 1]. */

const lastNameThree = "Lovelace";
const lastLetterOfLastNameThree = lastNameThree[lastNameThree.length - 1];

// ! Use Bracket Notation to Find the Nth-to-Last Character in a String.
/* You can use the same principle we just used to retrieve the last character in a string to retrieve the Nth-to-last character. */
/* For example, you can get the value of the third-to-last letter of the const firstName = "Augusta" string by using firstName[firstName.length - 3] */

const lastNameFour = "Lovelace";
const secondToLastLetterOfLastNameFour = lastNameFour[lastNameFour.length - 2];

// ! Word Blanks. 
/* You are provided sentences with some missing words, like nouns, verbs, adjectives and adverbs. You then fill in the missing pieces with words of your choice in a way that the completed sentence makes sense. Consider this sentence - It was really ____, and we ____ ourselves ____. This sentence has three missing pieces- an adjective, a verb and an adverb, and we can add words of our choice to complete it. */

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
const wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + ".";

// ! Store Multiple Values in one Variable using JavaScript Arrays. 
/* With JavaScript array variables, we can store several pieces of data in one place. You start an array declaration with an opening square bracket, end it with a closing square bracket, and put a comma between each entry. */

const myArray = ["hello", 5];

// ! Nest one Array within Another Array
/* You can also nest arrays within other arrays. This is also called a multi-dimensional array. */

const myArrayOne = [["Supreme Court", "my ass!"], ["Losers", "all", "of", "them"]];

// ! Access Array Data with Indexes. 
/* We can access the data inside arrays using indexes. */
/* Array indexes are written in the same bracket notation that strings use, except that instead of specifying a character, they are specifying an entry in the array. Like strings, arrays use zero-based indexing, so the first element in an array has an index of 0.  */

const myArrayTwo = [50, 60, 70];
console.log(myArrayTwo[0]);
const myData = myArrayTwo[0];

// ! Modify Array Data With Indexes. 
/* Unlike strings, the entries of arrays are mutable and can be changed freely, even if the array was declared with const. */
/* Note: There shouldn't be any spaces between the array name and the square brackets, like array [0]. Although JavaScript is able to process this correctly, this may confuse other programmers reading your code. */

const myArrayThree = [18, 64, 99];
myArrayThree[0] = 45;

// ! Access Multi-Dimensional Arrays With Indexes.
/* One way to think of a multi-dimensional array, is as an array of arrays. When you use brackets to access your array, the first set of brackets refers to the entries in the outer-most (the first level) array, and each additional pair of brackets refers to the next level of entries inside.  */

const myArrayFour = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

/* Using the array/index above, below solve for myArrayFour = 8 */
const myDataOne = myArrayFour[2][1];

// ! Manipulate Arrays With push().
/* An easy way to append data to the end of an array is via the push() function. .push() takes one or more parameters and "pushes" them onto the end of the array. */

const myArrayFive = [["John", 23], ["cat", 2]];
myArrayFive.push(["dog", 3]);

// ! Manipulate Arrays With pop().
/* Another way to change the data in an array is with the .pop() function. */
/* .pop() is used to pop a value off of the end of an array. We can store this popped off value by assigning it to a variable. In other words, .pop() removes the last element from an array and returns that element. */
/* Any type of entry can be popped off of an array - numbers, strings, even nested arrays. */

const myArraySix = [["John", 23], ["cat", 2]];
const removedFromMyArraySix = myArraySix.pop();

// ! Manipulate Arrays With shift().
/* pop() always removes the last element of an array. What if you want to remove the first? */
/* That's where .shift() comes in. It works just like .pop(), except it removes the first element instead of the last. */

const myArraySeven = [["John", 23], ["dog", 3]];
const removedFromMyArraySeven = myArraySeven.shift();

// ! Manipulate Arrays With unshift().
/* Not only can you shift elements off of the beginning of an array, you can also unshift elements to the beginning of an array i.e. add elements in front of the array. */
/* .unshift() works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array. */

const myArrayEight = [["John", 23], ["dog", 3]];
myArrayEight.shift();
myArrayEight.unshift(["Paul", 35]);

// ! Shopping List.
/* Create a shopping list in the variable myList. The list should be a multi-dimensional array containing several sub-arrays. */
/* The first element in each sub-array should contain a string with the name of the item. The second element should be a number representing the quantity */

const myList = [
  ["Eggs", 10],
  ["Milk", 9],
  ["Bread", 8],
  ["Butter", 7],
  ["Jam", 6],
];

// ! Write Reusable JavaScript with Functions.
/* In JavaScript, we can divide up our code into reusable parts called functions. */
/* You can call or invoke a function by using its name followed by parentheses, like this: functionName(); Each time the function is called it will print out the message on the dev console. All of the code between the curly braces will be executed every time the function is called. */

function reusableFunction() {
  console.log("Hi World");
}
reusableFunction();

// ! Passing Values to Functions with Arguments.
/* Parameters are variables that act as placeholders for the values that are to be input to a function when it is called. When a function is defined, it is typically defined along with one or more parameters. The actual values that are input (or "passed") into a function when it is called are known as arguments. */

function functionWithArgs(a, b) {
  console.log(a + b);
}
functionWithArgs(1, 2);
functionWithArgs(7, 9);

// ! Return a Value from a Function with Return.
/* We can pass values into a function with arguments. You can use a return statement to send a value back out of a function. */

function timesFive(num) {
  return num * 5;
  return num * 2;
  return num * 0;
}

const answer = timesFive(5);

// ! Global Scope and Functions.
/* In JavaScript, scope refers to the visibility of variables. Variables which are defined outside of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code. */
/* Variables which are declared without the let or const keywords are automatically created in the global scope. This can create unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with let or const. */

const myGlobal = 10;
function fun1() {
  oopsGlobal = 5;
}
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

// ! Local Scope and Functions.
/* Variables which are declared within a function, as well as the function parameters, have local scope. That means they are only visible within that function. */

function myLocalScope() {
const myVar = "hello";
  console.log('inside myLocalScope', myVar);
}
myLocalScope();
console.log('outside myLocalScope', myVar);

// ! Global vs. Local Scope in Functions.
/* It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable. */

const outerWear = "T-Shirt";
function myOutfit() {
  const outerWear = "sweater";
  return outerWear;
}
myOutfit();

// ! Understanding Undefined Value returned from a Function.
/* A function can include the return statement but it does not have to. In the case that the function doesn't have a return statement, when you call it, the function processes the inner code but the returned value is undefined. */

let sumOne = 0;
function addThree() {
  sumOne = sumOne + 3;
}
function addFive() {
  sumOne = sumOne + 5;
}
addThree();
addFive();

// ! Assignment with a Returned Value.
/* If you'll recall from our discussion of Storing Values with the Assignment Operator, everything to the right of the equal sign is resolved before the value is assigned. This means we can take the return value of a function and assign it to a variable. */

let processed = 0;
function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7);

// ! Stand in Line.
/* In Computer Science a queue is an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue. */

function nextInLine(arr, item) {
arr.push(item);
  const removed = arr.shift();
  return removed;
}
const testArr = [1, 2, 3, 4, 5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// ! Understanding Boolean Values.
/* Another data type is the Boolean. Booleans may only be one of two values: true or false. They are basically little on-off switches, where true is on and false is off. These two states are mutually exclusive. */
/* Note: Boolean values are never written with quotes. The strings "true" and "false" are not Boolean and have no special meaning in JavaScript. */

function welcomeToBooleans() {
  return true;
}

// ! Use Conditional Logic with If Statements.
/* if statements are used to make decisions in code. The keyword if tells JavaScript to execute the code in the curly braces under certain conditions, defined in the parentheses. These conditions are known as Boolean conditions and they may only be true or false. */
/* When the condition evaluates to true, the program executes the statement inside the curly braces. When the Boolean condition evaluates to false, the statement inside the curly braces will not execute. */
/* EXAMPLE:
/*    if (condition is true) {
/*    statement is executed
/*    } */

function trueOrFalse(wasThatTrue) {
if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
}

// ! Comparison with the Equality Operator.
/* There are many comparison operators in JavaScript. All of these operators return a boolean true or false value. */
/* The most basic operator is the equality operator ==. The equality operator compares two values and returns true if they're equivalent or false if they are not. Note that equality is different from assignment (=), which assigns the value on the right of the operator to a variable on the left. */

function testEqual(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not Equal";
}
testEqual(10);

// ! Comparison with the Strict Equality Operator.
/* Strict equality (===) is the counterpart to the equality operator (==). However, unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion. */
/* If the values being compared have different types, they are considered unequal, and the strict equality operator will return false. */

// Setup
function testStrict(val) {
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
}
testStrict(10);

// ! Practice comparing different values.
/* In the last two challenges, we learned about the equality operator (==) and the strict equality operator (===). Let's do a quick review and practice using these operators some more. */
/* If the values being compared are not of the same type, the equality operator will perform a type conversion, and then evaluate the values. However, the strict equality operator will compare both the data type and value as-is, without converting one type to the other. */
/* Note: In JavaScript, you can determine the type of a variable or a value with the typeof operator. */

function compareEquality(a, b) {
  if (a === "a") {
    return "Equal";
  }
  return "Not Equal";
}
compareEquality(10, "10");

// ! Comparison with the Inequality Operator.
/* The inequality operator (!=) is the opposite of the equality operator. It means not equal and returns false where equality would return true and vice versa. Like the equality operator, the inequality operator will convert data types of values while comparing. */

function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}
testNotEqual(10);

// ! Comparison with the Strict Inequality Operator.
/* The strict inequality operator (!==) is the logical opposite of the strict equality operator. It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa. The strict inequality operator will not convert data types. */

function testStrictNotEqual(val) {
  if (val !== 17) {
    return "Not Equal";
  }
  return "Equal";
}
testStrictNotEqual(10);

// ! Comparison with the Greater Than Operator.
/* The greater than operator (>) compares the values of two numbers. If the number to the left is greater than the number to the right, it returns true. Otherwise, it returns false. */
/* Like the equality operator, the greater than operator will convert data types of values while comparing. */

function testGreaterThan(val) {
  if (val > 100) {
    return "Over 100";
  }
  if (val > 10) {
    return "Over 10";
  }
  return "10 or Under";
}
testGreaterThan(10);

// ! Comparison with the Greater Than Or Equal To Operator.
/* The greater than or equal to operator (>=) compares the values of two numbers. If the number to the left is greater than or equal to the number to the right, it returns true. Otherwise, it returns false. */
/* Like the equality operator, the greater than or equal to operator will convert data types while comparing. */

function testGreaterOrEqual(val) {
  if (val >= 20) {
    return "20 or Over";
  }
  if (val >= 10) {
    return "10 or Over";
  }
  return "Less than 10";
}
testGreaterOrEqual(10);

// !  Comparison with the Less Than Operator.
/* The less than operator (<) compares the values of two numbers. If the number to the left is less than the number to the right, it returns true. Otherwise, it returns false. Like the equality operator, the less than operator converts data types while comparing. */

function testLessThan(val) {
  if (val < 25) {
    return "Under 25";
  }
  if (val < 55) {
    return "Under 55";
  }
  return "55 or Over";
}
testLessThan(10);

// ! Comparison with the Less Than Or Equal To Operator.
/* The less than or equal to operator (<=) compares the values of two numbers. If the number to the left is less than or equal to the number to the right, it returns true. If the number on the left is greater than the number on the right, it returns false. Like the equality operator, the less than or equal to operator converts data types. */

function testLessOrEqual(val) {
  if (val <= 12) {
    return "Smaller Than or Equal to 12";
  }
  if (val <= 24) {
    return "Smaller Than or Equal to 24";
  }
  return "More Than 24";
}
testLessOrEqual(10);

// ! Comparisons with the Logical And Operator.
/* Sometimes you will need to test more than one thing at a time. The logical and operator (&&) returns true if and only if the operands to the left and right of it are true. */
/* The same effect could be achieved by nesting an if statement inside another if statement */

function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) {
    return "Yes";
  }
  return "No";
}
testLogicalAnd(10);

// ! Comparisons with the Logical Or Operator.
/* The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false. */
/* The logical or operator is composed of two pipe symbols: (||). This can typically be found between your Backspace and Enter keys. */

function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    return "Outside";
  }
  return "Inside";
}
testLogicalOr(15);

// ! (HAIL SATAN!!!!) Introducing Else Statements.
/* When a condition for an if statement is true, the block of code following it is executed. What about when that condition is false? Normally nothing would happen. With an else statement, an alternate block of code can be executed. */

function testElse(val) {
  let result = "";
  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }
  return result;
}
testElse(4);

// ! Introducing Else If Statements.
/* If you have multiple conditions that need to be addressed, you can chain if statements together with else if statements. */

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}
testElseIf(7);

// ! Logical Order in If Else Statements.
/* Order is important in if, else if statements. */
/* The function is executed from top to bottom so you will want to be careful of what statement comes first. */

function orderMyLogic(val) {
  if(val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

// ! Chaining If Else Statements.
/* if/else statements can be chained together for complex logic */

function testSize(num) {
if (num < 5) {
  return "Tiny"
} else if (num < 10) {
  return "Small"
} else if (num < 15) {
  return "Medium"
} else if (num < 20) {
  return "Large"
} else (num >= 20); {
  return "Huge"
  }
}
testSize(7);

// ! Golf Code.
/* In the game of Golf, each hole has a par, meaning, the average number of strokes a golfer is expected to make in order to sink the ball in the hole to complete the play. Depending on how far above or below par your strokes are, there is a different nickname. */
/* Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest) */

// !      Strokes	          Return
// !      1	                "Hole-in-one!"
// !      <= par - 2	      "Eagle"
// !      par - 1	          "Birdie"
// !      par	              "Par"
// !      par + 1	          "Bogey"
// !      par + 2	          "Double Bogey"
// !      >= par + 3	      "Go Home!"

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes === par - 1) {
    return names[2];
  } else if (strokes === par) {
    return names[3];
  } else if (strokes === par + 1) {
    return names[4];
  } else if (strokes === par + 2) {
    return names[5];
  } else {
    return names[6];
  }
}
golfScore(5, 4);

// !  Selecting from Many Options with Switch Statements.
/* If you have many options to choose from, use a switch statement. A switch statement tests a value and can have many case statements which define various possible values. Statements are executed from the first matched case value until a break is encountered. */
/* The break tells JavaScript to stop executing statements. If the break is omitted, the next statement will be executed. */

function caseInSwitch(val) {
  let answer = "";
switch (val) {
  case 1:
    answer = "alpha";
    break;
  case 2:
    answer = "beta";
    break;
  case 3:
    answer = "gamma";
    break;
  case 4:
    answer = "delta";
    break;
}
  return answer;
}
caseInSwitch(1);

// ! Adding a Default Option in Switch Statements.
/* In a switch statement you may not be able to specify all possible values as case statements. Instead, you can add the default statement which will be executed if no matching case statements are found. Think of it like the final else statement in an if/else chain. */
/* A default statement should be the last case. */

function switchOfStuff(val) {
  let answer = "";
switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
  }
  return answer;
}
switchOfStuff(1);

// ! Multiple Identical Options in Switch Statements.
/* If the break statement is omitted from a switch statement's case, the following case statement(s) are executed until a break is encountered. */

function sequentialSizes(val) {
  let answer = "";
switch (val) {
  case 1:
  case 2:
  case 3:
    return "Low";
    break;
  case 4:
  case 5:
  case 6:
    return "Mid";
    break;
  case 7:
  case 8:
  case 9:
    return "High";
  }
  return answer;
}
sequentialSizes(1);

// ! Replacing If Else Chains with Switch.
/* If you have many options to choose from, a switch statement can be easier to write than many chained if/else if statements. */

function chainToSwitch(val) {
  let answer = "";
switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }
  return answer;
}
chainToSwitch(7);

// ! Returning Boolean Values from Functions.
/* You may recall from Comparison with the Equality Operator that all comparison operators return a boolean true or false value. */
/* Sometimes people use an if/else statement to do a comparison, But there's a better way to do this. Since === returns true or false, we can return the result of the comparison. */

function isLess(a, b) {
return a <= b;
}
isLess(10, 15);

// !  Return Early Pattern for Functions.
/* When a return statement is reached, the execution of the current function stops and control returns to the calling location. */

function abTest(a, b) {
  if (a < 0 || b < 0) {
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
abTest(2, 2);

// ! Counting Cards.
/* In the casino game Blackjack, a player can determine whether they have an advantage on the next hand over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting. */
/* Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low. */

// !      Count Change	      Cards
// !      +1	                2, 3, 4, 5, 6
// !      0	                  7, 8, 9
// !      -1	                10, 'J', 'Q', 'K', 'A'

/* You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space. */

let count = 0;

function cc(card) {
switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}
cc(2); cc(3); cc(7); cc('K'); cc('A');

// ! Build JavaScript Objects.
/* You may have heard the term object before. */
/* Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties. */
/* Objects are useful for storing data in a structured way, and can represent real world objects, like a cat. */
/* You can also use numbers as properties. You can even omit the quotes for single-word string properties. */
/* However, if your object has any non-string properties, JavaScript will automatically typecast them as strings. */

const myDog = {
  "name": "Bawllz",
  "legs": 4,
  "tails": 1,
  "friends": ["Bun", "Emma", "Robert"]
};

// ! Accessing Object Properties with Dot Notation.
/* There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array. */
/* Dot notation is what you use when you know the name of the property you're trying to access ahead of time. */

const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};
const hatValue = testObj.hat;
const shirtValue = testObj.shirt;

// ! Accessing Object Properties with Bracket Notation.
/* The second way to access the properties of an object is bracket notation ([]). If the property of the object you are trying to access has a space in its name, you will need to use bracket notation. */
/* However, you can still use bracket notation on object properties without spaces. */
/* Note that property names with spaces in them must be in quotes (single or double). */

const testObjOne = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};
var entreeValue = testObjOne["an entree"];
var drinkValue = testObjOne["the drink"];

// ! Accessing Object Properties with Variables.
/* Another use of bracket notation on objects is to access a property which is stored as the value of a variable. This can be very useful for iterating through an object's properties or when accessing a lookup table. */
/* Another way you can use this concept is when the property's name is collected dynamically during the program execution */
/* Note that we do not use quotes around the variable name when using it to access the property because we are using the value of the variable, not the name. */

const testObjTwo = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};
var playerNumber = 16;
var player = testObjTwo[playerNumber];

// ! Updating Object Properties.
/* After you've created a JavaScript object, you can update its properties at any time just like you would update any other variable. You can use either dot or bracket notation to update. */

const myDogOne = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDogOne.name = "Happy Coder";

// ! Add New Properties to a JavaScript Object.
/* You can add new properties to existing JavaScript objects the same way you would modify them. */

const myDogTwo = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDogOne.bark = "woof";

// ! Delete Properties from a JavaScript Object.
/* We can also delete properties from objects using delete */

const myDogThree = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};
delete myDogThree.tails;

// ! Using Objects for Lookups.
/* Objects can be thought of as a key/value storage, like a dictionary. If you have tabular data, you can use an object to lookup values rather than a switch statement or an if/else chain. This is most useful when you know that your input data is limited to a certain range. */

function phoneticLookup(val) {
  var result = "";
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };
  result = lookup[val];
  return result;
}

// ! Testing Objects for Properties.
/* Sometimes it is useful to check if the property of a given object exists or not. We can use the .hasOwnProperty(propname) method of objects to determine if that object has the given property name. .hasOwnProperty() returns true or false if the property is found or not. */

function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}

// ! Manipulating Complex Objects.
/* Sometimes you may want to store data in a flexible Data Structure. A JavaScript object is one way to handle flexible data. They allow for arbitrary combinations of strings, numbers, booleans, arrays, functions, and objects. */
/* Note: You will need to place a comma after every object in the array, unless it is the last object in the array. */

var myMusic = [
  {
    artist: "Billy Joel",
    title: "Piano Man",
    release_year: 1973,
    formats: ["CD", "8T", "LP"],
    gold: true
  },
  {
    artist: "Autechre",
    title: "Tri Repetae",
    release_year: 1991,
    formats: ["CD", "3xVinyl", "LP"]
  }
];

// ! Accessing Nested Objects.
/* The sub-properties of objects can be accessed by chaining together the dot or bracket notation. */

const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
},
    "outside": {
      "trunk": "jack"
    }
  }
};
const gloveBoxContents = myStorage.car.inside["glove box"];

// ! Accessing Nested Arrays.
/* As we have seen in earlier examples, objects can contain both nested objects and nested arrays. Similar to accessing nested objects, array bracket notation can be chained to access nested arrays. */

const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];
var secondTree = myPlants[1].list[1];

// ! Record Collection.
/* You are given an object literal representing a part of your musical album collection. Each album has a unique id number as its key and several other properties. Not all albums have complete information. */
/* You start with an updateRecords function that takes an object literal, records, containing the musical album collection, an id, a prop (like artist or tracks), and a value. Complete the function using the rules below to modify the object passed to the function. */

// !    Your function must always return the entire record collection object.
// !    If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
// !    If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
// !    If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
// !    If value is an empty string, delete the given prop property from the album.

/* Note: A copy of the recordCollection object is used for the tests. */

const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};
function updateRecords(records, id, prop, value) {
  if (prop !== 'tracks' && value !== "") {
    records[id][prop] = value;
  } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
    records[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
  } else if (value === "") {
    delete records[id][prop];
  }
  return records;
}
updateRecords(recordCollection, 5439, 'artist', 'ABBA');

// !  Iterate with JavaScript While Loops.
/* You can run the same code multiple times by using a loop. The first type of loop we will learn is called a while loop because it runs while a specified condition is true and stops once that condition is no longer true. */

const myArrayNine = [];
let i = 5;
while(i >= 0) {
  myArrayNine.push(i);
  i--;
}

// ! Iterate with JavaScript For Loops.
/* You can run the same code multiple times by using a loop. */
/* The most common type of JavaScript loop is called a for loop because it runs for a specific number of times. */
/* For loops are declared with three optional expressions separated by semicolons: */
/* for (a; b; c), where a is the initialization statement, b is the condition statement, and c is the final expression */
/* The initialization statement is executed one time only before the loop starts. It is typically used to define and setup your loop variable. */
/*  The condition statement is evaluated at the beginning of every loop iteration and will continue as long as it evaluates to true. When the condition is false at the start of the iteration, the loop will stop executing. This means if the condition starts as false, your loop will never execute.*/
/* The final expression is executed at the end of each loop iteration, prior to the next condition check and is usually used to increment or decrement your loop counter. */

var ourArray = [];
for (var iOne = 0; i < 5; i++) {
  ourArray.push(i);
}
var myArrayTen = [];
for (var iOne = 1; i < 6; i++) {
  myArrayTen.push(i);
}

// !  Iterate Odd Numbers With a For Loop
/* For loops don't have to iterate one at a time. By changing our final-expression, we can count by even numbers. */

var ourArray = [];
for (var iTwo = 0; i < 10; i += 2) {
  ourArray.push(i);
}

// Setup
var myArrayEleven = [];

// Only change code below this line.

for (var iTwo = 1; i < 10; i += 2) {
  myArray.push(i);
}

// ! Count Backwards With a For Loop.
/* A for loop can also count backwards, so long as we can define the right conditions. */
/* In order to decrement by two each iteration, we'll need to change our initialization, condition, and final expression. */

const myArrayTwelve = [];
for (let i = 9; i > 0; i -=2) {
  myArrayTwelve.push(i);
}

// ! Iterate Through an Array with a For Loop.
/* A common task in JavaScript is to iterate through the contents of an array. One way to do that is with a for loop. This code will output each element of the array arr to the console. */
/* Remember that arrays have zero-based indexing. */

const myArr = [2, 3, 4, 5, 6];
let total = 0;
for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

// ! Nesting For Loops.
/* f you have a multi-dimensional array, you can use the same logic as the prior waypoint to loop through both the array and any sub-arrays. */

function multiplyAll(arr) {
  let product = 1;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product = product * arr[i][j];
    }
  }
  return product;
}
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

// ! Iterate with JavaScript Do...While Loops.
/* The next type of loop you will learn is called a do...while loop. It is called a do...while loop because it will first do one pass of the code inside the loop no matter what, and then continue to run the loop while the specified condition evaluates to true. */
/* Essentially, a do...while loop ensures that the code inside the loop will run at least once */

// Setup
const myArrayThirteen = [];
let iThree = 10;
do {
  myArrayThirteen.push(i);
  iThree++;
} while (iThree <= 10);

// ! Replace Loops using Recursion.
/* Recursion is the concept that a function can be expressed in terms of itself. */
/* Note: Recursive functions must have a base case when they return without calling the function again), otherwise they can never finish executing. */

function sum(arr, n) {
if(n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
}

// ! Profile Lookup.
/* We have an array of objects representing different people in our contacts lists. */
/* A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you. */
/* The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact. */
/* If both are true, then return the "value" of that property. */
/* If name does not correspond to any contacts then return the string No such contact. */
/* If prop does not correspond to any valid properties of a contact found to match name then return the string No such property. */

const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];
function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (prop in contacts[i]) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}
lookUpProfile("Akira", "likes");

// ! Generate Random Fractions with JavaScript.
/* Random numbers are useful for creating random behavior. */
/* JavaScript has a Math.random() function that generates a random decimal number between 0 (inclusive) and 1 (exclusive). Thus Math.random() can return a 0 but never return a 1. */
/* Note: Like Storing Values with the Assignment Operator, all function calls will be resolved before the return executes, so we can return the value of the Math.random() function. */

function randomFraction() {
  return Math.random(3.7);
}

// ! Generate Random Whole Numbers with JavaScript.
/* It's great that we can generate random decimal numbers, but it's even more useful if we use it to generate random whole numbers. */

// !      1. Use Math.random() to generate a random decimal.
// !      2. Multiply that random decimal by 20.
// !      3. Use another function, Math.floor() to round the number down to its nearest whole number.

/* Remember that Math.random() can never quite return a 1 and, because we're rounding down, it's impossible to actually get 20. This technique will give us a whole number between 0 and 19. */
/* Putting everything together, this is what our code looks like: */
// ! --------------------------

Math.floor(Math.random() * 20);

// ! --------------------------
/* We are calling Math.random(), multiplying the result by 20, then passing the value to Math.floor() function to round the value down to the nearest whole number. */

function randomWholeNum() {
return Math.floor(Math.random() * 10);
}

// ! Generate Random Whole Numbers within a Range.
/* Instead of generating a random whole number between zero and a given number like we did before, we can generate a random whole number that falls within a range of two specific numbers. */
/* To do this, we'll define a minimum number min and a maximum number max. */
/* Here's the formula we'll use. Take a moment to read it and try to understand what this code is doing: */
// ! ----------------------------------------------

Math.floor(Math.random() * (max - min + 1)) + min

// ! ----------------------------------------------

function randomRange(myMin, myMax) {
return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}

// ! Use the parseInt Function.
/* The parseInt() function parses a string and returns an integer. */

function convertToInteger(str) {
return parseInt(str);
}
convertToInteger("56");

// ! Use the parseInt Function with a Radix.
/* The parseInt() function parses a string and returns an integer. It takes a second argument for the radix, which specifies the base of the number in the string. The radix can be an integer between 2 and 36. */
/* The function call looks like: */
// ! ------------------

parseInt(string, radix);

// ! ------------------

function convertToInteger(str) {
return parseInt(str, 2);
}
convertToInteger("10011");

// ! Use the Conditional (Ternary) Operator.
/* The conditional operator, also called the ternary operator, can be used as a one line if-else expression. */
/* The syntax is a ? b : c, where a is the condition, b is the code to run when the condition returns true, and c is the code to run when the condition returns false. */

function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}
checkEqual(1, 2);

// ! Use Multiple Conditional (Ternary) Operators.
/* In the previous challenge, you used a single conditional operator. You can also chain them together to check for multiple conditions. */
/* It is considered best practice to format multiple conditional operators such that each condition is on a separate line. */

function checkSign(num) {
    return num > 0 ? "positive"
    : num < 0 ? "negative"
    : "zero";
}
checkSign(10)

// ! Use Recursion to Create a Countdown.
/* In a previous challenge, you learned how to use recursion to replace a for loop. Now, let's look at a more complex function that returns an array of consecutive integers starting with 1 through the number passed to the function. */
/* As mentioned in the previous challenge, there will be a base case. The base case tells the recursive function when it no longer needs to call itself. It is a simple case where the return value is already known. There will also be a recursive call which executes the original function with different arguments. If the function is written correctly, eventually the base case will be reached. */
/* For example, say you want to write a recursive function that returns an array containing the numbers 1 through n. This function will need to accept an argument, n, representing the final number. Then it will need to call itself with progressively smaller values of n until it reaches 1. You could write the function as follows: */
// ! ---------------------------------

function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5));

// ! ---------------------------------
/* The value [1, 2, 3, 4, 5] will be displayed in the console. */
/* At first, this seems counterintuitive since the value of n decreases, but the values in the final array are increasing. This happens because the push happens last, after the recursive call has returned. At the point where n is pushed into the array, countup(n - 1) has already been evaluated and returned [1, 2, ..., n - 1]. */

function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.unshift(n);
    return arr;
  }
}

// ! Use Recursion to Create a Range of Numbers.
/* Continuing from the previous challenge, we provide you another opportunity to create a recursive function to solve a problem. */

function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    var numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}
