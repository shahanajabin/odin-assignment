// Exercise 1 - Troubleshooting exercise

const abTroubleshoot = require("./troubleshooting");

const result = abTroubleshoot();

if (result === 2) {
    console.log("Congrats! You got the correct answer");
} else if (typeof result === 'number') {
    console.log(`You returned the number ${result}, the result should be the number 2`);
} else {
    console.log(`You returned string "${result}", the result should be the number 2`);
}