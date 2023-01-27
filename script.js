// DOM Variables
const calculator = document.querySelector(".calculator");
const calculatorDisplay = document.querySelector(".calculator-display");
const calculatorKeys = document.querySelector(".calculator-keys");

// Adding click listener to ALL keys
calculatorKeys.addEventListener("click", e => {

    // Checking if the clicked element is a button
    if (e.target.matches('button')) {

        const key = e.target;
        const action = key.dataset.action;

        // Checking if Operator Key
        if (action == "add" || action == "subtract" ||
            action == "divide" || action == "multiply") {
            alert("Operator Key!");
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