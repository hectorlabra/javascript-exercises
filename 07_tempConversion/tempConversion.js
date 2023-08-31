// Función para redondear un número a un número específico de decimales
function roundToDecimal(number, decimalPlaces) {
  const factor = 10 ** decimalPlaces;
  return Math.round(number * factor) / factor;
}

// Función para convertir Fahrenheit a Celsius
function convertToCelsius(fahrenheit) {
  const celsius = (fahrenheit - 32) * (5/9);
  return roundToDecimal(celsius, 1); // Redondear a 1 decimal
}

// Función para convertir Celsius a Fahrenheit
function convertToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9/5) + 32;
  return roundToDecimal(fahrenheit, 1); // Redondear a 1 decimal
}

// Pruebas de las funciones
console.log(convertToCelsius(32)); // Debería imprimir 0
console.log(convertToFahrenheit(0)); // Debería imprimir 32
console.log(convertToCelsius(100)); // Debería imprimir 37.8


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
