var http = require('http');
var url = require('url');


http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type' : 'text/html'});
    var q = url.parse(req.url, true).query;
    var str = q.str;

    function reverse(){
        reversestr = str.split('').reverse().join('');
        res.write(reversestr);
        res.end();
    }
    
    reverse();
}).listen(8080);
console.log("server");