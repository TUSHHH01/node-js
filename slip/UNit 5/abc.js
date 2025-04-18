var fs = require('fs');
var http = require('http');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type' : 'text/html'});

    fs.readFile('text1.txt' , 'utf-8' , function(err,data){
        if(err) throw err ;
        
        
        var reverse = data.split('').reverse().join();
    //    var reverses data.split('').reverse().join('');
        res.end(reverse);
    })
}).listen(8080);