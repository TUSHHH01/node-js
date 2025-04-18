function factorial(input){
    var b = 1;
    for(i = 1 ; i <= input ; i++){
        // b *= i ; 
        b = b * i ; 
    }
    console.log("The factorial of given Number is : " + b) ;
}
module.exports = factorial ;