"use strict " // treat JS code as newer version;
const marvel_heroes = ["thor","ironman","spider"]
const dc_heroes =["batman","flash","superman"]
//console.log(marvel_heroes)
//console.log(dc_heroes)
//marvel_heroes.push(dc_heroes)// so,here push method push the dc_heroes array into marvel_heroes array.So,which mean that if second array is pushed into first array then the new array is not returned in case of push method but infact first array got another array in it.
//console.log(marvel_heroes)
//console.log(marvel_heroes[3][1])
//const marvel_dc= marvel_heroes.concat(dc_heroes)
//console.log(marvel_heroes)
//console.log(marvel_dc)// so concat method combines two array and returns new array .
const all_heroes =[...marvel_heroes,...dc_heroes]//now,using spread operator.
//console.log(all_heroes)
const another_array=[1,2,3,[4,5,6],7,[8,9,[10,11]],12]
//console.log(another_array)
const real_another_array=another_array.flat(4);
//console.log(real_another_array)
//console.log(Array.isArray(marvel_heroes))
//console.log(Array.isArray("Burhan"))
//console.log(Array.from("Burhan"));
//console.log(Array.from({name:"Burhan"}))// we have to tell them whether we have to make array of key or whether we have to make array of value.// interesting.
//let score1= 100;
//let score2= 200;
//let score3= 300;
//console.log(Array.of(score1,score2,score3))
// Write a function to find the maximum element in the array.

const my_arr=[10,20,40,60,90];
const maximum_element=function(my_arr){
    if(my_arr.length === 0){
        console.log("Array is empty")
    }
    let max_element = my_arr[0]
    for(let i=1;i<my_arr.length;i++){
        if(my_arr[i]>max_element){
        max_element=my_arr[i];
        }
    }
    return max_element;

    }
  const function_called=maximum_element(my_arr);
  console.log(function_called)
//  console.log(function_called)
// console.log(my_arr.length)
 // Objects methods practise
 //  const empty_obj= function(obj){
 //  return Object.keys(obj).length===0; 
 // }
 // const empty={};
 //  console.log(empty);
 //  console.log(empty_obj(empty))
 // Write a function to find minimum element in the array
//  const my_arr=[11,9,10,12,20,40];
//  const minimum_element=function(my_arr){
//     if (my_arr.length === 0){
//         console.log("array is empty!")
//     }
//     let min_element=my_arr[0];
//     for (let i = 1; i < my_arr.length; i++) {
//         // Update the minimum if a smaller element is found
//         if (my_arr[i] < min_element) {
//             min_element = my_arr[i];
//         }
//     }
//  return min_element  
//  }
//  console.log(minimum_element(my_arr));
//  const countries=["Belgium","Pakistan","USA","Indonesia"];
//  if(countries.length === 4){
//     console.log(true)
//  }
//  else
//  {
//     console.log(false)
//  }
//  function percentageOfWorld1(population){
//     return population/7900*100;
    
//  }
//  const populations=[10,1441,332,83]
//  const percentages=[];
// for (let  i=0;i<populations.length;i++){
//     const perc=percentageOfWorld1(populations[i])
//     percentages.push(perc);
    
// }
// console.log(percentages)