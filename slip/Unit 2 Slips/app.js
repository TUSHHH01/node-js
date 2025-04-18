/*
// card number 
const maskCardNumber = require("./card.js");

var cardnumber = process.argv[2];
 
maskCardNumber(cardnumber);
*/

/*
// leap year

const cheakleapYear = require('./leapyear.js');

var year = process.argv[2];

cheakleapYear(year);
*/

/*
// vowel
const countVowel = require('./vowel.js');

// const input = process.argv[2];
const input = process.argv.slice(2).join(' ');

countVowel(input);
*/

/*
// palindrome 
const { isPalindromeString, isPalindromeNumber } = require('./palindrome.js');

var input = process.argv[2];

if (isNaN(input)) {
    isPalindromeString(input);
} else {
    isPalindromeNumber(input);
}
*/

/*

// factorial 
const factorial = require('./factorial.js');

const input = process.argv[2] ;

factorial(input);

*/

/*
// area of circle 

const circle = require('./circle.js');

const radius = process.argv[2];

circle.circumfurance(radius);
circle.area(radius);
*/


/*
// area of rectangle 

const rectangle = require('./rectangal.js');

var l = process.argv[2]; 
var b = process.argv[3]; 

rectangle(l,b);
*/



/*
// calculator

const calculator = require('./calculator');

const num1 = process.argv[2];
const num2 = process.argv[3];
const operation = process.argv[4].toLowerCase();


switch (operation) {
    case 'addition':
        result = calculator.addition(num1, num2);
        break;
    case 'subtract':
        result = calculator.subtract(num1, num2);
        break;
    case 'multiply':
        result = calculator.multiply(num1, num2);
        break;
    case 'divide':
        result = calculator.divide(num1, num2);
        break;
    default:
        result = "Invalid operation!";
}

console.log("The result is: "+ result);
*/

/*
// paper program

var checkPalindrome  = require('./string-operations');
var input = process.argv[2];
checkPalindrome(input);
*/


//paper program 

const { shortestWord, longestWord } = require('./string-operations');
var input = process.argv.slice(2).join(' ');

shortestWord(input);
longestWord(input);


//  /*
// const reversedStr = require('./string-operations');
// const input = process.argv[2];
// reversedStr(input);