const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) throw err;

    const reversedWords = data.split(' ').map(word => word.split('').reverse().join('')).join(' ');

    console.log(reversedWords);
});
