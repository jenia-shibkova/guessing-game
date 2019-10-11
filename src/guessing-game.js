class GuessingGame {
    constructor() {
      this.min = null;
      this.max = null;
      this.result = null;

    }

    setRange(min, max) {
      this.min = min;
      this.max = max;
      
    }

    guess() {
      this.result = Math.round((this.max + this.min) / 2);
      return this.result;
    }

    lower() {
      this.max = this.guess();
    }

    greater() {
      this.min = this.guess();
    }
}

module.exports = GuessingGame;
