function ucFirst(str) {
  if (!str) {
    return str;
  } else if (str.length == 1) {
    return str[0].toUpperCase();
  }
  const firstSymbol = str.slice(0, 1).toUpperCase();
  const twoPartStr = str.slice(1);
  str = firstSymbol + twoPartStr;
  return str;

}
