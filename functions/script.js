// Write a function called add7 that takes one number and returns that number + 7.

function add7(num) {
    return num + 7;
}

// Write a function called multiply that takes 2 numbers and returns their product.

function multiply(a, b) {
    return a * b;
}
multiply(a, b);

// 

function capitalize(str) {
    if (str.length === 0) {
        return str;
    }
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

//

function lastLetter(str) {
    if (str.length === 0) {
        return '';
    }
    return str[str.length - 1];
}