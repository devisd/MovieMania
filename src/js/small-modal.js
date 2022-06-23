const modalLink = document.querySelector('.open-small-modal');
const containerSmall = document.querySelector('.container-small-modal');
const closeBtn = document.querySelector('.close-small-modal-btn');
const why = document.querySelector('.why');
modalLink.after(containerSmall);
modalLink.addEventListener('click', toggleSmallModal);
function toggleSmallModal() {
  if (containerSmall.classList.contains('small-is-hidden')) {
    containerSmall.classList.remove('small-is-hidden');
  } else {
    containerSmall.classList.add('small-is-hidden');
  }
}
window.addEventListener('keydown', closeSmallModal);

function closeSmallModal(e) {
  if (e.code === 'Escape') {
    containerSmall.classList.add('small-is-hidden');
  }
}

closeBtn.addEventListener('click', onCloseBtn);

function onCloseBtn() {
  containerSmall.classList.add('small-is-hidden');
}

const uppBtn = document.querySelector('.up-button');

const downBtn = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');

const slidesCount = mainSlide.querySelectorAll('.small-div').length;
console.log(slidesCount);
let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 400}px`;

uppBtn.addEventListener('click', () => {
  changeSlide('up');
});
downBtn.addEventListener('click', () => {
  changeSlide('down');
});

document.addEventListener('keydown', event => {
  if (event.key === 'ArrowUp') {
    changeSlide('up');
  } else if (event.key === 'ArrowDown') {
    changeSlide('down');
  }
});

function changeSlide(direction) {
  if (direction === 'up') {
    activeSlideIndex++;
    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0;
    }
  } else if (direction === 'down') {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1;
    }
  }
  const height = containerSmall.clientHeight;
  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}
