


let currentNumber = 0;
let wins = 0;
let losses = 0;


//  Global Function For generating Random Value
function randomNumberFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// Target Number Object
let targetNumber = {
    minValue: 19,
    maxValue: 120,
    currentValue: 0,
    generateCurrentValue: function () {
        this.currentValue = randomNumberFromRange(this.minValue, this.maxValue);
    }
}

// Crystal Object
let crystal = {
    minValue: 1,
    maxValue: 12,
    currentValue: 0,
    generateCurrentValue: function () {
        this.currentValue = randomNumberFromRange(this.minValue, this.maxValue);
    },
    adjustScore: function () {
        currentNumber = currentNumber + this.currentValue;
        return currentNumber;
    }

}




// Creates Crystals
var crystal1 = Object.create(crystal);
var crystal2 = Object.create(crystal);
var crystal3 = Object.create(crystal);
var crystal4 = Object.create(crystal);

// Generates target number and pushes to the screen
function startGame() {
    $(document).ready(function () {
        targetNumber.generateCurrentValue();
        $('#target-number').text(targetNumber.currentValue);
        $('#current-number').text(currentNumber);
        $('#wins').text(wins);
        $('#losses').text(losses);
        crystal1.generateCurrentValue();
        crystal2.generateCurrentValue();
        while (crystal1 === crystal2) {
            crystal2.generateCurrentValue();
        }
        crystal3.generateCurrentValue();
        while (crystal2 === crystal3 || crystal1 === crystal3) {
            crystal3.generateCurrentValue();
        }
        crystal4.generateCurrentValue();
        while (crystal3 === crystal4 || crystal2 === crystal4 || crystal1 === crystal4) {
            crystal4.generateCurrentValue();
        }


    }
    )


};

// 
startGame();
function clickTheCrystals() {
    $('#crystal-1').on('click', function () {
        crystal1.adjustScore();
        $('#current-number').text(currentNumber)
    })
    $('#crystal-2').on('click', function () {
        crystal2.adjustScore();
        $('#current-number').text(currentNumber)
    })
    $('#crystal-3').on('click', function () {
        crystal3.adjustScore();
        $('#current-number').text(currentNumber)
    })
    $('#crystal-4').on('click', function () {
        crystal4.adjustScore();
        $('#current-number').text(currentNumber)
    })
};
clickTheCrystals();
console.log(crystal1);
console.log(crystal2);
console.log(crystal3);
console.log(crystal4);
