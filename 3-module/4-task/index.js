function showSalary(users, age) {
  const arrFilterValue = users.filter(user => user.age <= age);
  let strWithNamesMoney = ``;
  arrFilterValue.map((user, id) => {
    if (id == arrFilterValue.length - 1) {
      return strWithNamesMoney += `${user.name}, ${user.balance}`;
    }
    return strWithNamesMoney += `${user.name}, ${user.balance}\n`;
  });
  return strWithNamesMoney;
}
