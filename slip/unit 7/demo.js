var mysql = require('mysql2');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
    // database: 'actor'
})

// createdatabase();
function createdatabase() {
    con.connect(function (err) {
        if (err) {
            throw err;
        }
        console.log("Connected");
    })
    con.query("create database actors", function (err) {
        if (err) throw err;
        console.log("database created!!!");
    })
}

createtable();
function createtable() {
    con.query("create table act(actID INT,actName varchar(255))", function (err, result, fields) {
        if (err) {
            throw err;
        }
        console.log("Table Created...");
    })
}



// insertData();
function insertData() {
    var sql = "Insert into act values ? ";
    var values = [
        [101, 'shahrukh'],
        [102, 'akshay'],
        [103, 'salman'],
        [104, 'amir']
    ]
    con.query(sql, [values], function (err, result) {
        if (err) {
            throw err;
        }
        console.log("data inserted");
        console.log(result);
    })
}



// query();
function query(){
    var id = process.argv[2];
    console.log(`Enter Id : ${id}`);
    var sql = "Select * from act Where actId = ? ";
    con.query(sql,[id],function(err,result){
        if(err){
            throw err;
        }
        console.log("Query Executed...");
        console.log(result);
    })
}
