var http = require('http');
var url = require('url');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});

    var q = url.parse(req.url, true).query;
    var num1 = q.num1;
    var num2 = q.num2;
    var operation = q.operation;
    var result;
    switch(operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num1 / num2;
            break;
        default:
            result = 'Invalid operation';
    }

    res.end('Result: ' + result);
}).listen(8080);
