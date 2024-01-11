//Languages Change

function changeLanguage(selectedValue) {
      const flagElement = document.getElementById('flag');

      if (selectedValue === '1') {
        flagElement.src = '../../Images/Header/British_flag.png';
      } else if (selectedValue === '2') {
        flagElement.src = '../../Images/Header//cambodia_flag.webp';
      }
    }

// FIRST SlIDE SHOW

          
var cont=0;
function loopSlider(){
  var xx= setInterval(function(){
        switch(cont)
        {
        case 0:{
            $("#slider-1").fadeOut(400);
            $("#slider-2").delay(400).fadeIn(400);
            $("#sButton1").removeClass("bg-green-800");
            $("#sButton2").addClass("bg-green-800");
        cont=1;
        
        break;
        }
        case 1:
        {
        
            $("#slider-2").fadeOut(400);
            $("#slider-1").delay(400).fadeIn(400);
            $("#sButton2").removeClass("bg-green-800");
            $("#sButton1").addClass("bg-green-800");
            
        cont=0;
        
        break;
        }
                
        }},8000);

}

function reinitLoop(time){
clearInterval(xx);
setTimeout(loopSlider(),time);
}

function sliderButton1(){

    $("#slider-2").fadeOut(400);
    $("#slider-1").delay(400).fadeIn(400);
    $("#sButton2").removeClass("bg-green-800");
    $("#sButton1").addClass("bg-green-800");
    reinitLoop(4000);
    cont=0
    
    }
    
    function sliderButton2(){
    $("#slider-1").fadeOut(400);
    $("#slider-2").delay(400).fadeIn(400);
    $("#sButton1").removeClass("bg-green-800");
    $("#sButton2").addClass("bg-green-800");
    reinitLoop(4000);
    cont=1
    
    }

    $(window).ready(function(){
        $("#slider-2").hide();
        $("#sButton1").addClass("bg-green-800");
        

        loopSlider();
      
        
    
    
    
    
    });
      
      
        





// slide show 1
let slideIndex = 1;
showSlide(slideIndex);

function moveSlide(moveStep) {
showSlide((slideIndex += moveStep));
}

function currentSlide(n) {
showSlide((slideIndex = n));
}

function showSlide(n) {
let i;
const slides = document.getElementsByClassName("slide1");
const dots = document.getElementsByClassName("dot");

if (n > slides.length) {
  slideIndex = 1;
}
if (n < 1) {
  slideIndex = slides.length;
}

// hide all slides
for (i = 0; i < slides.length; i++) {
  slides[i].classList.add("hidden");
}

// remove active status from all dots
for (i = 0; i < dots.length; i++) {
  dots[i].classList.remove("text-yellow-500");
  dots[i].classList.add("text-black");
}

// show the active slide
slides[slideIndex - 1].classList.remove("hidden");

// highlight the active dot
dots[slideIndex - 1].classList.remove("text-black");
dots[slideIndex - 1].classList.add("text-yellow-500");
}

//slide news

let slideIndexslide = 1;
showSlide1(slideIndexslide);

function moveSlide1(moveStep) {
showSlide1((slideIndexslide += moveStep));
}

function currentSlide1(n) {
showSlide1((slideIndexslide = n));
}

function showSlide1(n) {
let i;
const slides = document.getElementsByClassName("slidenews");
const dots = document.getElementsByClassName("dots");

if (n > slides.length) {
  slideIndexslide = 1;
}
if (n < 1) {
  slideIndexslide = slides.length;
}

// hide all slides
for (i = 0; i < slides.length; i++) {
  slides[i].classList.add("hidden");
}

// remove active status from all dots
for (i = 0; i < dots.length; i++) {
  dots[i].classList.remove("bg-yellow-500");
  dots[i].classList.add("bg-gray-600");
}

// show the active slide
slides[slideIndexslide - 1].classList.remove("hidden");

// highlight the active dot
dots[slideIndexslide - 1].classList.remove("bg-gray-600");
dots[slideIndexslide - 1].classList.add("bg-yellow-500");
}

let slideIndexslide1 = 1;
showSlide2(slideIndexslide1);

function moveSlide2(moveStep) {
showSlide1((slideIndexslide1 += moveStep));
}

function currentSlide2(n) {
showSlide2((slideIndexslide1 = n));
}

function showSlide2(n) {
let i;
const slides = document.getElementsByClassName("slidenews1");
const dots = document.getElementsByClassName("dots1");

if (n > slides.length) {
  slideIndexslide1 = 1;
}
if (n < 1) {
  slideIndexslide1 = slides.length;
}

// hide all slides
for (i = 0; i < slides.length; i++) {
  slides[i].classList.add("hidden");
}

// remove active status from all dots
for (i = 0; i < dots.length; i++) {
  dots[i].classList.remove("bg-yellow-500");
  dots[i].classList.add("bg-gray-600");
}

// show the active slide
slides[slideIndexslide1 - 1].classList.remove("hidden");

// highlight the active dot
dots[slideIndexslide1 - 1].classList.remove("bg-gray-600");
dots[slideIndexslide1 - 1].classList.add("bg-yellow-500");
}
