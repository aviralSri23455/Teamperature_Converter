const temperatureInput = document.getElementById("temperatureInput");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const convertButton = document.getElementById("convertButton");
const resultDiv = document.getElementById("result");

function updateButtonState() {
  convertButton.disabled = !(temperatureInput.value && fromUnit.value && toUnit.value);
}

temperatureInput.addEventListener("input", updateButtonState);
fromUnit.addEventListener("change", updateButtonState);
toUnit.addEventListener("change", updateButtonState);

convertButton.addEventListener("click", () => {
  const temperature = parseFloat(temperatureInput.value);
  const from = fromUnit.value;
  const to = toUnit.value;
  let convertedTemperature;

  if (from === to) {
    convertedTemperature = temperature;
  } else if (from === "Celsius" && to === "Fahrenheit") {
    convertedTemperature = (temperature * 9 / 5) + 32;
  } else if (from === "Celsius" && to === "Kelvin") {
    convertedTemperature = temperature + 273.15;
  } else if (from === "Fahrenheit" && to === "Celsius") {
    convertedTemperature = (temperature - 32) * 5 / 9;
  } else if (from === "Fahrenheit" && to === "Kelvin") {
    convertedTemperature = (temperature - 32) * 5 / 9 + 273.15;
  } else if (from === "Kelvin" && to === "Celsius") {
    convertedTemperature = temperature - 273.15;
  } else if (from === "Kelvin" && to === "Fahrenheit") {
    convertedTemperature = (temperature - 273.15) * 9 / 5 + 32;
  }

  resultDiv.textContent = `${temperature} ${from} is ${convertedTemperature.toFixed(2)} ${to}`;
});
