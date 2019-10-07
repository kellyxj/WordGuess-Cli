const Letter = require("./letter.js");

function Word (string) {
    this.letterArray = [];
    for(i = 0; i < string.length; i++) {
        const letter = new Letter(string[i]);
        this.letterArray.push(letter);
    }
    this.display = function () {
        let output = "";
        for(const letter of this.letterArray) {
            output += letter.display();
        }
        return output;
    }
    this.check = function (guess) {
        let correctGuess = false;
        for(const letter of this.letterArray) {
            if(letter.check(guess)) {
                correctGuess = true;
            }
        }
        return correctGuess;
    }
}

module.exports = Word;