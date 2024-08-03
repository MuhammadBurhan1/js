function getObjectEntries(obj) {
    return Object.entries(obj);
}

// Example usage:
const person = {
    name: 'Muhammad Burhan',
    age: 21,
    occupation: 'Software Engineer'
};

const entries = getObjectEntries(person);
console.log(entries); 
// Output: [['name', 'Muhammad Burhan'], ['age', 21], ['occupation', 'Software Engineer']]
