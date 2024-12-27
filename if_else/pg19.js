//Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F

const {log} = require ("console")
const readline = require ("readline")
const rl = readline.createInterface({
input : process.stdin,
output : process.stdout,
})
rl.question("Enter the marks obtained in Physics out of 100\n", (ans1) => {
    rl.question("Enter the marks obtained in Chemistry out if 100\n", (ans2) =>{
        rl.question("Enter the marks obtained in Biology out of 100\n", (ans3) =>{
            rl.question("Enter the marks obtained in Mathematics out of 100\n", (ans4) =>{
                rl.question("Enter the marks obtained in Computer out of 100\n", (ans5) =>{
                    let marks1 = parseInt(ans1);
                    let marks2 = parseInt(ans2);
                    let marks3 = parseInt(ans3);
                    let marks4 = parseInt(ans4);
                    let marks5 = parseInt(ans5);
                    let sum= marks1+marks2+marks3+marks4+marks5;
                    let percentage = (sum / 500) * 100;
                    let grade;
                    if (percentage >= 90) {
                        grade = "A";
                    } else if (percentage >= 80) {
                        grade = "B";
                    } else if (percentage >= 70) {
                        grade = "C";
                    } else if (percentage >= 60) {
                        grade = "D";
                    } else if (percentage >= 40) {
                        grade = "E";
                    } else {
                        grade = "F";
                    }
                    console.log(`The grade you've obtained is ${grade} and the percentage you've obtained is ${percentage.toFixed(2)}%`);
                    rl.close();
                })
            })
        })
    })
})
