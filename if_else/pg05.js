//5. Write a js program to check whether a number is even or odd.

const { log } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter any number to check whether it's even or odd\n", (answer) => {
    let a = parseInt(answer);
    if( a % 2 == 0){
        console.log("The number you've entered is even");
    } else {
        console.log("The number you've entered is odd");
        
    }
    rl.close;
    
})