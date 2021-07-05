function getMinMax(str) {
  let numbersFromStr = str.match(/-?\d+(\.\d+)?/g);
  numbersFromStr.sort((a, b) => {
    return a - b;
  })
  return {
    min: +numbersFromStr[0],
    max: +numbersFromStr[numbersFromStr.length - 1]
  }
}
