function resistorValue(color1, color2, multiplier, tolerance) {
  const colorCodes = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    gray: 8,
    white: 9,
  };

  const toleranceValues = {
    gold: "±5%",
    silver: "±10%",
  };

  // Calculate resistance value
  const firstDigit = colorCodes[color1];
  const secondDigit = colorCodes[color2];
  const multiplierValue = Math.pow(10, colorCodes[multiplier]);
  const resistance = (firstDigit * 10 + secondDigit) * multiplierValue;

  // Get tolerance value
  const toleranceValue = toleranceValues[tolerance] || "";

  // Return formatted result
  return `${resistance} ohm ${toleranceValue}`;
}

module.exports = resistorValue;
