var http = require('http');
// var url = require('url');
var server = http.createServer(function (req, res) {
    // res.writeHead(200, { "Content-Type": "text/html" });

    // var q = url.parse(req.url, true).query;
    // res.write("Original String: " + q.str + "<br>");
    // res.end();
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
    else if (req.url == "/contact") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><h2>This is contact us page.</h2></body></html>');
        res.end();
    }
})
    server.listen(8080);
console.log('Node.js web server is running on port 8080...');