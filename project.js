let index = 0;
const slidees = document.querySelectorAll(".slidee");

function showSlide() {
  slidees.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
  });
  index = (index + 1) % slidees.length;
}

// Start the slideshow
setInterval(showSlide, 1200);