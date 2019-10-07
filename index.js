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