function countElements(arr) {
    return arr.reduce(function(accumulator, currentValue) {
        // Check if the current element is already a key in the accumulator object
        if (accumulator[currentValue]) {
            // If it is, increment the count for that element
            accumulator[currentValue]++;
        } else {
            // If it isn't, initialize the count for that element to 1
            accumulator[currentValue] = 1;
        }
        // Return the updated accumulator object for the next iteration
        return accumulator;
    }, {}); // Start with an empty object
}

const elements = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const counts = countElements(elements);
console.log(counts); 
// Output: { apple: 3, banana: 2, orange: 1 }
