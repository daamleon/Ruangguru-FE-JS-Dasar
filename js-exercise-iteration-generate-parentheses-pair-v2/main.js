function generateParenthesesPair(numberOfPairs) {
  let result = "";

  let openParentheses = "";
  let closeParentheses = "";

  for (let i = 0; i < numberOfPairs; i++) {
    openParentheses = openParentheses + "(";
    closeParentheses = closeParentheses + ")";
  }

  result = openParentheses + closeParentheses;

  return result;
}

console.log(generateParenthesesPair(0)); // ''
console.log(generateParenthesesPair(1)); // '()'
console.log(generateParenthesesPair(2)); // '(())'
console.log(generateParenthesesPair(3)); // '((()))'
console.log(generateParenthesesPair(12)); // '(((((((((((())))))))))))'

module.exports = generateParenthesesPair;
