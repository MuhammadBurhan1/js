"use strict";// treat JS code as newer version
// array 
// let my_arr=[1,2,3,4,5,true,"burhan"];
//array is used to store multiple elements under single variable.
//"String method revision"
//let text="muhammad-burhan";
//console.log(text.split("-"));
//console.log(text.slice(0,15));
//console.log(text.lastIndexOf("n"));
//++++++++++++++++array+++++++++++++++++
let my_arr=[1,2,3,4,5,true,"burhan"];
const myHeroes=["nothing","1","2"];
const new_array=new Array(1,2,3,4,5);
//console.log(my_arr[0]);
//console.log(new_array[0]);
//console.log(typeof new_array);
//console.log(typeof my_arr);
//console.log(new_array.length);
//Array methods
//my_arr.push(6);// Here we push the element 6 into the array.
//my_arr.pop(6);// Here we pop the element 6 from the array.
//my_arr.pop();if we don't give the value in the argument by default the last element will be removed.
// my_arr.unshift(9); it adds the element to the zero index.
// my_arr.shift();// it removes the element from the zero index.
// console.log(my_arr);
// console.log(my_arr.includes(4));
// console.log(my_arr.indexOf(true))
const array1=new_array.join();// join method binds the array and convert the type into string.
//console.log(new_array);
//console.log(array1);
//console.log(typeof array1);
//Slice and Splice concept
console.log("A",my_arr);
console.log(my_arr.slice(1,3)); 
console.log("B",my_arr);
console.log(my_arr.splice(1,3));
console.log("C",my_arr);
//The difference between slice and splice method is that slice doesnot manipulate the array but splice does manipulate the array.If we used the splice method then the range of index element given to be spliced will be removed from the original and the original array will be manipulated .Suppose
// A [ 1, 2, 3, 4, 5, true, 'burhan' ] //Original array
// [ 2, 3 ]
// B [ 1, 2, 3, 4, 5, true, 'burhan' ]//after using slice method.
// [ 2, 3, 4 ]
// C [ 1, 5, true, 'burhan' ]// This is after using the splice method.
