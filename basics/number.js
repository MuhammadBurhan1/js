"use strict"// treat JS code as newer version;
const score = 400;
const balance = new Number(100);
//console.log(balance);
//console.log(score);
//console.log(score.constructor);// Constructor basically returns the function that created the string prototype.
const conv_string= balance.toString().length;
//console.log(typeof conv_string);
//console.log(balance.toFixed("2"));
const otherNumber=123.9856;
//console.log(otherNumber.toPrecision(5));
const hundreds=1000000;
//console.log(hundreds.toLocaleString());
//console.log(hundreds.toExponential()); //It returns a variable into exponential notation.
//+++++++++++++++++Maths++++++++++++++++++++
//console.log(Math);
//console.log(Math.abs(-4));// abs(absolute) changes negative into positive value.
//console.log(Math.round(4.9));
//console.log(Math.ceil(4.9));
//console.log(Math.floor(5.3))
//console.log(Math.sqrt(2));
//console.log(Math.min(4,2,6,23,9));
//console.log(Math.max(2,4,6,9,24,100));
// console.log(Math.floor(Math.random()*10)+1);
const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min
);