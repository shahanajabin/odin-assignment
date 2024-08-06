// Exercise 4 - follow.js

const firstName = "shahana";
const lastName = "Jabin";
const thisYear = 2024;
const birthYear = 2003;
const fullName = firstName + " " + lastName;
const age = thisYear - birthYear;

const greeting = "Hello! My Name is " + fullName + " " + "and I am " + age + " Years old.";
console.log(greeting);

/*module.exports = {
testGroup: "a",
    greeting,
    birthYear,
    thisYear,
    firstName,
    lastName
}*/

module.exports = {
    testGroup: "b",
    greeting,
    birthYear,
    thisYear,
    firstName,
    lastName,
    fullName,
    age
}
