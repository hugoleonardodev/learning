let firstNumber = randomNumber(90);
//...

function randomNumber (maxValue) {
    return Math.ceil(Math.random() * masValue);
};

function generateNumber () {
    let numbers = [];
    for (let index = 0; index < 6; index += 1) {
        numbers.push(randomNumber(60));
    }
    return numbers;
};

let megaSenaNumbers = generateNumber();
console.log(megaSenaNumbers);
