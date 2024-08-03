function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}

// Example usage:
const obj1 = {
    name: 'Muhammad Burhan',
    age: 21
};

const obj2 = {
    occupation: 'Software Engineer',
    country: 'Pakistan'
};

const merged = mergeObjects(obj1, obj2);

console.log(merged);
// Output: { name: 'Muhammad Burhan', age: 21, occupation: 'Software Engineer', country: 'Pakistan' }
