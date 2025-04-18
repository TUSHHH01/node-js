var fs = require('fs');

// create file Sync
// fs.writeFileSync('./text1.txt' , 'HEllO tushar');


// creat file Async 
fs.writeFile('.textA1.ttxt' , 'Hello Tushar Async' ,function(err,data){
    if(err)
        throw err;
})



// var fileName = process.argv[2];
// var input = process.argv[3];
// fs.writeFile(fileName , input , function(err,data){
//     if(err) throw err;
// })

// fs.readFile(fileName , 'utf-8' , function(err,data){
//     if(err) throw err ;
//     console.log(data);
// })
