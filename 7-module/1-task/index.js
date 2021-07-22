import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem;
    this.render();
  }

  render() {
    this.makeRibbon();
    this.wrapperRibbon = this.elem.querySelector('.ribbon__inner');
    this.ribbonArrowRight = this.elem.querySelector('button.ribbon__arrow_right');
    this.ribbonArrowLeft = this.elem.querySelector('button.ribbon__arrow_left');
    this.checkArrow();
    this.scrollRibbon();
    this.selectCategory();
  }

  makeRibbon() {
    const div = document.createElement('div');
    div.className = 'ribbon';
    const ribbon = `
            <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
                <img src="/assets/images/icons/angle-icon.svg" alt="icon">
            </button>

            <nav class="ribbon__inner">
               ${this.categories.map(item => {
      if (item.name === 'All') {
        return `<a href="#" class="ribbon__item ribbon__item_active" data-id="${item.id}">${item.name}</a>`
      }
      return `<a href="#" class="ribbon__item" data-id="${item.id}">${item.name}</a>`;
    }).join('')}
            </nav>

            <button class="ribbon__arrow ribbon__arrow_right ">
                <img src="/assets/images/icons/angle-icon.svg" alt="icon">
            </button>
        `;
    div.innerHTML = ribbon;
    return this.elem = div;
  }

  selectCategory() {
    const listLink = this.wrapperRibbon.querySelectorAll('a');
    Array.from(listLink).map(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        Array.from(listLink).map(function (item) {
          if (item.classList.contains('ribbon__item_active')) {
            item.classList.remove('ribbon__item_active');
          }
        });
        this.classList.add('ribbon__item_active');
        this.addEventListener("ribbon-select", function (event) {

        });

        this.dispatchEvent(new CustomEvent("ribbon-select", {
          detail: this.dataset.id,
          bubbles: true
        }));
      });
    });
  }

  checkArrow() {
    const scrollLeft = this.wrapperRibbon.scrollLeft;
    if (scrollLeft < 1) {
      this.ribbonArrowLeft.classList.remove('ribbon__arrow_visible');
      this.ribbonArrowRight.classList.add('ribbon__arrow_visible');
    }
  }

  scrollRibbon() {
    this.ribbonArrowRight.addEventListener('click', () => {
      this.wrapperRibbon.scrollBy(350, 0);
    });
    this.ribbonArrowLeft.addEventListener('click', () => {
      this.wrapperRibbon.scrollBy(-350, 0);
    });
    this.wrapperRibbon.addEventListener('scroll', () => {
      let scrollWidth = this.wrapperRibbon.scrollWidth;
      let clientWidth = this.wrapperRibbon.clientWidth;
      let scrollLeft = this.wrapperRibbon.scrollLeft;
      let scrollRight = scrollWidth - scrollLeft - clientWidth;
      if (scrollLeft < 1) {
        this.ribbonArrowLeft.classList.remove('ribbon__arrow_visible');
        this.ribbonArrowRight.classList.add('ribbon__arrow_visible');
      }
      if (scrollRight < 1) {
        this.ribbonArrowRight.classList.remove('ribbon__arrow_visible');
      }
      if (scrollRight > 1) {
        this.ribbonArrowRight.classList.add('ribbon__arrow_visible');
      }
      if (scrollLeft > 1) {
        this.ribbonArrowLeft.classList.add('ribbon__arrow_visible');
      }
    });
  }
}
