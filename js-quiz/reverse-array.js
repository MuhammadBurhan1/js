function reverseArray(arr) {
    let reversed = [];  // Initialize an empty array to store reversed elements
    
    // Loop through the original array from end to start
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);  // Add each element to the new array
    }
    
    return reversed;  // Return the reversed array
}
const arr = [12,10,8,9,5];
console.log(reverseArray(arr));  //Output [5,8,9,10,12]

