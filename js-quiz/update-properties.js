function updateProperties(target, updates) {
    // Iterate over each key in the updates object
    for (const key in updates) {
        if (updates.hasOwnProperty(key)) {
            // Update the target object with the value from the updates object
            target[key] = updates[key];
        }
    }
    return target;
}

// Example usage:
const person = {
    name: 'Muhammad Burhan',
    age: 21,
    occupation: 'Software Engineer'
};

const updates = {
    age: 22,
    occupation: 'Senior Software Engineer',
    email: 'burhan@example.com'
};

const updatedPerson = updateProperties(person, updates);
console.log(updatedPerson);
// Output:
// {
//     name: 'Muhammad Burhan',
//     age: 22,
//     occupation: 'Senior Software Engineer',
//     email: 'burhan@example.com'
// }

