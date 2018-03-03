"use strict"

let gameNumber = 0;
let numberOfGuesses = 12;

const wordList = ["Mercury", "Venus", "Earth", "Moon", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto", "Sun", "Stars", "Galaxy", "Supernova", "Asteroids", "Titan", "Nebula", "Orbit", "Comet", "Satellite"]
let done = false;
let message = " ";

let currentWord = wordList[gameNumber];
let currentWordArray = currentWord.split('');
let numberOfLetters = currentWordArray.length;
let displayWord = ["_"];
let alreadyGuessed = " ";
let i = 1;

for (i = 1; i < numberOfLetters; i++) {
    displayWord.push("_");
}

document.onkeyup = function (letter) {
    // inside here lives some
    // code that will run every time
    // a keyup event happens.
    let keyPressed = letter.key;
    console.log(keyPressed);
    return keyPressed;
}


function Hangman () {
    console.log("done ", done, "number of guesses ", numberOfGuesses)
    if (!done && numberOfGuesses > 0) {
        // display current word with underscores in place of letters
        let display = displayWord.toString();
        $("#demo").text(display.replace(/,/g, " "));

        console.log (display);

        //display number of guesses remaining
        $("#numguess").text(numberOfGuesses);

        //display letters already guessed
        $("#already").text(alreadyGuessed);

        //enter a guess
        //  let currentGuess = prompt("Input one letter ").toLowerCase();

        let currentGuess = document.querySelector("input").value;

        numberOfGuesses = numberOfGuesses - 1;

        for (i = 0; i < numberOfLetters; i++) {
            if (currentWordArray[i].toLowerCase() === currentGuess) {
                displayWord[i] = currentGuess;
            }
        }

        console.log ("alreadyGuessed ", alreadyGuessed, "currentGuess ", currentGuess);
        alreadyGuessed = alreadyGuessed.concat(currentGuess);

        if (currentWord.toString() === displayWord.toString()) {
             message = "SUCCESS!!"
            $("#gameover").text(message);
            done = true;
            
        }
        if (numberOfGuesses === 0) {
            message = `Sorry, you've run out of guesses. The word was ${wordList[gameNumber]}`;
            $("#gameover").text(message);
            done = true;
        }
    }

}


