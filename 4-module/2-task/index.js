function makeDiagonalRed(table) {
  for (let i = j = 0; i < table.rows.length; i++, j++) {
    if(i == j) {
      table.rows[i].cells[j].style.background = 'red';
    }
  }
}
