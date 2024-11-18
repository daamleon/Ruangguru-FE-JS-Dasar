function checkDatatype(input) {
  if (Array.isArray(input)) {
    return "array";
  } else if (input === null) {
    return "null";
  } else {
    return typeof input;
  }
}

module.exports = { checkDatatype };
