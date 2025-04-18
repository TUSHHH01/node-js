var http = require('http');
var url = require('url');

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type' : 'text/html'});
    var q = url.parse(req.url, true).query;
    var str = q.str;

    function palindrome(){
        var inputstr = str.toLowerCase();
        var reverseStr = inputstr.split('').reverse().join('');
        if(inputstr == reverseStr){
            res.write("It is palindrome");
        } 
        else{
            res.write("it is not palindrome");
        }
        res.end();
    }
    palindrome();

}).listen(8080)
