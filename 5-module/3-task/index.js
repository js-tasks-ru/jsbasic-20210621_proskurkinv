function checkButtonsForShowHidden(elementsCarousel, getAttrButton, nextSlide, prevSlide) {
  if (getAttrButton === elementsCarousel.length - 1) {
    nextSlide.style.display = 'none';
  }
  if (getAttrButton !== elementsCarousel.length - 1) {
    nextSlide.style.display = '';
  }
  if (getAttrButton === 0) {
    prevSlide.style.display = 'none';
  }
  if (getAttrButton !== 0) {
    prevSlide.style.display = '';
  }
}
function setAndGetAttribute(wrapperCarousel, count) {
  wrapperCarousel.setAttribute('count', count);
  const getAttrButton = Number(wrapperCarousel.getAttribute('count'));
  return getAttrButton;
}
function initCarousel() {
  const wrapperCarousel = document.getElementsByClassName('carousel__inner')[0];
  const searchElementsCarousel = document.getElementsByClassName('carousel__inner')[0].children;
  const elementsCarousel = [...searchElementsCarousel];
  const nextSlide = document.getElementsByClassName('carousel__arrow_right')[0];
  const prevSlide = document.getElementsByClassName('carousel__arrow_left')[0];
  let count = 0;
  let stepMove = 0;

  const getAttrButton = setAndGetAttribute(wrapperCarousel, count);
  checkButtonsForShowHidden(elementsCarousel, getAttrButton, nextSlide, prevSlide);

  nextSlide.addEventListener('click', function () {
    count++;
    stepMove -= elementsCarousel[0].offsetWidth;
    const getAttrButton = setAndGetAttribute(wrapperCarousel, count);
    checkButtonsForShowHidden(elementsCarousel, getAttrButton, nextSlide, prevSlide);
    elementsCarousel.map(item => {
      item.style.transform = `translateX(${stepMove}px)`;
    });
  });
  prevSlide.addEventListener('click', function () {
    count--;
    stepMove += elementsCarousel[0].offsetWidth;
    const getAttrButton = setAndGetAttribute(wrapperCarousel, count);
    checkButtonsForShowHidden(elementsCarousel, getAttrButton, nextSlide, prevSlide);
    elementsCarousel.map(item => {
      item.style.transform = `translateX(${stepMove}px)`;
    });
  });
}
