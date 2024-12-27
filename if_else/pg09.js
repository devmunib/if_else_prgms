//Write a js program to input any character and check whether it is alphabet, digit or special character.

const {log} = require("console");
const readline = require("readline");
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
})

rl.question("Enter any character to check whether it's an alphabat, digit or special character\n", (answer) => {
    let char = answer.trim();
    if (char.length !== 1) {
        console.log("Enter only single character...");
        }    else if (char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z') {
        console.log(char + " is an alphabet"); 
        }   else if (char >= '0' && char <= '9') {
                console.log(char + " is a digit");
       }  else { console.log(char + " is a special character");
                    }
                    
                    rl.close();
}) 