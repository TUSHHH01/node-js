
/*

const fs = require('fs');

const input = process.argv[2];


fs.readFile('text2.txt', 'utf-8', function(err, data) {
    if (err) throw err;

    const words = data.split(input); 
    console.log(words.length-1);
});
/*


/*
Sync method
var data = fs.readFileSync('text2.txt', 'utf-8' )
{
    const words = data.split(input); 
    console.log(words.length-1);
}
*/

const fs = require('fs');
const http = require('http');

const input = process.argv[2];

http.createServer(function(req,res){
res.writeHead(200,{'Content-Type' : 'text/html'});


fs.readFile('text2.txt', 'utf-8', function(err, data) {
    if (err) throw err;

    const words = data.split(input); 
    // console.log(words.length-1);
    var abc = words.length-1;
    res.end(abc.toString());

})
}).listen(8080)
