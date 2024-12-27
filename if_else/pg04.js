//4. Write a js program to check whether a number is divisible by 5 and 11 or not.

const { log } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter any number to check whether it is divisible by 5 or 11 or not\n", (answer) => { 
    let a = parseInt(answer);
    if ( a % 5 == 0 && a % 11 == 0) {
        console.log("The number is divisible by both, 5 and 11");
    } else if (a % 5 == 0) {
        console.log("The number is only divisible by 5");
    } else if (a % 11 == 0) {
        console.log("The number is only divisible by 11");
        } else { console.log("The number is not divisible by 5 and 11");
        }
        rl.close;
        

} )