var fs = require('fs');

fs.readFile('text2.txt' , 'utf-8' , function(err,data){
    if(err) throw err ;

    var count = 1;
    for(let i = 1 ; i < data.length ; i++ ){
        if(data[i] == "\n"){
            count++;
        }
    }
    console.log(count);
})


var fs = require('fs');
var http = require('http');

http.createServer(function(req,res){
    res.writeHead(200 , {'Content-Type' : 'text/html'});


fs.readFile('text2.txt' , 'utf-8' , function(err,data){
    if(err) throw err ;

    var count = 1;
    for(let i = 1 ; i < data.length ; i++ ){
        if(data[i] == "\n"){
            count++;
        }
    }
    console.log(count);
    res.end(count.toString());
})
}).listen(8080);
