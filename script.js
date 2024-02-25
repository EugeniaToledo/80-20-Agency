document.addEventListener("DOMContentLoaded", function () {
  const slideTrack = document.querySelector(".slide-track");
  const slides = document.querySelectorAll(".slide");

 
  slides.forEach((slide) => {
    const clone = slide.cloneNode(true);
    slideTrack.appendChild(clone);
  });


  let currentPosition = 0;
  let slideWidth = slides[0].offsetWidth;

  function moveSlides() {
    currentPosition -= slideWidth;

    if (currentPosition < -(slideWidth * slides.length)) {
      currentPosition = 0;
      slideTrack.style.transition = "none";
      slideTrack.style.transform = `translateX(${currentPosition}px)`;
      void slideTrack.offsetWidth;
    }

    slideTrack.style.transition = "transform 1s ease-in-out";
    slideTrack.style.transform = `translateX(${currentPosition}px)`;
  }

  setInterval(moveSlides, 3000);
});
