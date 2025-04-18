var fs = require('fs');

fs.readFile('text2.txt', 'utf-8', function (err, data) {
    if(err) throw err;
    var count = 1 ;
    for(let i = 0 ; i <= data.length ; i++){
        if(data[i] === " " ){
            count++;
        }
    }
    console.log(count);
});
