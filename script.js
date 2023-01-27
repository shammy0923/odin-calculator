// DOM Variables
const calculatorElement = document.querySelector(".calculator");
const calculatorDisplay = document.querySelector(".calculator-display");
const calculatorKeys = document.querySelector(".calculator-keys");


// Calculator Object

var calculatorObject = {
    currentTotal: 0,
    selectedNumber: "none",
    currentOperation: "none",
    add: function() {
        if (this.selectedNumber != "none" & this.currentOperation == "add") {
            this.currentTotal += this.selectedNumber;
        }
    },
    subtract: function() {
        if (this.selectedNumber != "none" & this.currentOperation == "subtract") {
            this.currentTotal -= this.selectedNumber;
        }
    },
    multiply: function() {
        if (this.selectedNumber != "none" & this.currentOperation == "multiply") {
            this.currentTotal *= this.selectedNumber;
        }
    },
    divide: function() {
        if (this.selectedNumber != "none" & this.currentOperation == "divide") {
            this.currentTotal /= this.selectedNumber;
        }
    }
};

const calculator = Object.create(calculatorObject);

// Adding click listener to ALL keys
calculatorKeys.addEventListener("click", e => {

    // Checking if the clicked element is a button
    if (e.target.matches('button')) {

        const key = e.target;
        const action = key.dataset.action;

        // Checking if Operator Key
        if (action == "add" || action == "subtract" ||
            action == "divide" || action == "multiply") {
            calculator.currentOperation = action;
        }

        // Checking if Decimal Key
        if (action == "decimal") {
            alert("Decimal Key!");
        }

        // Checking if Clear Key
        if (action == "clear") {
            alert("Clear Key!");
        }

        // Checking if Calculate Key
        if (action == "calculate") {
            alert("Calculate Key!");
        }
    }
});