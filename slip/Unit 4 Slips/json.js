var http = require('http');
var server = http.createServer(function (req, res) {
if (req.url == '/data') {
res.writeHead(200, { 'Content-Type': 'application/json' });
res.write(JSON.stringify({ message: "Hello World" }));
res.end();
}
});
server.listen(8080);
console.log('Node.js web server is running on port 8080...');