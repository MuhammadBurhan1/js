function factorialIterative(n) {
    if (n < 0) return undefined; // Factorial is not defined for negative numbers
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}


console.log(factorialIterative(5)); //Output:120
console.log(factorialIterative(0)); //Output:1
