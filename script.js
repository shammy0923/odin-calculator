// DOM Variables
const calculatorElement = document.querySelector(".calculator");
const currentDisplay = document.querySelector(".current-display");
const prevDisplay = document.querySelector(".previous-display");
const calculatorDisplay = document.querySelector(".calculator-display");
const calculatorKeys = document.querySelector(".calculator-keys");


// Calculator Object

var calculatorObject = {
    currentTotal: 0,
    previousNumber: "none",
    selectedNumber: "none",
    currentOperation: "none",
    newNumber: false,
    selectOperand: function(action) {
        if (this.selectedNumber != "none") {
            switch (action) {
                case "add":
                    prevDisplay.textContent = this.selectedNumber + " + ";
                    break;
                case "subtract":
                    prevDisplay.textContent = this.selectedNumber + " - ";
                    break;
                case "multiply":
                    prevDisplay.textContent = this.selectedNumber + " * ";
                    break;
                case "divide":
                    prevDisplay.textContent = this.selectedNumber + " / ";
                    break;
            }
            this.previousNumber = this.selectedNumber
            currentDisplay.textContent = 0
        }
    },
    operate: function() {
        if (this.selectedNumber != "none" & this.previousNumber != "none") {
            if (this.selectedNumber != "none" & this.currentOperation == "add") {
                this.currentTotal = parseInt(this.currentTotal) + parseInt(this.selectedNumber);
            } else if (this.selectedNumber != "none" & this.currentOperation == "subtract") {
                this.currentTotal = parseInt(this.currentTotal) - parseInt(this.selectedNumber);
            } else if (this.selectedNumber != "none" & this.currentOperation == "multiply") {
                this.currentTotal = parseInt(this.currentTotal) * parseInt(this.selectedNumber);
            } else if (this.selectedNumber != "none" & this.currentOperation == "divide") {
                this.currentTotal = parseInt(this.currentTotal) / parseInt(this.selectedNumber);
            }
            prevDisplay.textContent += this.selectedNumber;
            currentDisplay.textContent = this.currentTotal;
            this.newNumber = false;
            this.previousNumber = "none"
            this.selectedNumber = this.currentTotal;
        }
    },
    clear: function() {
        this.currentOperation = "none";
        this.selectedNumber = "none";
        this.currentTotal = 0;
        this.previousNumber = 0;
        this.newNumber = false;
        prevDisplay.textContent = "";
        currentDisplay.textContent = 0;
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
            calculator.selectOperand(action);
        }

        // Checking if Decimal Key
        if (action == "decimal") {
            alert("Decimal Key!");
        }

        // Checking if Clear Key
        if (action == "clear") {
            calculator.clear();
        }

        // Checking if Calculate Key
        if (action == "calculate") {
            calculator.operate();
        }

        // Checking if Number Key 
        if (action == "number") {
            if (calculator.selectedNumber == "none") {
                calculator.selectedNumber = key.textContent;
            } else {
                if (calculator.previousNumber != "none" && calculator.newNumber == false) {
                    calculator.selectedNumber = "";
                    calculator.newNumber = true;
                    calculator.currentTotal = calculator.previousNumber;
                }
                calculator.selectedNumber += key.textContent;
            }
            currentDisplay.textContent = calculator.selectedNumber;
        }
    }
});