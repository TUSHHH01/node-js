var http = require('http');
var server = http.createServer(function (req, res) {
if (req.url == '/') {
res.writeHead(200, { 'Content-Type': 'text/html' });
res.write('<html><body><h2>This is home page.</h2></body></html>');
res.end();
}
else if (req.url == "/about") {
res.writeHead(200, { 'Content-Type': 'text/html' });
res.write('<html><body><h2>This is about us page.</h2></body></html>');
res.end();
}
});
server.listen(8080);


