/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this._rows = rows;
    this.render();
  }
  get _buttons() {
    return this.elem.querySelectorAll('button')
  }
  makeTable() {
    return `
        <table>
          <thead>
              <tr>
                  <th>Имя</th>
                  <th>Возраст</th>
                  <th>Зарплата</th>
                  <th>Город</th>
                  <th></th>
              </tr>
          </thead>
          <tbody>
              ${this._rows.map(item => {
      return (
        `<tr>
                      <td>${item.name}</td>
                      <td>${item.age}</td>
                      <td>${item.salary}</td>
                      <td>${item.city}</td>
                      <td><button>X</button></td>
                  </tr>`
      )
    }).join('')}
          </tbody>
          </table>
          `;
  }
  renderTable() {
    this.elem = document.createElement('div');
    this.elem.innerHTML = this.makeTable();
    return this.elem;
  }
  render() {
    this.renderTable();
    this._buttons.forEach(elem => {
      elem.addEventListener('click', (e) => {
        const lineElem = elem.parentNode.parentNode;
        lineElem.parentNode.removeChild(lineElem);
      });
    });
  }
}
