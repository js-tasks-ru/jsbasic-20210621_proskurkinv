function isEmpty(obj) {
  let count = 0;
  for (const key in obj) {
    count++;
  }
  if (count == 0) {
    return true;
  }
  return !(count > 0);
}
