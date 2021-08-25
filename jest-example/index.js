let test = '';

function add(numberOne, numberTwo) {
  return numberOne + numberTwo;
}

function subtract(numberOne, numberTwo) {
  return numberOne - numberTwo;
}

function multiply(numberOne, numberTwo) {
  if (typeof numberOne === 'number' && typeof numberTwo === 'number') {
    return numberOne * numberTwo;
  } else {
    return 'Illegal input';
  }
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function reset() {
  test = '';
}

module.exports = { add, subtract, multiply, capitalize, reset }