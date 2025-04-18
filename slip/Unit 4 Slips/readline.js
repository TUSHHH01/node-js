const http = require('http');
const readline = require('readline');

 readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateAge(dob) {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    // const month = today.getMonth() - birthDate.getMonth();
    return age;
}

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});

    // Display a simple form to collect user input
    res.write('<html><body>');
    res.write('<h1>Welcome!</h1>');
    res.write('<form method="POST" action="/submit">');
    res.write('<label >First Name:</label><br>');
    res.write('<input type="text"  name="firstName"><br>');
    res.write('<label >Last Name:</label><br>');
    res.write('<input type="text"  name="lastName"><br>');
    res.write('<label >Date of Birth (dd/mm/yyyy):</label><br>');
    res.write('<input type="text" name="dob"><br>');
    res.write('<button type="submit">Submit</button>');
    res.write('</form>');

    if (req.method === 'POST' && req.url === '/submit') {
        let data = '';
        req.on('data', function(chunk) {
            data += chunk;
        });
        req.on('end', function() {
            const formData = new URLSearchParams(data.toString());
            const firstName = formData.get('firstName');
            const lastName = formData.get('lastName');
            const dob = formData.get('dob');

            const age = calculateAge(dob);

            // Display the greeting with full name and age
            res.write(`<h2>Hello, ${firstName} ${lastName}!</h2>`);
            res.write(`<p>You are ${age} years old.</p>`);
            res.end('</body></html>');
        });
    } else {
        res.end('</body></html>');
    }
}) .listen(8080);