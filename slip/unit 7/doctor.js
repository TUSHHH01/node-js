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

    con.query("CREATE DATABASE IF NOT EXISTS doctor", function(err){
        if(err) throw err;
        console.log("Database created");
        createTable();
    });
}

// Create table
function createTable(){
    con.query('CREATE TABLE IF NOT EXISTS doc(DocID INT , DocName varchar(255))', function(err, result){
        if(err) throw err;
        console.log("Table created");
        insertData();
    });
}

// Insert data
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
        displayAffectedRows(result);
        // updateData();
    });
}

// Function to display affected rows
function displayAffectedRows(result){
    console.log("Affected Rows: " + result.affectedRows);
}

// Call the createDatabase function to start the operations


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