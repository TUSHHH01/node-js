function circumfurance(radius){
    var p = 3.14 ;
    var c = 2 * p * radius;
    console.log("Circumfurance of circle : " + c) ;
}
function area(radius){
    var p = 3.14 ;
    var c = p * (radius*radius);
    console.log("Area of circle : " + c) ;
}
module.exports ={
                    circumfurance ,
                    area                         
                };
// module.exports = area : area ;
