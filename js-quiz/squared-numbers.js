function squareArray(arr) {
    return arr.map(element => element * element);
}
const numbers = [4,12,14,15,16];
const squaredNumbers = squareArray(numbers);
console.log(squaredNumbers);  //Output [16,144,196,225,256]
