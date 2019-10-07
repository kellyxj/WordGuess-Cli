const Letter = require("./letter.js");

function Word (string) {
    this.letterArray = [];
    for(i = 0; i < string.length; i++) {
        const letter = new Letter(string[i]);
        this.letterArray.push(letter);
    }
    function display () {
        let output = "";
        for(const letter of this.letterArray) {
            output += letter.display;
        }
        return output;
    }
    function check (guess) {
        for(const letter of this.letterArray) {
            letter.check(guess);
        }
    }
}

module.exports = Word;