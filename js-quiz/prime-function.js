function isPrime(num) {
    // Numbers less than 2 are not prime
    if (num < 2) return false;
    
    // Check for factors from 2 up to num - 1
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    
    return true;
}


console.log(isPrime(1));  // Output: false
console.log(isPrime(2));  // Output: true
console.log(isPrime(3));  // Output: true
console.log(isPrime(4));  // Output: false
console.log(isPrime(29)); // Output: true
console.log(isPrime(100)); // Output: false
