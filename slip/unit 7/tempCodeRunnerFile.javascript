sertData(){
    var sql = "INSERT INTO doctor VALUES ?";
    var values = [
        [1,'yash'],
        [2,'atharv'],
        [3,'pradumna'],
        [4,'rudra'],
        [5,'raghav']
    ];
    con.query(sql,[values],function(err,result){
        if(err){
            throw err;
        }
        console.log('Data inserted');
    });
}