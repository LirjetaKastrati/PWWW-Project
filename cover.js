var slideIndex = 1;
slide(slideIndex);

function nextSlide(n) {
    slide(slideIndex += n);
}   
function currentSlide(n) {
    slide(slideIndex = n);
}   
function slide(n) {
  var fotot = ["img/lifestylecover.jpg","img/lifestylecover2.jpg","img/lifestylecover3.jpg"];
  var i;
  var dots = document.getElementsByClassName("dot");
  if (n > fotot.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = fotot.length}
  
  var img = document.getElementById("sfoto");
  img.src = fotot[slideIndex - 1];
  document.getElementById("h3").innerHTML = h3[slideIndex - 1];
  document.getElementById("p").innerHTML = p[slideIndex - 1];
   
  for (i = 0; i < fotot.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideIndex-1].className += " active";
}