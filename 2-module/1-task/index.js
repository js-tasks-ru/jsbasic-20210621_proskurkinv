function sumSalary(salaries) {
  let rezult = 0;
  for (const key in salaries) {
    if (salaries[key] == Infinity || salaries[key] == -Infinity || isNaN(salaries[key])) {
      continue;
    }
    if (typeof salaries[key] === 'number') {
      rezult += salaries[key]
    }
  }
  return rezult;
}
