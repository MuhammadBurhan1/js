"use strict";// treat all JS code as newer version
let score = "Muhammad Burhan";
//console.log(typeof score);
//console.log(typeof (score));
const valueInNumber= Number(score);
//console.log(valueInNumber);  
//console.log(typeof valueInNumber);
//console.log(typeof NaN);// So,here we have come to known that the type of NaN is a number.
//"33"=>33;
// null=>NaN // NaN stands for not a number whose datatype is number.
// boolean=>1 is for true , and 0 is for false
// undefined=>NaN 
let isLoggedIn= "Burhan";
const conversion=Boolean(isLoggedIn);
//console.log(typeof conversion);
//console.log(conversion);
// 1=>true
// 0=>false
// ""=>false
// "Burhan"=>true

let number=33;
const stringNumber= String(number);
//console.log(typeof stringNumber);
//console.log(stringNumber);

//Operations
let value = 3;
let negValue = -value;
console.log(negValue); 
//console.log(2+2);
//console.log(2-2);
//console.log(2*2);
//console.log(2**2);
//console.log(2/2);
//console.log(2%2);
let str1 = "hello";
let str2 = " Burhan ";
//let str3 = str1 + str2;
////console.log(str3);
////console.log("1" + 2);//12
////console.log(1 + "2");//12
////console.log("1" +2 +2);//122
//console.log(1+2+"2");//32
// console.log(true);
// console.log(typeof true); 
// console.log(+true);
// console.log(typeof +true);
// console.log(+"");
// console.log(typeof +"");

//let num1=num2=num3;
//num1=num2=num3=2+2;
//console.log(num1=num2=num3=2+2);
let gameCounter = 100;
gameCounter++; //gameCounter=gameCounter+1; that is an example of postfix operator So, in postfix operator,the increment operator returns the value before incrementing.
++gameCounter;//gameCounter+1=gameCounter ; that is an example of prefix operator so, in prefix operator the increment operator returns the value after incrementing. 
console.log(gameCounter);



