// Function to convert a temperature from Celsius to Fahrenheit and vice versa.

// Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}

// Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}

// Example usage:
const celsiusValue = 25;
const fahrenheitValue = celsiusToFahrenheit(celsiusValue);
console.log(`${celsiusValue}°C is ${fahrenheitValue}°F`);

const fahrenheitValue2 = 77;
const celsiusValue2 = fahrenheitToCelsius(fahrenheitValue2);
console.log(`${fahrenheitValue2}°F is ${celsiusValue2}°C`);
