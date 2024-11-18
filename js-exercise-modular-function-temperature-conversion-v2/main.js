function kelvinToCelsius(kelvin) {
  // TODO: answer here
  return parseFloat((kelvin - 273.15).toFixed(2));
}

function kelvinToFahrenheit(kelvin) {
  // TODO: answer here
  return parseFloat((((kelvin - 273.15) * 9) / 5 + 32).toFixed(2));
}

function celsiusToFahrenheit(celsius) {
  // TODO: answer here
  return parseFloat(((celsius * 9) / 5 + 32).toFixed(2));
}

function celsiusToKelvin(celsius) {
  // TODO: answer here
  return parseFloat((celsius + 273.15).toFixed(2));
}

function fahrenheitToKelvin(fahrenheit) {
  // TODO: answer here
  return parseFloat((((fahrenheit - 32) * 5) / 9 + 273.15).toFixed(2));
}

function fahrenheitToCelsius(fahrenheit) {
  // TODO: answer here
  return parseFloat((((fahrenheit - 32) * 5) / 9).toFixed(2));
}

function convertTemperature(temperature, initialUnit, finalUnit) {
  // TODO: answer here
  if (initialUnit === "C" && finalUnit === "K") {
    return celsiusToKelvin(temperature);
  } else if (initialUnit === "C" && finalUnit === "F") {
    return celsiusToFahrenheit(temperature);
  } else if (initialUnit === "K" && finalUnit === "C") {
    return kelvinToCelsius(temperature);
  } else if (initialUnit === "K" && finalUnit === "F") {
    return kelvinToFahrenheit(temperature);
  } else if (initialUnit === "F" && finalUnit === "C") {
    return fahrenheitToCelsius(temperature);
  } else if (initialUnit === "F" && finalUnit === "K") {
    return fahrenheitToKelvin(temperature);
  } else {
    throw new Error("Invalid unit conversion");
  }
}

// console.log(convertTemperature(0, "C", "K")); // 273.15
// console.log(convertTemperature(0, "C", "F")); // 32

// console.log(convertTemperature(0, "F", "C")); // -17.78
// console.log(convertTemperature(0, "F", "K")); // 255.37

// console.log(convertTemperature(0, "K", "C")); // -273.15
// console.log(convertTemperature(0, "K", "F")); // -459.67

module.exports = {
  kelvinToCelsius,
  kelvinToFahrenheit,
  celsiusToFahrenheit,
  celsiusToKelvin,
  fahrenheitToKelvin,
  fahrenheitToCelsius,
  convertTemperature,
};
