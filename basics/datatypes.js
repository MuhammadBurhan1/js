"use strict"; // treat all JS code as newer version
//  const  number=prompt( Number("What is the correct number"));
// if (number==='23'){
//     console.log("This is the correct number");
// }
// else {
//     console.log("This is not the correct number");
// }
// alert(3+3); we are using node.js as an engine not browser so,it will not work here.
console.log(3+3); // code readibillity should be considered
console.log("Muhammad Burhan");
const name="Muhammad Burhan";
let  age=18;
let  isAllowed= true;
// number=> 2 to the power of 53
//bigint,string,symbol,boolean,null,undefined
//Basically symbol is a datatype whose value is unique and cannot be changed
//Boolean=>true/false
// null=> standalone value
// undefined
// symbol=> uniqueness // it  is mostly used in react and figma where we have to identify indiviual components.suppose we have made different components and we have to identify them then we use symbol datatype.
//object
console.log(typeof "MuhammadBurhan");
console.log(typeof(null));
console.log(typeof (undefined));
if(isAllowed && age>=18){
    console.log("The person is of age 18 or bigger");
}
else
{
    console.log("The person is less then age 18");
}