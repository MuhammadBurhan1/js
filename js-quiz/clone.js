// Create the object
const person = {
    name: 'Muhammad Burhan',
    age: 21,
    occupation: 'Software Engineer'
};

// Function to clone the object
function cloneObject(obj) {
    return { ...obj };
}


const clonedPerson = cloneObject(person);

console.log(clonedPerson);
// Output: { name: 'Muhammad Burhan', age: 21, occupation: 'Software Engineer' }

// Verify that the cloned object is a separate instance
console.log(clonedPerson === person); // Output: false
