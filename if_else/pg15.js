//16. Write a js program to check whether the triangle is equilateral, isosceles or scalene triangle.

const { log } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter the first side of the triangle:\n ", (side1) => {
    rl.question("Enter the second side of the triangle:\n ", (side2) => {
        rl.question("Enter the third side of the triangle:\n ", (side3) => {
            rl.close();
            if (side1 == side2 && side2 == side3) {
                console.log("The triangle is equilateral.");
                } else if (side1 == side2 || side2 == side3 || side1 == side3) { 
                        console.log("The triangle is isosceles.");
                        } else {
                            console.log("The triangle is scalene.");
                            }
                            });
                        });
                    });
                            