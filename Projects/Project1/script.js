let currentDisplay = "0";

function updateDisplay() {
    const display = document.getElementById("display");
    display.innerText = currentDisplay;
}

function appendToDisplay(value) {
    if (currentDisplay === "0" || currentDisplay === "Error") {
        currentDisplay = value;
    } else {
        currentDisplay += value;
    }
    updateDisplay();
}

function calculate() {
    try {
        currentDisplay = eval(currentDisplay).toString();
    } catch (error) {
        currentDisplay = "Error";
    }
    updateDisplay();
}

function clearDisplay() {
    currentDisplay = "0";
    updateDisplay();
}

updateDisplay();