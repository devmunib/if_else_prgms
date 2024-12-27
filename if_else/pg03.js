//3. Write a js program to check whether a number is negative, positive or zero.

const { log } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter any number to check whether it is negative, positive or zero\n ", (answer) => {
    let num = parseInt(answer);
    if (num > 0) {
        console.log("The number you've entered is positive");
    } else if (num < 0) {
        console.log("The number you've entered is negative");
    } else {
        console.log("The number you've entered is zero");
        
    } 
}) 