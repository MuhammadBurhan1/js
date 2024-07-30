"use strict";// treat all JS code as newer version
// There are two types of data 
//Primitive and nonPrimitive;
 // That how we store datatypes in memory and access . Primitive datatype are  callByValue which mean we copy these datatypes from memory and not take it as a reference.
 //7 types:Number,String,Null,Boolean,Undefined,Symbol,BigInt.
 //Reference(Non primitive):
 //Array,Objects,Functions these non primitive are based on callByReference value.
 //JavaScript is  a dynamic typed language which mean that datatypes are assigned to values not variables.
 const score=100;
 const score_1=100.6;
 const isLoggedIn=true;
 const country="Pakistan";
 let state;
 const Id=Symbol("123");
 const anotherId=Symbol("123");
 console.log(Id===anotherId);
 const bigNumber=24340934034903409843843439040350948904n;
 console.log(bigNumber);
 console.log(typeof (bigNumber));
 const heroes=["Burhan","Hero1","Hero2"];
 console.log(heroes);
 console.log(typeof (heroes));
 const myObj={
    name:"Muhammad Burhan",
    age:21,
    education:"bachelor in CS",
    province:"Punjab"


 };
 console.log(myObj);
 console.log(typeof (myObj))
const myFunction=function(age){
    
    let yearBorn=2024-age;
    return yearBorn;
    

    
}
const yearBorn1=myFunction(22);
console.log(yearBorn1);
console.log(typeof (anotherId));
//The type of non-primitive datatypes is object.






