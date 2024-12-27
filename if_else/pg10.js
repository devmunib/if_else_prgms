//10. Write a js program to check whether a character is uppercase or lowercase alphabet.

const {log} = require ("console")
const readline = require ("readline")
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
    })
    rl.question ("Enter an alphabet to check whether it's uppercase or lowercase alphabet\n", (answer) => {
        let char = answer;
        if (char.length !== 1){
            console.log("Enter single character only...");
         } else if (char == char.toUpperCase()){
            console.log("The alphabet u entered is uppercase...");
            
         } else if(char == char.toLowerCase()){
            console.log("The alphabet u entered is lowercase...");
            
         } else  {
            console.log("Plz entered some valid input...");
            
         }
        rl.close();
    })