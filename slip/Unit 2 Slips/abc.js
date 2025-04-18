const fs = require('fs');

// Function to count characters
function countCharacters(data) {
    return data.length;
}

// Function to count words
function countWords(data) {
    return data.split(/\s+/).filter(word => word.length > 0).length;
}

// Function to count lines
function countLines(data) {
    return data.split('\n').length;
}

// Function to count vowels
function countVowels(data) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of data) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// Function to read file and display counts
function processFile(fileName) {
    fs.readFile(fileName, 'utf-8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }

        console.log('Number of characters:', countCharacters(data));
        console.log('Number of words:', countWords(data));
        console.log('Number of lines:', countLines(data));
        console.log('Number of vowels:', countVowels(data));
    });
}

// Process the file 'text.txt'
processFile('text.txt');
