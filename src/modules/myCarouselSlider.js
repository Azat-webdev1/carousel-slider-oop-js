import SliderCarousel from '../plugins/sliderCarousel/sliderCarousel';

const carousel = new SliderCarousel({
  main: '.companies-wrapper',
  wrap: '.companies-hor',
  next: '.glo-slider__next',
  prev: '.glo-slider__prev',
  slidesToShow: 4,
  infinity: true,
  
  responsive: [{
    breakpoint: 1024,
    slidesToShow: 3
  },
  
  {
    breakpoint: 768,
    slidesToShow: 2
  },
  
  {
    breakpoint: 576,
    slidesToShow: 1
  }
  ]
})

export default carousel;