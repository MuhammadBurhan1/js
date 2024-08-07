
function findMaximum(arr) {
    if (arr.length === 0) {
        console.log("Array is empty");
    }

    let maxElement = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxElement) {
            maxElement = arr[i];
        }
    }
    
    return maxElement;
}
const arr = [20,22,10,14,17,16];
console.log(findMaximum(arr));  // Output: 22
