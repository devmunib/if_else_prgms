//12. Write a js program to input month number and print number of days in that month.

const {log} = require("console");
const readline = require("readline");
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
})
rl.question("Enter month number: ", (answer) => {
    let a = parseInt(answer);
    if( a == 1){
        console.log(" Days in January: 31");
    } else if(a == 2){
        console.log(" Days in February: 28");
    } else if(a == 3){
        console.log(" Days in March: 31");
    } else if( a == 4){
        console.log(" Days in April: 30");
    } else if(a == 5){
        console.log(" Days in May: 31");
    } else if(a == 6){
        console.log(" Days in June: 30");
    } else if(a ==7){
        console.log(" Days in July: 31");
    } else if(a ==8){
        console.log(" Days in August: 31");
    } else if(a ==9){
        console.log(" Days in September: 30");
    } else if(a ==10){
        console.log(" Days in October: 31");
    } else if(a ==11){
        console.log(" Days in November: 30");
    } else if(a ==12){
        console.log(" Days in December: 31");
    } else {
        console.log("Enter valid input...");
    }
})