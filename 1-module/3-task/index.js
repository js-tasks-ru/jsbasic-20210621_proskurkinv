function ucFirst(str) {
  if (!str) {
    return str;
  }
  str.length == 1 ? str[0].toUpperCase() : false;
  return str[0].toUpperCase() + str.substring(1);
}
