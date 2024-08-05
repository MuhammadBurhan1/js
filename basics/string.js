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
let text = "Burhan";
console.log(text.charAt(2));
console.log(text.indexOf("r"));
console.log(text.charCodeAt(0));// it returns the unicode character of the string.unicode is a universal encoding standard.
console.log(text.constructor());
console.log(text.charAt(2).toUpperCase());
let new_name="Muhammad";
let old_name="Burhan";

const new_old=new_name.concat(old_name);
console.log(new_old);
// console.log(new_name.trim());
console.log(new_name.padStart(4,"Burhan"));// PadStart pads a string with multiple string until it reaches a given length.
console.log(gameName.split("-"));
const url1="www.muhammad%20burhan.com";
console.log(url1.includes("burhan"))// includes method tell us about whether that string alphabet is available in that variable.
console.log(url1.replace("%20","-"));
console.log(text.constructor); // Constructor method returns the function that created the string prototype.
console.log(text.endsWith("Burhan"));// endsWith checks if the following variable ends with "Burhan here"
console.log(text.lastIndexOf("n"));// it checks the last occurrence of "n" which is "5" as index start with "0";
console.log(text.fixed())





