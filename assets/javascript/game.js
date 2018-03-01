"use strict"

let gameNumber = 0;
let guessNumber = 12;

const wordList = ["Mercury", "Venus", "Earth", "Moon", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto", "Sun", "Stars", "Galaxy", "Supernova", "Asteroids", "Titan", "Nebula", "Orbit", "Comet", "Satellite"]

let currentWord = wordList[gameNumber];
let currentWordArray = currentWord.split('');
let numberOfLetters = currentWordArray.length;
let displayWord = ["_"];
let i = 1;

for (i = 1; i < numberOfLetters; i++) {
    displayWord.push("_");
}

let display = displayWord.toString();
document.getElementById("demo").innerHTML = display.replace(/,/g , " ");


for (i = 0; i < numberOfLetters; i++) {

}


// document.addEventListener('keypress', (event) => {
//   const keyName = event.key;

//   alert('keypress event\n\n' + 'key: ' + keyName);
// });

