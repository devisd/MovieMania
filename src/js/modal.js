(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    openModalTabletBtn: document.querySelector("[data-tablet-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  // refs.openModalTabletBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle("is-hidden");
  }
})();
// потом уберу
// const text = document.querySelector(".modal-text");
// console.log(text.textContent.length);
// const mediaQuery = window.matchMedia("(min-width: 767px)");

// function addScroll() {
//   if (mediaQuery.matches) {
//     if (text.textContent.length >= 605) {
//       text.classList.add("modal-text-scroll");
//     } else {
//       text.classList.add("modal-text-no-scroll");
//     }
//   }
// }
