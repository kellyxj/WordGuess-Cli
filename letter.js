function Letter(value) {
    this.value = value;
    this.guessed = false;
    this.display = function() {
        return this.guessed? this.value: "_";
    }
    this.check = function(guess) {
        if(this.value === guess) {
            this.guessed = true;
            return true;
        }
        return false;
    }
}

module.exports = Letter;