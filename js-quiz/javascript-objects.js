function isEmpty(obj) {
    // Check if the object has no own properties
    return Object.keys(obj).length === 0;
}

const emptyObject = {};
const nonEmptyObject = { key: 'value' };


console.log(isEmpty(emptyObject));   // Output: true
console.log(isEmpty(nonEmptyObject)); // Output: false
