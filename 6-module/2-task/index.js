import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this._product = product;
    this.render();
  }

  makeCard() {
    this.elem = `
            <div class='card'>
                            <div class="card__top">
                            <img src="/assets/images/products/${this._product.image}" class="card__image" alt="product">
                            <span class="card__price">€${this._product.price.toFixed(2)}</span>
                            </div>
                          <div class="card__body">
                            <div class="card__title">${this._product.name}</div>
                            <button type="button" class="card__button" data-id="${this._product.id}">
                              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
                            </button>
                          </div>
                        </div>
            `;
  }

  button() {
    const buttonEvent = this.elem.querySelector('.card__button');

    buttonEvent.addEventListener('click', function () {
      this.dispatchEvent(new CustomEvent("product-add", {
        detail: this.dataset.id,
        bubbles: true
      }));
    });
  }

  render() {
    this.makeCard();
    this.elem = createElement(this.elem);
    this.button();
  }
}
