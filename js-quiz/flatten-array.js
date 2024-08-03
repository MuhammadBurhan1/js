function flattenArray(arr) {
    return arr.reduce(function(accumulator, currentValue) {
        // Check if current value is an array
        if (Array.isArray(currentValue)) {
            // Concatenate flattened current value (recursive call)
            return accumulator.concat(flattenArray(currentValue));
        } else {
            // Concatenate current value directly
            return accumulator.concat(currentValue);
        }
    }, []); // Start with an empty array as the initial value
}


const nestedArray = [1, [2, 3], [4, [5, 6]], 7];
const flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray); 
// Output: [1, 2, 3, 4, 5, 6, 7]
