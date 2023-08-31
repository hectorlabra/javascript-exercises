function sumAll(num1, num2) {
  // Verifica si alguno de los argumentos no es un número
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "ERROR";
  }

  // Verifica si alguno de los argumentos es negativo
  if (num1 < 0 || num2 < 0) {
    return "ERROR";
  }

  // Verifica si num1 es mayor que num2 y, si es así, intercambia los valores
  if (num1 > num2) {
    [num1, num2] = [num2, num1];
  }

  let sum = 0;
  for (let i = num1; i <= num2; i++) {
    sum += i;
  }
  return sum;
}

module.exports = sumAll; // Exporta la función para que pueda ser usada en los tests
