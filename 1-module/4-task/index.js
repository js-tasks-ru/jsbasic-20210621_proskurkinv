function checkSpam(str) {
  const newStr = str.toLowerCase();
  if (newStr.includes('1xbet') || newStr.includes('xxx')) {
    return true;
  }
  return false;
}
