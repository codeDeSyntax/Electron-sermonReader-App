const form = document.querySelector('#img-form');
const img = document.querySelector('#img');
const outputPath = document.querySelector('#output-path');
const filename = document.querySelector('#filename');
const heightInput = document.querySelector('#height');
const widthInput = document.querySelector('#width');

document.addEventListener("DOMContentLoaded", function() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const slider = document.getElementById('slider');

    let slideIndex = 0;

    const showSlide = (index) => {
      const slides = document.querySelectorAll('#slider > div');
      if (index >= slides.length) {
        index = 0;
      } else if (index < 0) {
        index = slides.length - 1;
      }
      slider.style.transform = `translateX(-${index * 100}%)`;
      slideIndex = index;
    };

    prevBtn.addEventListener('click', () => {
      showSlide(slideIndex - 1);
    });

    nextBtn.addEventListener('click', () => {
      showSlide(slideIndex + 1);
    });
  });

// setTimeout(function() {
//   window.location.href = "index.html"; // Redirect to the main page
// }, 3000);
const handleClick = () => {
alert('THis is an alert')
}




// Resize image

  

