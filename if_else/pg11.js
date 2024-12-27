//11. Write a js program to input week number and print week day.

const { log } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter any digit from 1 to 7 to check the week day\n", (answer) => {
    let a = answer;
    if( a == 1 ){
        console.log("Today is Monday...");
        
     } else if(a == 2){
        console.log("Today is Tuesday...");
        
     } else if(a == 3){
        console.log("Today is Wednesday...");
     } else if(a == 4){
        console.log("Today is Thursday...");
     } else if(a == 5){
            console.log("Today is Friday...");
     } else if(a == 6){
        console.log("Today is Saturday...");
     } else if(a == 7){
        console.log("Today is Sunday...");
     } else {
        console.log("Enter valid input...");
        
     }


     rl.close();
})