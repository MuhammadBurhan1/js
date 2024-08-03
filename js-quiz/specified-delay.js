function runAfterDelay(func, delay) {
    setTimeout(func, delay);
}


function sayHello() {
    console.log('Hello after delay!');
}

//Run Hello after delay after 4000 milliseconds(4 seconf)
runAfterDelay(sayHello, 4000);
