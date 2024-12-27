//14. Write a js program to input angles of a triangle and check whether triangle is valid or not.

const { log } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 
rl.question("Enter angle of 1st side of triangle\n", (answer) =>{
    let angle1 = parseFloat(answer);
rl.question("Enter angle of 2nd side of triangle\n", (answer) =>{
    let angle2 = parseFloat(answer);
rl.question("Enter angle of 3rd side of triangle\n", (answer) =>{
    let angle3 = parseFloat(answer);
    if (angle1 + angle2 + angle3 === 180) {
        console.log("Triangle is valid");
    } else {
        console.log("Triangle is not valid");
    }
    rl.close();
})
})
}) 