$(document).ready(function(){

  // zmienna definiuje ilość slajdów;
  var slidesArray = $('.slide');
  var slidesCount = $('.slide').length;
  var slidesAlt = slidesArray.map(function(){
    return this.alt;
  }).get();

  function init(){
    for (i=0; i < slidesCount; i++) {
      $('<div class="bottom-buttons"></div>').appendTo('#bottom-buttons-section');
    }
  };
  
  init();
  var bottomButtons = $('.bottom-buttons');
  $(bottomButtons[0]).addClass('white-background');

  // set initial description;
  $('#description').text(slidesAlt[0]);
  // kreator;
  var Slider = function(options){
    this.currentSlideIndex = options.slideIndex;
    this.slidesCount = options.slidesCount;
    this.slidePosition = options.slidePosition;
    this.slideDescription = options.slideDescription;
  }

  // metoda - przycisk w prawo;
  Slider.prototype.goToNextSlide = function() {
    if (this.currentSlideIndex === slidesCount-1) {
      this.currentSlideIndex = 0;
    }
    else {
      this.currentSlideIndex++;
    }
    this.slidePosition = (this.currentSlideIndex)*-800 + 'px';
    this.slideDescription = slidesAlt[this.currentSlideIndex];
  }

  // metoda - przycisk w lewo;
  Slider.prototype.goToPrevSlide = function() {
    if (this.currentSlideIndex === 0) {
      this.currentSlideIndex = slidesCount-1;
    }
    else {
      this.currentSlideIndex--;
    }
    this.slidePosition = (this.currentSlideIndex)*-800 + 'px';
    this.slideDescription = slidesAlt[this.currentSlideIndex];
  }

  Slider.prototype.goToSpecificSlide = function(argument) {
    this.currentSlideIndex = argument;
    this.slidePosition = (this.currentSlideIndex)*-800 + 'px';
    this.slideDescription = slidesAlt[this.currentSlideIndex];
  }

  // tworzymy slider;
  var slider = new Slider({
    slideIndex: 0,
    slidesCount: slidesCount,
    slidePosition: '0px',
    slideDescription: slidesAlt[0],
  });

  $('.next-button').on('click', function(){
    var left = slider.slidePosition;
    slider.goToNextSlide();
    $('#container').finish();
    $('#container').animate({left:slider.slidePosition}, 'slow');
    $('#description').text(slider.slideDescription);
    addWhiteBackground(slider.currentSlideIndex);
  });

  $('.prev-button').on('click', function(){
    var left = slider.slidePosition;
    slider.goToPrevSlide();
    $('#container').finish();
    $('#container').animate({left:slider.slidePosition}, 'slow');
    $('#description').text(slider.slideDescription);
    addWhiteBackground(slider.currentSlideIndex);
  });

  $('.bottom-buttons').on('click', function(){
    var left = slider.slidePosition;
    var click = $(this).index();
    slider.goToSpecificSlide(click);
    $('#container').finish();
    $('#container').animate({left:slider.slidePosition}, 'slow');
    $('#description').text(slider.slideDescription);
    addWhiteBackground(slider.currentSlideIndex);
  });

function addWhiteBackground(x){
  $(bottomButtons).removeClass('white-background');
  $(bottomButtons[x]).addClass('white-background');
};

});
