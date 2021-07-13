function makeFriendsList(friends) {
  const ul = document.createElement('ul');
  friends.forEach(u => {
    let li = document.createElement('li');
    li.innerHTML = `${u.firstName} ${u.lastName}`;
    ul.appendChild(li);
  });
  return ul;
}
