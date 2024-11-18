function deretanAngkaHinggaN(n) {
  if (n <= 1) {
    return "Incorrect param";
  }

  let result = "";

  for (let i = n - 1; i > 0; i--) {
    for (let j = i; j > 0; j--) {
      result += j;
    }
  }

  return result;
}

module.exports = deretanAngkaHinggaN;
