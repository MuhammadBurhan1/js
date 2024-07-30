"use strict"; //treat all JS code as newer version
//console.log(2>1);//true
//console.log(2<=1);//false
//console.log(2!=1);//true
//console.log(2==="2");// This is an example of strict equality operator. strict equality operator doesnot support type conversion. //false
//console.log(2=="2");// This is an example of loosely equality operator.loosely equality operator support type conversion.// true
// console.log("2">1);
// console.log("02">1);
console.log(null>0);// but comparison operator doesnot convert null here.It will either convert it into NaN or either into zero or 0 // false
console.log(null==0);//but equality operator doesnot convert null here. It will either convert it into NaN or either into zero or 0//false.
console.log(null>=0);// So, here the comparison and equality operator combine convert null into a number.//true
console.log(undefined>0);
console.log(undefined==0);
console.log(undefined>=0); // if we use undefined it's value will always be in false so, as the type of undefined is undefined. 
console.log(typeof (undefined));

 

