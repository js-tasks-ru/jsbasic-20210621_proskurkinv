function toggleText() {
  const button = document.getElementsByClassName('toggle-text-button')[0];
  const hiddenElem = document.getElementById('text');
  button.addEventListener('click', function (e) {
    if (hiddenElem.getAttribute('hidden') == 'hidden') {
      hiddenElem.removeAttribute('hidden');
      return;
    }
    hiddenElem.setAttribute('hidden', 'hidden');
  });
}
