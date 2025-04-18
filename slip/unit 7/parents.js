var mysql = require('mysql2');

var con = mysql.createConnection({
    host : 'localhost' ,
    user : 'root' ,
    password : '9689',
    database : 'patients'
})

// createDatabase();
function createDatabase(){
    con.connect(function(err){
        if(err)
        throw err ;
    console.log("connected");
    con.query('CREATE DATABASE patients', function(err){
        if(err)
        throw err;
    })
    })
}
// crateTable();
function crateTable(){
    con.query('CREATE TABLE parent(pID INT ,pNAME varchar(255))',function(err){
        if(err)
        throw err ;
    console.log("table create")
    })
}

insertdata();
function insertdata(){
    var sql = 'INSERT INTO parent values ? ';
    var values = [
        [101 , 'tushar'],
        [102 , 'avantika'],
        [103,'nial']
    ]
    con.query(sql,[values] , function(err){
        if(err)
        throw err ;
    console.log("insert data");
    })
}