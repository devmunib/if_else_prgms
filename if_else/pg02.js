//2. Write a js program to find maximum between three numbers.

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
        rl.question("Enter third digit\n", function(thirdInput) {
            const c = parseInt(thirdInput);
        if (a > b && a > c) {
            console.log(  "The greater number is", a );
            
        } else if (b > a && b > c) {
            console.log(  "The greater number is", b );
        }  else  {
            console.log(  "The greater number is", c );
        }
        rl.close();
})
})
})