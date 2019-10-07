const word = require("./word.js");
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
