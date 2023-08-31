function removeFromArray(array, ...args) {
  let filteredArray = array.filter(item => !args.includes(item));
  return filteredArray;
}

console.log(removeFromArray([1, 2, 3, 4], 3)); // Debería imprimir [1, 2, 4]


// Do not edit below this line
module.exports = removeFromArray;
