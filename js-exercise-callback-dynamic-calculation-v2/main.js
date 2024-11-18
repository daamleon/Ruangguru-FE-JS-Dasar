function calculate(number1, number2, callback) {
  let result;

  if (number1 % 2 != 0) {
    result = number1 * number2;
  } else {
    if (number2 % 2 === 0) {
      result = number1 - number2;
    } else {
      result = number1 + number2;
    }
  }

  callback(result);
}

module.exports = calculate;
