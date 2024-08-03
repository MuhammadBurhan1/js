function sumArray(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

const numbers = [10,2,4,5,6];
const sum = sumArray(numbers);
console.log(sum); // Output: 15
