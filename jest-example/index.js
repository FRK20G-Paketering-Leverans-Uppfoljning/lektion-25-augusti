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

module.exports = { add, subtract, multiply }