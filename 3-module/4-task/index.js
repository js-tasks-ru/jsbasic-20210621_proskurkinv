function showSalary(users, age) {
  const arrFilterValue = users.filter(user => user.age <= age)
    .map(user => {
      return `${user.name}, ${user.balance}`;
    }).join('\n');
  return arrFilterValue;
}
