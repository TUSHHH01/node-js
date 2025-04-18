var EventEmitter = require('events');

var em = new EventEmitter();

em.on('abc', function(data){
    
    console.log(`Hello ${data}`);
})

em.emit('abc', "Tushar" );