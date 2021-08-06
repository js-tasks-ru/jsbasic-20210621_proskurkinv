import createElement from "../../assets/lib/create-element";

export default class StepSlider {
  constructor({steps, value = 0}) {
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
    this.moveSlider();
  }

  addEventCustom(html, value) {
    const eventSlider = new CustomEvent('slider-change', {
      detail: value,
      bubbles: true
    });
    html.dispatchEvent(eventSlider);
  }

  checkExitSlider(left, value, segments) {
    if (left < 0) {
      return 0;
    }
    if (left > this.elem.offsetWidth) {
      return 100;
    }
    return value / segments * 100;
  }

  moveSlider() {
    const thisObject = this;
    const segments = this._steps - 1;
    const thumb = this.elem.querySelector('.slider__thumb');
    const progress = this.elem.querySelector('.slider__progress');
    const slider = this.elem;
    slider.addEventListener('click', function handler(event) {
      const left = event.clientX - this.getBoundingClientRect().left;
      const leftRelative = left / this.offsetWidth;
      const approximateValue = leftRelative * segments;
      this._value = Math.round(approximateValue);
      const valuePercents = thisObject.checkExitSlider(left, this._value, segments);
      thumb.style.left = `${valuePercents}%`;
      progress.style.width = `${valuePercents}%`;
      thumb.querySelector('.slider__value').innerHTML = this._value;
      thisObject.addEventCustom(slider, this._value);
      thisObject.setClassForSteps(this._value);
    });
    const mouseMove = (e) => {
      const left = e.clientX - this.elem.getBoundingClientRect().left;
      let leftRelative = left / this.elem.offsetWidth;

      if (leftRelative < 0) {
        leftRelative = 0;
      }

      if (leftRelative > 1) {
        leftRelative = 1;
      }
      const leftPercents = leftRelative * 100;

      thumb.style.left = `${leftPercents}%`;
      progress.style.width = `${leftPercents}%`;
      const approximateValue = leftRelative * segments;
      this._value = Math.round(approximateValue);
      thumb.querySelector('.slider__value').innerHTML = this._value;
      this.setClassForSteps(this._value);
    };
    const sliderButton = this.elem.querySelector('.slider__thumb');
    sliderButton.addEventListener('pointerdown', () => {
      slider.classList.add('slider_dragging');
      document.addEventListener('pointermove', mouseMove);

      sliderButton.addEventListener('pointerup', function () {
        slider.classList.remove('slider_dragging');
        thisObject.addEventCustom(slider, this._value);
        document.removeEventListener('pointermove', mouseMove);


      });
      document.addEventListener('pointerup', (e) => {
        slider.classList.remove('slider_dragging');
        const left = e.clientX - this.elem.getBoundingClientRect().left;
        const leftRelative = left / this.elem.offsetWidth;
        const approximateValue = leftRelative * segments;
        this._value = Math.round(approximateValue);
        const valuePercents = this.checkExitSlider(left, this._value, segments);
        thumb.style.left = `${valuePercents}%`;
        progress.style.width = `${valuePercents}%`;
        thisObject.addEventCustom(slider, this._value);
        document.removeEventListener('pointermove', mouseMove);
      });
    });


    sliderButton.ondragstart = () => false;
  }

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
  }

  setClassForSteps(value) {
    const stepsSlider = this.elem.querySelector('.slider__steps');
    Array.from(stepsSlider.children).map((span, id) => {
      span.classList.remove('slider__step-active');
      if (value == id) {
        span.className = 'slider__step-active';
      }
    });
  }
}
