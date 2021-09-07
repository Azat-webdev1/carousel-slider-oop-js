export default class SliderCarousel {
  constructor({
    main,
    wrap,
    slides,
    position = 0,
  
  }) {
    this.main = document.querySelector(main);
    this.wrap = document.querySelector(wrap);
    this.slides = [...this.wrap.querySelectorAll(slides)];
    this.options = {
      position
    };
  }

  init() {
    this.addGloClass();
    this.addStyle();
  }

  addGloClass() {
    this.main.classList.add('glo-slider');
    this.wrap.classList.add('glo-slider__wrap');
    this.slides.forEach(item => item.classList.add('glo-slider__item'));
  }

  addStyle() {
    const style = document.createElement('style');
    style.id = 'sliderCarousel-style';
    style.textContent = `
      .glo-slider {
        overflow: hidden !important;
      }
      .glo-slider__wrap {
        display: flex !important;
        transition: transform 0.5s !important;
        will-change: transform !important;
      }
      .glo-slider__item {
        transform: none !important;
        flex: 0 0 25% !important;
        margin: auto 0 !important;
        
      }
    `;
    document.head.append(style);
  }
}