import SliderCarousel from '../plugins/sliderCarousel/sliderCarousel';

const carousel = new SliderCarousel({
  main: '.companies-wrapper',
  wrap: '.companies-hor',
  next: '.glo-slider__next',
  prev: '.glo-slider__prev',
  slidesToShow: 4,
  infinity: true
})

export default carousel;