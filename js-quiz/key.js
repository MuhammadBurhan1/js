function getObjectKeys(obj) {
    return Object.keys(obj);
}

// Example usage:
const person = {
    name: 'Muhammad Burhan',
    age: 21,
    occupation: 'Software Engineer'
};

const keys = getObjectKeys(person);
console.log(keys); 
// Output: ['name', 'age', 'occupation']
