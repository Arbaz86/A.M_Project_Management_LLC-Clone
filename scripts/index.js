// This variable keeps track of the current slide index
let slideIndex = 1;

// Call the showSlides function to display the first slide
showSlides(slideIndex);

// This function moves to the next or previous slide
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// This function displays a specific slide
function currentSlide(n) {
  showSlides((slideIndex = n));
}

// This function shows the slide at the current slideIndex and hides the others
function showSlides(n) {
  // Get all the slides and dots elements
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // If slideIndex is greater than the number of slides, reset it to 1
  if (n > slides.length) {
    slideIndex = 1;
  }
  // If slideIndex is less than 1, set it to the number of slides
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Hide all the slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove the 'active' class from all the dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Show the slide at the current slideIndex and add the 'active' class to the corresponding dot
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// This interval function calls the plusSlides function every 5 seconds to move to the next slide
setInterval(() => {
  plusSlides(1);
}, 5000);
