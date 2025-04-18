var http = require('http');

var server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type' : 'text/html'});

    res.write('<html> hiii guys</html>')
}).listen(8080);