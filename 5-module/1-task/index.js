function hideSelf() {
  const button = document.getElementsByClassName('hide-self-button')[0];
  button.addEventListener('click', function (e) {
    this.setAttribute('hidden', 'hidden');
  });
}
