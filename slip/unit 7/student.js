const mysql = require('mysql2');

const con = mysql.createConnection({
    host : 'localhost' ,
    user : 'root',
    password : '9689'
});

// Create database
con.query("CREATE DATABASE IF NOT EXISTS student_db", function(err){
    if(err) throw err;
    console.log("Database 'student_db' created");
    con.changeUser({ database: 'student_db' }, function(err) {
        if (err) throw err;
        createTable();
    });
});

// Create table
function createTable(){
    con.query('CREATE TABLE IF NOT EXISTS students (rollNo INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), course VARCHAR(255), totalMarks INT)', function(err, result){
        if(err) throw err;
        console.log("Table 'students' created");
        insertRecords();
    });
}

// Insert records
function insertRecords(){
    let records = [
        ['John', 'Mathematics', 85],
        ['Jane', 'Physics', 78],
        ['Michael', 'Chemistry', 92],
        ['Emma', 'Mathematics', 88],
        ['William', 'Physics', 79],
        ['Sophia', 'Chemistry', 90],
        ['James', 'Mathematics', 91],
        ['Olivia', 'Physics', 85],
        ['Benjamin', 'Chemistry', 87],
        ['Isabella', 'Mathematics', 82],
        ['Elijah', 'Physics', 80],
        ['Ava', 'Chemistry', 86],
        ['Mason', 'Mathematics', 89],
        ['Charlotte', 'Physics', 83],
        ['Liam', 'Chemistry', 84]
    ];

    con.query('INSERT INTO students (name, course, totalMarks) VALUES ?', [records], function(err, result){
        if(err) throw err;
        console.log("Records inserted");

        // Display records from highest to lowest marks
        displayRecords();

        // Accept course name from the user and display average marks
        calculateAverage();
    });
}

// Display records from highest to lowest marks
function displayRecords() {
    con.query('SELECT * FROM students ORDER BY totalMarks DESC', function(err, results) {
        if(err) throw err;
        console.log("Records from highest to lowest marks:");
        console.table(results);
    });
}

// Accept course name from the user and display average marks
function calculateAverage() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question("Enter the course name: ", function(course) {
        con.query('SELECT AVG(totalMarks) AS averageMarks FROM students WHERE course = ?', [course], function(err, result) {
            if(err) throw err;
            if (result[0].averageMarks === null) {
                console.log(`No students opted for the course '${course}'.`);
            } else {
                console.log(`Average marks of students in the course '${course}': ${result[0].averageMarks}`);
            }
            readline.close();
            con.end();
        });
    });
}
