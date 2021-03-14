function add(number1, number2) {
    return number1 + number2;
}

function calc(number1, number2, callback) {
    return callback(number1, number2);
}

console.log(calc(2,3,add))