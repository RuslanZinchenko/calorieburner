// const modal = document.querySelector(".js-modal");

// function showModal(event) {
//   this.stopScroll();
//   this.modal.classList.add("modal-hidden");
// }

// function closeModal(event) {
//   if (
//     event.target.classList.contains("js-modal") &&
//     modal.classList.contains("modal-hidden")
//   ) {
//     modal.classList.remove("modal-hidden");
//     startScroll();
//   }

//   //   if (
//   //     event.target.classList.contains("js-icon-cancel") &&
//   //     modal.classList.contains("modal--hidden")
//   //   ) {
//   //     modal.classList.remove("modal--hidden");
//   //     startScroll();
//   //   }

//   if (event.code === "Escape" && modal.classList.contains("modal-hidden")) {
//     modal.classList.remove("modal-hidden");
//     startScroll();
//   }
// }

// function stopScroll() {
//   const scrollWidth = window.innerWidth - document.body.clientWidth;
//   document.body.style.overflow = "hidden";
//   document.body.style.paddingRight = scrollWidth + "px";
// }

// function startScroll() {
//   document.body.style.paddingRight = 0 + "px";

//   document.body.style.overflow = "visible";
// }
