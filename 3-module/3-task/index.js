function camelize(str) {
  if (!str) {
    return str;
  }
  let splitStr = str.split('-');
  let newStr = '';
  splitStr.map((item, index) => {
    if (index === 0) {
      newStr += item;
    }
    if (index !== 0) {
      item = item[0].toUpperCase() + item.substring(1);
      newStr += item;
    }
  });
  return newStr;
}
