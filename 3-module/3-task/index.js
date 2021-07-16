function camelize(str) {
  if (!str) {
    return str;
  }
  const splitStr = str.split('-');
  return splitStr.map((item, index) => index === 0 ? item : splitStr[index] = item[0].toUpperCase() + item.substring(1)).join('');
}
