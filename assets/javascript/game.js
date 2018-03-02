"use strict"

let gameNumber = 0;
let guessNumber = 12;

const wordList = ["Mercury", "Venus", "Earth", "Moon", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto", "Sun", "Stars", "Galaxy", "Supernova", "Asteroids", "Titan", "Nebula", "Orbit", "Comet", "Satellite"]
const success = " ";

let currentWord = wordList[gameNumber];
let currentWordArray = currentWord.split('');
let numberOfLetters = currentWordArray.length;
let displayWord = ["_"];
let alreadyGuessed = " ";
let i = 1;

for (i = 1; i < numberOfLetters; i++) {
    displayWord.push("_");
}

while (success === " " && guessNumber > 0) {
        // display current word with underscores in place of letters
        let display = displayWord.toString();
        $("#demo").text(display.replace(/,/g, " "));

        //display number of guesses remaining
        $("#numguess").text(guessNumber);

        //display letters already guessed
        $("#already").text(alreadyGuessed);

        //enter a guess
        let currentGuess = prompt("Input one letter ").toLowerCase();

        guessNumber = guessNumber - 1;

        for (i = 0; i < numberOfLetters; i++) {
            if (currentWordArray[i].toLowerCase() === currentGuess) {
                displayWord[i] = currentGuess;
            }
        }
        alreadyGuessed = alreadyGuessed.concat(currentGuess) + " ";

        if (currentWord.toString() === displayWord.toString()) {
            success = "SUCCESS!!"
            $("#gameover").text(success);
            
        }
        if (guessNumber === 0) {
            success = `Sorry, you've run out of guesses. The word was ${wordList[gameNumber]}`;
            $("#gameover").text(success);
        }
}




