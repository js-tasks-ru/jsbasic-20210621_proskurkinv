import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this._product = product;
    this.elem;
    this.render();
  }

  makeCard() {
    return this.elem = `
        <div class='card'>
                        <div class="card__top">
                        <img src="/assets/images/products/${this._product.image}" class="card__image" alt="product">
                        <span class="card__price">€${this._product.price.toFixed(2)}</span>
                        </div>
                      <div class="card__body">
                        <div class="card__title">${this._product.name}</div>
                        <button type="button" class="card__button">
                          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
                        </button>
                      </div>
                    </div>
        `
  }

  get _button() {
    const buttonEvent = this.elem.querySelector('button[class="card__button"]')

    buttonEvent.addEventListener('click', (e) => {
      this.addEvent(buttonEvent);
    })
  }
  addEvent(buttonEvent) {
    buttonEvent.addEventListener("product-add", function (e) {
      console.log(e.detail);
    })
    const event = new CustomEvent("product-add", {bubbles : false, cancelable : true, detail: { id: this._product.id }})
    buttonEvent.dispatchEvent(event);
  }
  _elementsHTML(html) {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div;
  }

  render() {
    this.makeCard();
    this.elem = this._elementsHTML(this.elem);
    this._button
  }
}
