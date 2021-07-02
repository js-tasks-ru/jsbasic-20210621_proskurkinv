function isEmpty(obj) {
  let count = 0;
  for (const key in obj) {
    count++;
  }
  return !(count > 0);
}
