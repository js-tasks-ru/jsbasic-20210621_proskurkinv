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

function setAndGetAttribute(wrapperCarousel, count) {
  wrapperCarousel.setAttribute('count', count);
  const getAttrButton = Number(wrapperCarousel.getAttribute('count'));
  return getAttrButton;
}

function initCarousel() {
  const wrapperCarousel = document.getElementsByClassName('carousel__inner')[0];
  const nextSlide = document.getElementsByClassName('carousel__arrow_right')[0];
  const prevSlide = document.getElementsByClassName('carousel__arrow_left')[0];
  let count = 0;
  let stepMove = 0;
  const getAttrButton = setAndGetAttribute(wrapperCarousel, count);
  checkButtonsForShowHidden(wrapperCarousel, getAttrButton, nextSlide, prevSlide);
  nextSlide.addEventListener('click', function () {
    count++;
    stepMove -= wrapperCarousel.offsetWidth;
    wrapperCarousel.style.transform = `translateX(${stepMove}px)`;
    const getAttrButton = setAndGetAttribute(wrapperCarousel, count);
    checkButtonsForShowHidden(wrapperCarousel, getAttrButton, nextSlide, prevSlide);
  });
  prevSlide.addEventListener('click', function () {
    count--;
    stepMove += wrapperCarousel.offsetWidth;
    wrapperCarousel.style.transform = `translateX(${stepMove}px)`;
    const getAttrButton = setAndGetAttribute(wrapperCarousel, count);
    checkButtonsForShowHidden(wrapperCarousel, getAttrButton, nextSlide, prevSlide);
  });
}
