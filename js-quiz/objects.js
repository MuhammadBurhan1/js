function groupByProperty(arr, key) {
    const result = {};

    for (let i = 0; i < arr.length; i++) {
        const obj = arr[i];
        const groupKey = obj[key];
        const rest = {};

        // Copy properties except the specified key
        for (const prop in obj) {
            if (obj.hasOwnProperty(prop) && prop !== key) {
                rest[prop] = obj[prop];
            }
        }

        // Initialize the array for this key if it doesn't exist
        if (!result[groupKey]) {
            result[groupKey] = [];
        }

        // Add the rest of the properties to the corresponding group
        result[groupKey].push(rest);
    }

    return result;
}

// Example usage:
const data = [
    { id: 1, category: 'A', value: 10 },
    { id: 2, category: 'B', value: 20 },
    { id: 3, category: 'A', value: 30 },
    { id: 4, category: 'B', value: 40 },
    { id: 5, category: 'C', value: 50 }
];

const result = groupByProperty(data, 'category');
console.log(result);
// Output:
// {
//     A: [{ id: 1, value: 10 }, { id: 3, value: 30 }],
//     B: [{ id: 2, value: 20 }, { id: 4, value: 40 }],
//     C: [{ id: 5, value: 50 }]
// }
