var mysql = require('mysql2');

var con = mysql.createConnection({
    host : 'localhost' ,
    user : 'root',
    password : '9689',
    database : 'doctor' 
});

// Create database

function createDatabase(){
    con.connect(function(err){
        if(err) throw err;
        console.log("Connected to MySQL");
    });

    con.query("CREATE DATABASE doctor", function(err){
        if(err) throw err;
        console.log("Database created");
        
    });
}

// Create table
// createTable();
function createTable(){
    con.query('CREATE TABLE doc(DocID INT , DocName varchar(255))', function(err, result){
        if(err) throw err;
        console.log("Table created");
        
    });
}

// Insert data
insertData();
function insertData(){
    var sql = 'INSERT INTO doc (DocID, DocName) VALUES ? ';
    var values = [
        [101,'Tushar'],
        [102,'Shivaji'],
        [103,'Ashish']
    ];

    con.query(sql, [values], function(err, result){
        if(err) throw err;
        console.log("Data inserted");
        console.log(result);
        
    });
}

// Update data
// updateData();
function updateData(){
    var sql = 'UPDATE doc SET DocName = ? WHERE DocID = ?';
    var values = ['John', 101];

    con.query(sql, values, function(err, result){
        if(err) throw err;
        console.log("Data updated");
        displayAffectedRows(result);
        
    });
}

// Delete data
deleteData();
function deleteData(){
    var sql = 'DELETE FROM doc WHERE DocID = ?';
    var value = [102];

    con.query(sql, value, function(err, result){
        if(err) throw err;
        console.log("Data deleted");
        console.log(result);
        
    });
}

// Drop table
// dropTable();
function dropTable(){
    con.query('DROP TABLE doc', function(err, result){
        if(err) throw err;
        console.log("Table dropped");
        con.end(); // Close the MySQL connection
    });
}

// Function to display affected rows
// function displayAffectedRows(result){
//     console.log("Affected Rows: " + result.affectedRows);
// }

// Call the createDatabase function to start the operations
// createDatabase();
const mysql = require('mysql2');

const con = mysql.createConnection({
    host : 'localhost' ,
    user : 'root',
    password : '9689',
    database : 'doctor' 
});

// Left Join
con.query(`
    SELECT doctors.name AS doctor_name, patients.name AS patient_name
    FROM doctors
    LEFT JOIN patients ON doctors.id = patients.doctor_id
`, function(err, results) {
    if (err) throw err;
    console.log("Left Join Results:");
    console.table(results);
});

// Right Join
con.query(`
    SELECT doctors.name AS doctor_name, patients.name AS patient_name
    FROM doctors
    RIGHT JOIN patients ON doctors.id = patients.doctor_id
`, function(err, results) {
    if (err) throw err;
    console.log("Right Join Results:");
    console.table(results);
});

// Inner Join
con.query(`
    SELECT doctors.name AS doctor_name, patients.name AS patient_name
    FROM doctors
    INNER JOIN patients ON doctors.id = patients.doctor_id
`, function(err, results) {
    if (err) throw err;
    console.log("Inner Join Results:");
    console.table(results);
});

// Self Join
con.query(`
    SELECT p1.name AS patient_name, p2.name AS referring_doctor
    FROM patients AS p1
    INNER JOIN doctors AS d ON p1.doctor_id = d.id
    LEFT JOIN patients AS p2 ON d.id = p2.doctor_id AND p1.id != p2.id
`, function(err, results) {
    if (err) throw err;
    console.log("Self Join Results:");
    console.table(results);
});

con.end();
