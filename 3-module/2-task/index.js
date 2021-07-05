function filterRange(arr, a, b) {
  let copyStartArr = [...arr];
  let foundItems = [];
  for (const item in copyStartArr) {
    if (copyStartArr[item] >= a && copyStartArr[item] <= b) {
      foundItems.push(copyStartArr[item])
    }
  }
  return foundItems;
}
