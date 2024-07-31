"use strict"; // treat all JS code as newer version
const name="Burhan";
const repoCount=50;
// console.log(name +"  " + repoCount + "Value");
console.log(`my name is ${name} and my repoCount is ${repoCount}`) //String Interpolation with embedded expression ,allowing multi-string line characters and special constructs called tagged templates // This is callled template literals .It is used with backtick character(`).
const gameName=new String('muhammad-burhan-hussain');
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('n'));
const newString=gameName.substring(0,4);
console.log(newString);
const value = 3;
const negValue= -value;
console.log(negValue);
const anotherString=gameName.slice(-8,5);
console.log(anotherString);
const newStringOne="   Burhan  ";
console.log(newStringOne);
console.log(newStringOne.trim());// trim is used to remove the spaces between the string.
const gameOne=new String(" Bhani ");
console.log(gameOne);
console.log(gameOne.trim());
console.log(gameOne.padEnd(4,"0"));//It will pad the string until it reaches the length 4.
const url="https://www.burhan.com/muhammadburhan%20hussain";
console.log(url.replace("%20","-"));
console.log(url.includes("1"));
console.log(gameName.split("-"));// Spilt method will convert the string into arrays.
let text = " Burhan ";
console.log(text.charAt(2));
console.log(text.indexOf("r"));
console.log(text.charCodeAt(0));// it returns the unicode character of the string.unicode is a universal encoding standard.
console.log(text.constructor());




