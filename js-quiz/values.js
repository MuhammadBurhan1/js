function getObjectValues(obj) {
    return Object.values(obj);
}

// Example usage:
const person = {
    name: 'Muhammad Burhan',
    age: 21,
    occupation: 'Software Engineer'
};

const values = getObjectValues(person);
console.log(values); 
// Output: ['Muhammad Burhan', 21, 'Software Engineer']
