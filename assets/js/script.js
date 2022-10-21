import Modal from "../../components/modal/modal.js"

//fuction for modals
document.querySelector(".veggie-1").addEventListener("click", function () {
  //open modal
  Modal.toggle("#modal-get-first-veggie");
});
document.querySelector(".veggie-2").addEventListener("click", function () {
  //open modal
  Modal.toggle("#modal-get-second-veggie");
});

document.querySelector(".veggie-3").addEventListener("click", function () {
  //open modal
  Modal.toggle("#modal-get-third-veggie");
});

document.querySelector(".veggie-4").addEventListener("click", function () {
  //open modal
  Modal.toggle("#modal-get-fourth-veggie");
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}