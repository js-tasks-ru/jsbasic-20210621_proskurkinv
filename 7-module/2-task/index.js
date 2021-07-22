import createElement from '../../assets/lib/create-element.js';


export default class Modal {
  constructor() {
    this.elem;
    this.title;
    this.subtitle;
  }

  setTitle(title) {
    return this.title = title;
  }
  setBody(subtitle) {
    const tempStr = `%string%`;
    return this.subtitle = tempStr.replace('%string%', subtitle.outerHTML);
  }
  open() {
    const wrapperModal = document.querySelector('.container');
    const divModal = document.createElement('div');
    const body = document.querySelector('body');
    body.classList.add('is-modal-open');
    divModal.className = 'modal';
    this.elem = divModal.innerHTML = `
        <div class="modal__overlay"></div>

        <div class="modal__inner">
            <div class="modal__header">
                <!--Кнопка закрытия модального окна-->
                <button type="button" class="modal__close">
                    <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
                </button>

                <h3 class="modal__title">
                    ${this.title}
                </h3>
            </div>

            <div class="modal__body">
                ${this.subtitle}
            </div>
        </div>
        `;
    wrapperModal.appendChild(divModal);
    document.addEventListener('keydown', function(e) {
      if(e.code === 'Escape') {
        body.classList.remove('is-modal-open');
        divModal.remove();
      }
    });
    const modalClose = document.querySelector('.modal__close');
    modalClose.addEventListener('click', function(e) {
      body.classList.remove('is-modal-open');
      divModal.remove();
    });
  }
  close() {
    const body = document.querySelector('body');
    body.classList.remove('is-modal-open');
    const modal = document.querySelector('.modal');
    modal.remove();
  }
}
