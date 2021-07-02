function sumSalary(salaries) {
  let rezult = 0;
  for (const key in salaries) {
    if(!(isFinite(salaries[key]))) {
      continue;
    }
    if (typeof salaries[key] === 'number') {
      rezult += salaries[key]
    }
  }
  return rezult;
}
