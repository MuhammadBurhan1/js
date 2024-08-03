function extractNames(users) {
    return users.map(user => user.name);
}

// Example usage:
const users = [
    { name: 'Muhammad Burhan', age: 21 },
    { name: 'Nauman', age: 30 },
    { name: 'Ali', age: 35 }
];

const names = extractNames(users);
console.log(names); 
