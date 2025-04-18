var http = require('http');
var server = http.createServer(function (req, res) {
    // var q = url.parse(req.url, true).query;

    // res.write("my name is " + q.name);
if (req.url == '/') {
    res.writeHead(200,{ 'Content-Type' : 'text/html'});
    res.write('<html><H1>THIS IS BMCC HOME PAGE</H1></html>');
    res.end();
}
else if (req.url == "/about") {
    res.writeHead(200,{ 'Content-Type' : 'text/html'});
    res.write('<HTML><h1>This is about page of bmcc</h1></HTML>');
    res.end();
}
else if (req.url == "/contact") {
    res.writeHead(200,{'Content-Type' : 'text/html'});
    res.write('<html><h1>This is the contact page </h1></html>');
    res.end();
}
// else {
//  res.writeHead(400, {'Invalid request' });
// res.end('<html><body><h2>Invalid Request!</h2></body></html>');
// }
});
server.listen(8080);
console.log('Node.js web server is running on port 8080...');