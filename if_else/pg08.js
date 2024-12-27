//8. Write a js program to input any alphabet and check whether it is vowel or consonant.

const { log } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 
rl.question("Enter any alphabet to check whether it's vowel or consonant\n", (answer) => {
    const a = answer.toLowerCase();  
    if (a.length === 1 && /^[a-z]$/.test(a)) {  
        if (['a', 'e', 'i', 'o', 'u'].includes(a)) {
            console.log("The alphabet you've entered is a vowel.");
        } else {
            console.log("The alphabet you've entered is a consonant.");
        }
    } else {
        console.log("Please enter a valid single alphabet.");
    }
    rl.close;
})