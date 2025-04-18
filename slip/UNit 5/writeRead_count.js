var fs = require('fs');
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    // res.write("Processing request...");

 fs.readFile('text2.txt' , 'utf-8' , function(err,data){
    if(err) throw err; 
    var count = 0 ;
    for(let i = 0 ; i < data.length ; i++){
        if(data[i] === " " || data[i] === "\n"){
            count++;
        }
    }
    // console.log(count);
    res.end(count);
})

}).listen(8080);
console.log("server ");

