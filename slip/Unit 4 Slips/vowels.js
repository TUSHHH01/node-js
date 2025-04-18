var http = require('http');
// var url = ('url');
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var input = 'tushar is good boy';

    function vowelCount(input) {
        var count = 0; // Initialize count to 0
        var vowels = 'aeiouAEIOU';
        for (let char of input) {
            if (vowels.includes(char)) {
                count++;
            }
        }
        return count;
    }
    
    res.end('Number of vowels: ' + vowelCount(input));
}).listen(8080);

var http = require("http");
var url = require("url");

http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    var qString = url.parse(req.url, true).query;
    var inputString = qString.inputString;

    const vowels = "AEIOUaeiou";
    let count = 0;

    
    for (let char of inputString) {
      if (vowels.includes(char)) {
        count++;
      }
    }

    res.write("Original String: " + inputString + "<br>");
    res.write("Number of vowels in the string = " + count);
    res.end();
  })
  .listen(8080);

console.log("Server running at http://localhost:8080/");