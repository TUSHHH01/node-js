var mysql = require('mysql2');
var readline = require('readline');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: '' // Use 'hostipat_db' as specified
});

// Create database
function createDatabase() {
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected to MySQL");

        con.query("CREATE DATABASE IF NOT EXISTS hostipat_db", function(err) {
            if (err) throw err;
            console.log("Database created");
            createTables();
        });
    });
}

// Create tables
function createTables() {
    const createDoctorTable = `
        CREATE TABLE IF NOT EXISTS doctor (
            DocID INT AUTO_INCREMENT PRIMARY KEY,
            DocName VARCHAR(255) NOT NULL
        )
    `;

    const createPatientTable = `
        CREATE TABLE IF NOT EXISTS patient (
            PatientID INT AUTO_INCREMENT PRIMARY KEY,
            PatientName VARCHAR(255) NOT NULL,
            DoctorID INT,
            FOREIGN KEY (DoctorID) REFERENCES doctor(DocID)
        )
    `;

    con.query(createDoctorTable, function(err) {
        if (err) throw err;
        console.log("Doctor table created");
        
        con.query(createPatientTable, function(err) {
            if (err) throw err;
            console.log("Patient table created");
            insertData();
        });
    });
}

// Insert data
function insertData() {
    const doctors = [
        ['Tushar'],
        ['Shivaji'],
        ['Ashish']
    ];

    const patients = [
        ['John Doe', 1], // DoctorID corresponds to Tushar
        ['Jane Smith', 2], // DoctorID corresponds to Shivaji
        ['Emily Jones', 1] // DoctorID corresponds to Tushar
    ];

    const insertDoctors = 'INSERT INTO doctor (DocName) VALUES ?';
    const insertPatients = 'INSERT INTO patient (PatientName, DoctorID) VALUES ?';

    con.query(insertDoctors, [doctors], function(err) {
        if (err) throw err;
        console.log("Doctors inserted");

        con.query(insertPatients, [patients], function(err) {
            if (err) throw err;
            console.log("Patients inserted");
            promptForDoctor();
        });
    });
}

// Prompt for doctor name and display patients
function promptForDoctor() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter doctor name to list patients: ', function(doctorName) {
        fetchPatientsByDoctor(doctorName);
        rl.close();
    });
}

// Fetch patients by doctor name
function fetchPatientsByDoctor(doctorName) {
    const query = `
        SELECT p.PatientName 
        FROM patient p
        JOIN doctor d ON p.DoctorID = d.DocID 
        WHERE d.DocName = ?
    `;

    con.query(query, [doctorName], function(err, results) {
        if (err) throw err;
        console.log(`Patients being treated by Dr. ${doctorName}:`);
        console.table(results);
        con.end(); // Close the connection
    });
}

// Start the process
createDatabase();
