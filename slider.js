function slideButton (n){

  var i;
  var j;
  var picturesArray = document.getElementsByClassName("pictures");
  var picturesArrayLastIndex = picturesArray.length-1;

  for (i = 0; i < picturesArray.length; i++) {
    if (picturesArray[i].classList.contains("active")){
      var activeSlide = i;
    }
  }

  for (j = 0; j < picturesArray.length; j++) {
    if (activeSlide === j && activeSlide > 0 && n === -1) {
      picturesArray[j].className = picturesArray[j].className.replace("active", "hidden");
      picturesArray[j].id = ''
      picturesArray[j+n].className = picturesArray[j+n].className.replace("hidden", "active");
      picturesArray[j+n].id = 'left'
    }

    else if (activeSlide === j && activeSlide === 0 && n === -1) {
      picturesArray[j].className = picturesArray[j].className.replace("active", "hidden");
      picturesArray[j].id = ''
      picturesArray[picturesArrayLastIndex].className = picturesArray[picturesArrayLastIndex].className.replace("hidden", "active");
      picturesArray[picturesArrayLastIndex].id = 'left'
    }

    else if (activeSlide === j && activeSlide < picturesArrayLastIndex && n === 1) {
      picturesArray[j].className = picturesArray[j].className.replace("active", "hidden");
      picturesArray[j].id = ''
      picturesArray[j+n].className = picturesArray[j+n].className.replace("hidden", "active");
      picturesArray[j+n].id = 'right'
    }

    else if (activeSlide === j && activeSlide === picturesArrayLastIndex && n === 1) {
      picturesArray[j].className = picturesArray[j].className.replace("active", "hidden");
      picturesArray[j].id = ''
      picturesArray[0].className = picturesArray[0].className.replace("hidden", "active");
      picturesArray[0].id = 'right'
    }
  }
}

$(".buttons").click(function(){
    var div = $("div");
    div.finish();
    div.animate({opacity: '0.5'}, "slow");
    div.animate({opacity: '1'}, "slow");
});
