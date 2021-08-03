import createElement from '../../assets/lib/create-element.js';


// export default class Modal {
//   constructor() {
//     this.elem = `
//         <div class="modal">
//             <div class="modal__overlay"></div>
//
//             <div class="modal__inner">
//                 <div class="modal__header">
//                     <!--Кнопка закрытия модального окна-->
//                     <button type="button" class="modal__close">
//                         <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
//                     </button>
//
//                     <h3 class="modal__title">
//
//                     </h3>
//                 </div>
//
//                 <div class="modal__body">
//
//                 </div>
//             </div>
//         </div>
//         `;
//   }
//
//   // setTitle(title) {
//   //     console.log(this.elem);
//   // }
//   // setBody(subtitle) {
//   //     const tempStr = `%string%`;
//   //     return this.subtitle = tempStr.replace('%string%', subtitle.outerHTML);
//   // }
//   open() {
//
//     const elem = createElement(this.elem);
//     this.elem = elem;
//     // console.log(this.elem);
//     const wrapperModal = document.querySelector('.container');
//     const body = document.querySelector('body');
//     body.classList.add('is-modal-open');
//     wrapperModal.appendChild(this.elem);
//
//     document.addEventListener('keydown', (e) => {
//       if (e.code === 'Escape') {
//         this.close();
//       }
//     }, {once: true});
//     const modalClose = document.querySelector('.modal__close');
//     modalClose.addEventListener('click', (e) => {
//       this.close();
//     }, {once: true});
//
//   }
//
//   close() {
//     const body = document.querySelector('body');
//     body.classList.remove('is-modal-open');
//     const modal = body.querySelector('.modal');
//     console.log(this);
//     modal.remove();
//   }
// }
export default class Modal {
  constructor() {
    this.render();

    this.elem.addEventListener('click', (event) => this.onClick(event));
  }

  render() {
    this.elem = createElement(`
        <div class="modal">
          <div class="modal__overlay"></div>
          <div class="modal__inner">
            <div class="modal__header">
              <button type="button" class="modal__close">
                <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
              </button>
              <h3 class="modal__title"></h3>
            </div>
            <div class="modal__body"></div>
          </div>
        </div>
      `);
  }

  sub(ref) {
    return this.elem.querySelector(`.modal__${ref}`);
  }

  open() {
    document.body.append(this.elem);
    document.body.classList.add('is-modal-open');

    this._keydownEventListener = (event) => this.onDocumentKeyDown(event);
    document.addEventListener('keydown', this._keydownEventListener);

    if (this.elem.querySelector('[autofocus]')) {
      this.elem.querySelector('[autofocus]').focus();
    }
  }

  onClick(event) {
    if (event.target.closest('.modal__close')) {
      event.preventDefault();
      this.close();
    }
  }

  onDocumentKeyDown(event) {
    if (event.code === 'Escape') {
      event.preventDefault();
      this.close();
    }
  }

  setTitle(title) {
    this.sub('title').textContent = title;
  }

  setBody(node) {
    this.sub('body').innerHTML = '';
    this.sub('body').append(node);
  }

  close() {
    document.removeEventListener('keydown', this._keydownEventListener);
    document.body.classList.remove('is-modal-open');
    this.elem.remove();
  }
}

