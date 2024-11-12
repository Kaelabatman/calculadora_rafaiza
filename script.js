let display = document.getElementById("display");

function appendNumber(number) {
  if (display.value === "0" || display.value === "Erro") {
    display.value = number;
  } else {
    display.value += number;
  }
}

function appendOperator(operator) {
  if (display.value !== "Erro") {
    display.value += ` ${operator} `;
  }
}

function clearDisplay() {
  display.value = "0";
}

function backspace() {
  if (display.value !== "Erro") {
    display.value = display.value.slice(0, -1);
    if (display.value === "") {
      display.value = "0";
    }
  }
}

function calculate() {
  try {
    display.value = eval(display.value.replace('÷', '/').replace('×', '*'));
  } catch {
    display.value = "Erro";
  }
}

function calculateTrig(func) {
  let value = parseFloat(display.value);
  if (isNaN(value)) {
    display.value = "Erro";
    return;
  }
  switch (func) {
    case "sin":
      display.value = Math.sin(value * (Math.PI / 180)).toFixed(4);
      break;
    case "cos":
      display.value = Math.cos(value * (Math.PI / 180)).toFixed(4);
      break;
    case "tan":
      display.value = Math.tan(value * (Math.PI / 180)).toFixed(4);
      break;
  }
}

function calculateLog() {
  let value = parseFloat(display.value);
  if (isNaN(value) || value <= 0) {
    display.value = "Erro";
    return;
  }
  display.value = Math.log10(value).toFixed(4);
}
