function highlight(table) {
  for (let i = 1; i < table.rows.length; i++) {
    for (let j = 0; j < table.rows[i].cells.length; j++) {
      const element = table.rows[i].cells[j];
      if (element.dataset.available == 'true') {
        table.rows[i].classList.add('available');
      }
      else if (element.dataset.available == 'false') {
        table.rows[i].classList.add('unavailable');
      }
      if (table.rows[i].cells.length - 1 == j && element.dataset.available == undefined) {
        table.rows[i].setAttribute('hidden', 'hidden');
      }
      table.rows[i].cells[j].innerHTML == 'm'
        ? table.rows[i].classList.add('male')
        : table.rows[i].cells[j].innerHTML == 'f'
        ? table.rows[i].classList.add('female')
        : '';

      table.rows[i].cells[j].innerHTML < 18
        ? table.rows[i].style.textDecoration = 'line-through'
        : '';
    }
  }
}
