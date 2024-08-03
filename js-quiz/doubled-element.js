function doubleIfGreaterThanTen(arr) {
    return arr.map(num => {
        if (num > 10) {
            return num * 2;
        } else {
            return num;
        }
    });
}


const numbers = [2,9,7,12,14];
const result = doubleIfGreaterThanTen(numbers);
console.log(result); // Output: [5, 24, 8, 30, 7]
