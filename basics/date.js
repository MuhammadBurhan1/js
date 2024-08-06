"use strict " // treat all JS code as newer version;
// Number methods revision
 //const hundreds=1000000;
// console.log(hundreds.toPrecision(2));
// console.log(hundreds.toFixed(2));
// console.log(hundreds.toString().length);
//console.log(hundreds.toLocaleString());// it will convert the digit according to american standard by default.They are values of other standard.
//console.log(hundreds.toExponential());// it will convert the value into exponential number.
 // Comparison revision
// if (null>=0){
//     console.log(true);
// }
// else{
//     console.log(false);
// }
// if(null==0){
//     console.log(true)
// }
// else {
//     console.log(false)
// }
// if(null>0){
//     console.log(true);
// }
// else
// {
//     console.log(false);
// }
//++++++++++++++++++++DATE+++++++++++++++++++
//Dates
let date=new Date();// DATE is actually measured in milli seconds.
//console.log(date.toString());
//console.log(date.toDateString());
//console.log(date.toISOString());
//console.log(date);
//console.log(date.toJSON());
//console.log(date.toLocaleString());
//console.log(date.toLocaleDateString());
//console.log(date.toLocaleTimeString());
//console.log(date.toTimeString());
//console.log(date.toUTCString());
//console.log(typeof date);// The type of date is object as we created the instance of object before.
//let myCreatedDate=new Date("2024-01-14");// yy-mm-dd// As month start from "0";
let myCreatedDate=new Date("01-14-2024");//mm-dd-yy// As month start from "0";
//let am_pm=myCreatedDate.toLocaleTimeString();
//console.log(am_pm);
//console.log(myCreatedDate.toDateString());
let myTimeStamp=Date.now();
//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
console.log(Math.floor(myTimeStamp/1000));
let newDate=new Date(2024,0,12,2,0,0);
//console.log(newDate.getMonth());
//console.log(newDate.getMinutes());
//console.log(newDate.getDay());
//console.log(newDate.getFullYear());
//console.log(newDate.getMilliseconds())
let localeString=newDate.toLocaleString('default',{
    hour12:true,// if hour12 is false which mean the time will be displayed in 24 hour format  and if hour12 is true then the time will be displayed in 12 hour format and if the value is default then it depends upon the locales.
    weekday:"long",
    day:"numeric",
    timeZone:"UTC",
    // hourCycle:"h24",
    hour: "2-digit",
    minutes:"2-digit",
     second:"2-digit",
    
    
    
}
);
console.log(localeString);
console.log(newDate.toLocaleTimeString());

