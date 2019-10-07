const Word = require("./word.js");
const inquirer = require("inquirer");

const dictionary = [
    "ampersand", "analysis",
    "banter", "beloved", "bitterness",
    "counter", "cosmic", 
    "dandelion", "destitute", "delegate", 
    "elephant", "elevator",
    "flexible", "flippant", "function", 
    "gigantic", "gorgeous", "griddle",
    "hellion", "holistic", "horseradish", 
    "illumination", "interior",
    "janitor", "jasper",
    "kibble", "kumquat",
    "lopsided", "lexicon", "lampshade",
    "masterful", "middleman",
    "nearsighted", "notation",
    "operative", "ornery",
    "panther", "perennial",
    "quagmire",
    "raspberry", "rental", 
    "seismic", "splendid", 
    "taboo", "thimble",
    "underhanded",
    "validation", "venerated",
    "watermelon", "whistle",
    "yesterday",
    "zeppelin"
];

function pickRandomWord() {
    return dictionary[Math.floor(Math.random()*dictionary.length)];
}
let currentWord = new Word(pickRandomWord());

let guesses = 5;
const lettersGuessed = [];
function userInput() {
    console.log(currentWord.display());
    console.log(`You have ${guesses} guesses remaining`);
    console.log(`Letters guessed: ${lettersGuessed}`);
    inquirer.prompt([
        {
            message: "Guess a letter",
            name: "userGuess"
        }
    ]).then(response => {
        console.log("\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");
        const guess = response.userGuess;
        if(guess > 1 || !"abcdefghijklmnopqrstuvwxyz".includes(guess.toLowerCase())) {
            console.log("Your guess must be a letter");
            userInput();
        }
        else if(lettersGuessed.includes(guess)) {
            console.log("You have already guessed that letter");
            userInput();
        }
        else {
            lettersGuessed.push(guess);       
            if(currentWord.check(guess)) {
                console.log("Your guess was correct");
                if(currentWord.solved()) {
                    console.log("You won!");
                    playAgain();
                }
                else {
                    userInput();
                }        
            }
            else {
                guesses--;
                console.log("Your guess was incorrect");
                if(guesses < 1) {
                    console.log("Game over");
                    playAgain();
                }
                else {
                    userInput();
                }
            }
        }
    })
}
userInput();

function playAgain() {
    inquirer.prompt([
        {
            type: "confirm",
            message: "Would you like to play again?",
            name: "playAgain"
        }
    ]).then(response => {
        if(response.playAgain) {
            guesses = 5;
            currentWord = new Word(pickRandomWord());
            lettersGuessed.splice(0,lettersGuessed.length);
            userInput();
        }
        else {
            console.log("Goodbye")
        }
    })
}