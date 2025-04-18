// vowel.js
function countVowel(input) {
    
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of input) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    console.log("The number of Vowel is : " + count);
}

module.exports = countVowel;

