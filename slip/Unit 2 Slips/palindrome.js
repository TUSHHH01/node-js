function isPalindromeString(inputString) {
    const alphanumericStr = inputString.toLowerCase();
    const reversedStr = alphanumericStr.split('').reverse().join('');
    if (alphanumericStr === reversedStr) {
        console.log(inputString + " is a palindrome.");
    } else {
        console.log(inputString + " is not a palindrome.");
    }
}

function isPalindromeNumber(inputNumber) {
    const numStr = inputNumber.toString();
    const reversedStr = numStr.split('').reverse().join('');
    if (numStr === reversedStr) {
        console.log(inputNumber + " is a palindrome.");
    } else {
        console.log(inputNumber + " is not a palindrome.");
    }
}

module.exports = { isPalindromeString, isPalindromeNumber };
