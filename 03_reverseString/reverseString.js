function reverseString(inputString) {
  let characters = inputString.split("");
  let reversedCharacters = characters.reverse();
  let reversedString = reversedCharacters.join("");
  return reversedString;
}
console.log(reverseString("hello there")); // Debería imprimir 'ereht olleh'

// Do not edit below this line
module.exports = reverseString;
