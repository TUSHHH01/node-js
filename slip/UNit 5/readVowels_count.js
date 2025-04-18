// var fs = require('fs');

// fs.readFile('text2.txt' , 'utf-8' , function(err,data){
//     if(err) throw err;

//     var vowels = 'aeiouAEIOU';
//     var count = 0 ;
//     for(let i=1 ; i < data.length ; i++ ){
//         if(vowels.includes(data[i])){
//             count++
//         }
//     }
//     console.log(count);
// })

/*
var data = fs.readFileSync('text2.txt' , 'utf-8' )
{

    var vowels = 'aeiouAEIOU';
    var count = 0 ;
    for(let i=1 ; i < data.length ; i++ ){
        if(vowels.includes(data[i])){
            count++
        }
    }
    console.log(count);
}
*/

var fs = require('fs');
var http = require('http');

http.createServer(function(req,res){
res.writeHead(200, {'Content-Type' : 'text/html'});

fs.readFile('text2.txt' , 'utf-8' , function(err,data){
    if(err) throw err;

    var vowels = 'aeiouAEIOU';
    var count = 0 ;
    for(let i=1 ; i < data.length ; i++ ){
        if(vowels.includes(data[i])){
            count++
        }
    }
    res.end(count.toString());
})
}).listen(8080);

