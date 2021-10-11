//Navbar
const navslide = () => {
  const burger = document.querySelector(".burger");
  const navlinks = document.querySelector(".navlinks");

  burger.addEventListener("click", () => {
    navlinks.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
  });
};

navslide();

// Slider
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

// Timer
var final_date = new Date("oct 16, 2021 2:00:00").getTime();

var y = setInterval(function () {
  var now = new Date().getTime();
  var diff = final_date - now;
  var days = Math.floor(diff / (1000 * 60 * 60 * 24));
  // console.log(days);
  var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("timers").innerHTML =
    days + " d : " + hours + " h : " + mins + " m : " + seconds + " s";
}, 1000);
