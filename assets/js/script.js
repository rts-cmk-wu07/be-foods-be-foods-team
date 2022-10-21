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
document.querySelector(".shopping-basket").addEventListener("click", function () {
  //open modal
  Modal.toggle("#get-shopping-basket");
});

