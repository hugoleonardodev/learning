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
// the megaSenaNumbers array and number of hits
let numberOfHits = 0;
for (let indexMega = 0; indexMega < megaSenaNumbers.length; indexMega += 1) {
    for (let indexPlay = 0; indexPlay < class08play.length; indexPlay += 1) {
        if (megaSenaNumbers[indexMega] === class08play[indexPlay]) {
            numberOfHits += 1;
        }
    }
}
// Printing results
console.log(`Mega-Sena: ${megaSenaNumbers}`);
console.log("Class 08 play: " + class08play);
console.log("Number of hits: " + numberOfHits);

// for N class plays, another for is needed with
// the plays inside a new array called megaSenaGames
// this arrays contains another arrays
// so that we can make N tests for N plays

let class08play2 = [13, 21, 24, 35, 45, 54];
let class08play3 = [ 2, 3, 6, 14, 15, 17];

let megaSenaGames2 = [class08play, class08play2, class08play3];
for (let games = 0; games < megaSenaNumbers.length; games += 1) {
    let numberOfHits2 =0;
    for (let indexMega2 = 0; indexMega2 < megaSenaGames2[games]; indexMega2 += 1) {
        for (let indexPlay2 = 0; indexPlay2 < megaSenaGames2[games]; indexPlay2 +=1) {
            if (megaSenaNumbers[indexMega2] === megaSenaGames2[games]) {
                numberOfHits2 =+ 1;
            }
        }
    }
    console.log(numberOfHits2);
}