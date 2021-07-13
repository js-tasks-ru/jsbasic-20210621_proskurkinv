function camelize(str) {
  if (!str) {
    return str;
  }
  let splitStr = str.split('-');
  splitStr = splitStr.filter(item => item.length)
  for (const key in splitStr) {
    console.log(key)
    if(key != 0 || splitStr[key] == 'webkit') {
      splitStr[key] = splitStr[key][0].toUpperCase() + splitStr[key].substring(1);
    }
  }
  return splitStr.join('');
}
