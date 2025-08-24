const display = document.getElementById("display");
let currentInput = "";

// Append number
function appendNumber(num) {
  if (currentInput === "0") currentInput = "";
  currentInput += num;
  updateDisplay();
}

// Append operator
function appendOperator(op) {
  if (currentInput === "") return;
  const lastChar = currentInput.slice(-1);
  if ("+-*/%".includes(lastChar)) {
    currentInput = currentInput.slice(0, -1) + op;
  } else {
    currentInput += op;
  }
  updateDisplay();
}

// Clear display
function clearDisplay() {
  currentInput = "";
  updateDisplay();
}

// Delete last character
function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

// Calculate result
function calculateResult() {
  try {
    currentInput = eval(currentInput).toString();
    updateDisplay();
  } catch {
    display.innerText = "Error";
  }
}

// Update display
function updateDisplay() {
  display.innerText = currentInput || "0";
}
