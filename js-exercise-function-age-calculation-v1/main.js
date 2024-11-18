function calcAge(age, params) {
  if (age < 1) {
    return "Age cannot be under 1 year";
  } else if (params === "months") {
    return age * 12;
  } else if (params === "days") {
    return age * 365;
  }
}

module.exports = calcAge;
