function getNamesOfUsersOlderThan30(users) {
    return users
        .filter(user => user.age > 30)  // Filter users older than 30
        .map(user => user.name);        // Map to their names
}


const users = [
    { name: 'Burhan', age: 21 },
    { name: 'Nauman', age: 30 },
    { name: 'Ali', age: 35 },
    { name: 'Shakir', age: 40 }
];

const names = getNamesOfUsersOlderThan30(users);
console.log(names); 
// Output: ['Ali', 'Shakir']
