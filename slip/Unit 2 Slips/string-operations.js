/*
// string-operations.js

function checkPalindrome(str) {
    const cleanedStr = str.toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    if(cleanedStr==reversedStr){
        console.log("Palindrome");
    }
    else{
        console.log("Not Palindrome");
    }
}

module.exports =  checkPalindrome ;
*/

function shortestWord(str) {
    const words = str.split(' ');
    let shortest = words[0];
    for (let word of words) {
        if (word.length < shortest.length) {
            shortest = word;
        }
    }
    console.log("Shortest word :" + shortest) ;
}
function longestWord(str) {
    const words = str.split(' ');
    let longest = words[0];
    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    console.log("Longest word :" + longest) ; 
}
module.exports = { shortestWord, longestWord };


// App.js


// Stringoperator.js
// string-operations.js
function reverseString(input) {
    
    var reversedStr = input.split('').reverse().join('');

    console.log(reversedStr);}

module.exports = reverseString;

