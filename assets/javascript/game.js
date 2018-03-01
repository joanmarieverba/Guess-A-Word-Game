"use strict"

let gameNumber = 0;
let guessNumber = 12;

const wordList = ["Mercury", "Venus", "Earth", "Moon", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto", "Sun", "Stars", "Galaxy", "Supernova", "Asteroids", "Titan", "Nebula", "Orbit", "Comet", "Satellite"]

let currentWord = wordList[gameNumber];
let currentWordArray = currentWord.split('');
let numberOfLetters = currentWordArray.length;
let displayWord = ["_"];
let alreadyGuessed = " ";
let i = 1;

for (i = 1; i < numberOfLetters; i++) {
    displayWord.push("_");
}

// display current word with underscores in place of letters
let display = displayWord.toString();
document.getElementById("demo").innerHTML = display.replace(/,/g , " ");

//display number of guesses remaining
document.getElementById("numguess").innerHTML = guessNumber;

//display letters already guessed
document.getElementById("already").innerHTML = alreadyGuessed;


let currentGuess = prompt("Input one letter ").toLowerCase();

guessNumber = guessNumber - 1;

for (i = 0; i < numberOfLetters; i++) {
    if (currentWordArray[i].toLowerCase() === currentGuess) {
        displayWord[i] = currentGuess;
    }
}

console.log(displayWord);

// document.addEventListener('keypress', (event) => {
//   const keyName = event.key;

//   alert('keypress event\n\n' + 'key: ' + keyName);
// });

