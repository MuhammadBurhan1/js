function shallowMerge(obj1, obj2) {
    const result = { ...obj1 }; // Start with a shallow copy of obj1

    // Iterate over each key in obj2
    for (const key in obj2) {
        if (obj2.hasOwnProperty(key)) {
            // If the value is an object in both obj1 and obj2, merge them
            if (typeof obj1[key] === 'object' && !Array.isArray(obj1[key]) &&
                typeof obj2[key] === 'object' && !Array.isArray(obj2[key])) {
                result[key] = { ...obj1[key], ...obj2[key] };
            } else {
                // Otherwise, take the value from obj2
                result[key] = obj2[key];
            }
        }
    }

    return result;
}

// Example usage:
const obj1 = {
    name: 'Muhammad Burhan',
    details: {
        age: 21,
        occupation: 'Software Engineer'
    }
};

const obj2 = {
    details: {
        occupation: 'Senior Software Engineer',
        address: '123 Main St'
    },
    email: 'burhan@example.com'
};

const merged = shallowMerge(obj1, obj2);
console.log(merged);
// Output:
// {
//     name: 'Muhammad Burhan',
//     details: {
//         age: 21,
//         occupation: 'Senior Software Engineer',
//         address: '123 Main St'
//     },
//     email: 'burhan@example.com'
// }
