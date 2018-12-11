


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
        this.currentValue = 0;
        this.currentValue = randomNumberFromRange(this.minValue, this.maxValue);
    },
    adjustScore: function () {
        currentNumber = currentNumber + this.currentValue;
        return currentNumber;
    }

}




// Creates Crystals

// Assign unique click event to each crystal 
function clickTheCrystals() {
    $('#crystal-1').on('click', function () {
        crystal1.adjustScore();
        $('#current-number').text(currentNumber);
        checkWin();
    })
    $('#crystal-2').on('click', function () {
        crystal2.adjustScore();
        $('#current-number').text(currentNumber);
        checkWin();
    })
    $('#crystal-3').on('click', function () {
        crystal3.adjustScore();
        $('#current-number').text(currentNumber);
        checkWin();
    })
    $('#crystal-4').on('click', function () {
        crystal4.adjustScore();
        $('#current-number').text(currentNumber);
        checkWin();
    })

};


function checkWin() {
    if (currentNumber > targetNumber.currentValue) {
        losses++;
        alert('*Game Over*');
        currentNumber = 0;
        startGame();
    } else if (currentNumber === targetNumber.currentValue) {
        wins++;
        alert('You WIn!');
        currentNumber = 0;
        startGame();
    } else {
        return;
    }

}
var crystal1 = Object.create(crystal);
var crystal2 = Object.create(crystal);
var crystal3 = Object.create(crystal);
var crystal4 = Object.create(crystal);

// Generates target number and pushes to the screen
function startGame() {
    $(document).ready(function () {
        crystal1 = Object.create(crystal);
        crystal2 = Object.create(crystal);
        crystal3 = Object.create(crystal);
        crystal4 = Object.create(crystal);

        targetNumber.generateCurrentValue();
        $('#target-number').text(targetNumber.currentValue);
        $('#current-number').text(currentNumber);
        $('#wins').text(wins);
        $('#losses').text(losses);

        crystal1.generateCurrentValue();
        crystal2.generateCurrentValue();
        // Ensure Crystals have unique values
        while (crystal1.currentValue === crystal2.currentValue) {
            crystal2.generateCurrentValue();
        }
        crystal3.generateCurrentValue();
        while (crystal2.currentValue === crystal3.currentValue || crystal1.currentValue === crystal3.currentValue) {
            crystal3.generateCurrentValue();
        }
        crystal4.generateCurrentValue();
        while (crystal3.currentValue === crystal4.currentValue || crystal2.currentValue === crystal4.currentValue || crystal1.currentValue === crystal4.currentValue) {
            crystal4.generateCurrentValue();
        }


    }
    )


};

// 
startGame();
clickTheCrystals();




