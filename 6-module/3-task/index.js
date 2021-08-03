import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.render();
  }
  render() {
    this.makeCards();
    this.initCarousel();
    this.selectCategory();
  }

  makeCards() {
    const div = document.createElement('div');
    div.className = 'carousel';
    const cards = `
                    <div class="carousel__arrow carousel__arrow_right">
                        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
                    </div>
                    <div class="carousel__arrow carousel__arrow_left">
                        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
                    </div>
                    <div class="carousel__inner">
                        ${this.slides.map(card => {
                          return `
                            <div class="carousel__slide" data-id="${card.id}">
                                <img src="/assets/images/carousel/${card.image}" class="carousel__img" alt="slide">
                                <div class="carousel__caption">
                                    <span class="carousel__price">€${card.price.toFixed(2)}</span>
                                    <div class="carousel__title">${card.name}</div>
                                    <button type="button" class="carousel__button">
                                        <img src="/assets/images/icons/plus-icon.svg" alt="icon">
                                    </button>
                                </div>
                            </div>
                            `;
                            }).join('')}
                    </div>
                    `;
    div.innerHTML = cards;
    this.elem = div;
  }

  initCarousel() {
    function checkButtonsForShowHidden(wrapperCarousel, getAttrButton, nextSlide, prevSlide) {
      if (getAttrButton === wrapperCarousel.children.length - 1) {
        nextSlide.style.display = 'none';
      }
      if (getAttrButton !== wrapperCarousel.children.length - 1) {
        nextSlide.style.display = '';
      }
      if (getAttrButton === 0) {
        prevSlide.style.display = 'none';
      }
      if (getAttrButton !== 0) {
        prevSlide.style.display = '';
      }
    }
    const wrapperCarousel = this.elem.querySelector('.carousel__inner');
    const nextSlide = this.elem.querySelector('.carousel__arrow_right');
    const prevSlide = this.elem.querySelector('.carousel__arrow_left');
    let count = 0;
    let stepMove = 0;
    checkButtonsForShowHidden(wrapperCarousel, count, nextSlide, prevSlide);
    nextSlide.addEventListener('click', function () {
      count++;
      stepMove -= wrapperCarousel.offsetWidth;
      wrapperCarousel.style.transform = `translateX(${stepMove}px)`;
      checkButtonsForShowHidden(wrapperCarousel, count, nextSlide, prevSlide);
    });
    prevSlide.addEventListener('click', function () {
      count--;
      stepMove += wrapperCarousel.offsetWidth;
      wrapperCarousel.style.transform = `translateX(${stepMove}px)`;
      checkButtonsForShowHidden(wrapperCarousel, count, nextSlide, prevSlide);
    });
  }

  selectCategory() {
    const listCards = this.elem.querySelector('.carousel__inner').querySelectorAll('.carousel__slide');
    Array.from(listCards).map(card => {
      const addToCartButton = card.querySelector('.carousel__button');
      addToCartButton.addEventListener('click', function (e) {

        this.dispatchEvent(new CustomEvent("product-add", {
          detail: card.dataset.id,
          bubbles: true
        }));
      });
    });
  }
}
