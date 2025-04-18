
    var http = require('http');

var server = http.createServer(function (req, res) {
    var jsonData = {
        "subjects": [
            { "name": "Node.js", "marks": "22" },
            { "name": "Java", "marks": "20" },
            { "name": "PHP", "marks": "21" }
        ]
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    for (var i = 0; i < jsonData.subjects.length; i++) {
        res.write(jsonData.subjects[i].name);
        res.write('\t');
        res.write(jsonData.subjects[i].marks);
        res.write('\n');
    }
    res.end();
});

server.listen(8080);

console.log('Node.js web server is running on port 8080...');
