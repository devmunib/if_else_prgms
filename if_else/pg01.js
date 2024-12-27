//1. Write a js program to find maximum between two numbers.


const { log } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter first digit\n", function(firstInput) {
    const a = parseInt(firstInput);
    rl.question("Enter second digit\n", function(secondInput) {
        const b = parseInt(secondInput);
        if (a > b) {
            console.log(  "The greater number is", a );
            
        } else if (b > a) {
            console.log(  "The greater number is", b );
        }
        rl.close();
})
})