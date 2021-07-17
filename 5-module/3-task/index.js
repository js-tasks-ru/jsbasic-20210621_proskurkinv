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

function initCarousel() {
  const wrapperCarousel = document.getElementsByClassName('carousel__inner')[0];
  const nextSlide = document.getElementsByClassName('carousel__arrow_right')[0];
  const prevSlide = document.getElementsByClassName('carousel__arrow_left')[0];
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
