function filterRange(arr, a, b) {
  let copyStartArr = [...arr];
  const foundItems = copyStartArr.filter(item => item >= a && item <= b)
  return foundItems;
}
