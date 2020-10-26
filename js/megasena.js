// Empty Array with random numbers
let megaSenaNumbers = [];
// Function Math.random() generates random numbers
// from 1 to N floating
let randomNumber = Math.random() * 60;
// for a higher integer random number Math.ceil(randomNumber)
console.log(randomNumber);
console.log(Math.ceil(randomNumber));
// if 0 was included, Math.ceil for lower integer
// Variables receives numbers from 1 to 60
let firstNumber = Math.ceil(Math.random() * 60);
let secondNumber = Math.ceil(Math.random() * 60);
let thirdNumber = Math.ceil(Math.random() * 60);
let fourthNumber = Math.ceil(Math.random() * 60);
let fifthNumber = Math.ceil(Math.random() * 60);
let sixthNumber = Math.ceil(Math.random() * 60);
// Printing numbers for testing
console.log(firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber, sixthNumber);
// Creating an Array for the Mega Sena numbers
let megaSenaNumbers = [firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber, sixthNumber];
// Verifying each number from the Class 08 array with 
// the six random numbers
let class08play = [4, 8, 15, 16, 23, 42];
for (let indexTest = 0; indexTest < class08play.length; indexTest += 1) {
    console.log(indexTest);
}
// Comparing each element from array class08play with
// the megaSenaNumbers array
for (let indexMega = 0; indexMega < megaSenaNumbers.length; indexMega += 1) {
    for (let indexPlay = 0; indexPlay < class08play.length; indexPlay += 1) {

    }
}
