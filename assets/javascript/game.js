"use strict"

let gameNumber = 0;
let numberOfGuesses = 12;
let numberOfWins = 0;

const wordList = ["Mercury", "Venus", "Earth", "Moon", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto", "Sun", "Stars", "Galaxy", "Supernova", "Asteroids", "Titan", "Nebula", "Orbit", "Comet", "Satellite"]
let done = false;
let notFirst = false;
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

function Hangman (currentGuess) {
    console.log("done ", done, "number of guesses ", numberOfGuesses)
    if (!done && numberOfGuesses > 0) {
        // display current word with underscores in place of letters
        let display = displayWord.toString();
        if (!notFirst) {$("#demo").text(display.replace(/,/g, " "));}

        console.log (display);

        //display number of guesses remaining
        $("#numguess").text(numberOfGuesses);

    

        numberOfGuesses = numberOfGuesses - 1;

        for (i = 0; i < numberOfLetters; i++) {
            if (notFirst && currentWordArray[i].toLowerCase() === currentGuess) {
                displayWord[i] = currentGuess;
                display = displayWord.toString();
            }
        }

        //display letters already guessed
        //revise display word
        console.log ("alreadyGuessed ", alreadyGuessed, "currentGuess ", currentGuess);
        if (notFirst) {
            alreadyGuessed = alreadyGuessed.concat(currentGuess);
            $("#demo").text(display.replace(/,/g, " ")); 
            $("#already").text(alreadyGuessed);
        };
      
        

       
       
        
        console.log("currentWord ", currentWord, "displayWord ", displayWord.toString().replace(/,/g, ""));
        if (currentWord.toString().toLowerCase() === displayWord.toString().replace(/,/g, "")) {
             message = "SUCCESS!!"
            $("#gameover").text(message);
            done = true;
            numberOfWins++;
            $("#numwins").text(numberOfWins);
        }
        if (numberOfGuesses === 0) {
            message = `Sorry, you've run out of guesses. The word was ${wordList[gameNumber]}`;
            $("#gameover").text(message);
            done = true;
            $("#numwins").text(numberOfWins);
        }
    }
    notFirst = true;
}


// Captures keyboard input. Depending on the letter pressed it will "call" (execute) different functions.
document.onkeyup = function (event) {

    // Captures the key press, converts it to lowercase, and saves it to a variable.
    var letter = String.fromCharCode(event.which).toLowerCase();

    Hangman(letter);

}


