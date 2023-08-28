function removeFromArray(array, ...args) {
  let filteredArray = array.filter((item) => !args.includes(item));

  return filteredArray;
}

// Do not edit below this line
module.exports = removeFromArray;
