function getUsersOlderThan30(users) {
    return users.filter(user => user.age > 30);
}


const users = [
    { name: 'Burhan', age: 21 },
    { name: 'Nauman', age: 30 },
    { name: 'Ali', age: 35 },
    { name: 'Shakir', age: 40 }
];

const olderUsers = getUsersOlderThan30(users);
console.log(olderUsers); 
// Output: [{ name: 'Ali', age: 35 }, { name: 'Shakir', age: 40 }]
