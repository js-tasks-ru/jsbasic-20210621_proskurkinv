import createElement from '../../assets/lib/create-element.js';
export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this._steps = steps;
    this._value = value;
    this._spansValue = this.setNumberSpans();
    this.render();

  }
  render() {
    this.elem = createElement(`
        <div class="slider">

        <!--Ползунок слайдера с активным значением-->
        <div class="slider__thumb" style="left: 0%;">
          <span class="slider__value">${this._value}</span>
        </div>

        <!--Полоска слайдера-->
        <div class="slider__progress" style="width: 0%;"></div>

        <!-- Шаги слайдера (вертикальные чёрточки) -->
        <div class="slider__steps">
          <!-- текущий выбранный шаг выделен этим классом -->
          ${this._spansValue.innerHTML}
        </div>
      </div>
        `);
    const thisObject = this;
    this.elem.addEventListener('click', function (event) {
      let left = event.clientX - this.getBoundingClientRect().left;
      let leftRelative = left / this.offsetWidth;
      let segments = thisObject._steps - 1;
      let approximateValue = leftRelative * segments;
      let value = Math.round(approximateValue);
      let valuePercents = value / segments * 100;
      let thumb = this.querySelector('.slider__thumb');
      let progress = this.querySelector('.slider__progress');
      thumb.style.left = `${valuePercents}%`;
      progress.style.width = `${valuePercents}%`;
      thumb.querySelector('.slider__value').innerHTML = value;
      thisObject.setClassForSteps(value);
      const eventSlider = new CustomEvent('slider-change', {
        detail: value,
        bubbles: true
      })
      this.dispatchEvent(eventSlider);
    })
  };
  setNumberSpans() {
    const div = document.createElement('div');
    for (let i = 0; i < this._steps; i++) {
      const span = document.createElement('span');
      if (i === 0) {
        span.className = 'slider__step-active';
      }
      div.appendChild(span);
    }
    return div;
  };
  setClassForSteps(value) {
    const stepsSlider = this.elem.querySelector('.slider__steps');
    Array.from(stepsSlider.children).map((span,id) => {
      span.classList.remove('slider__step-active');
      if(value == id) {
        span.className = 'slider__step-active';
      }
    })
  };
}
