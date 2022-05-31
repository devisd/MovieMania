const refs = {
    headerBG: document.querySelector('.header'),
    headerBtn: document.querySelector('.lybrary'),
    headerForm: document.querySelector('.header__form'),
    lybraryBtn: document.querySelector('#my_library'),
}

refs.lybraryBtn.addEventListener('click', onOpenLybrary);

function onOpenLybrary(e) {
    e.preventDefault()

    refs.headerBG.classList.add("lib");
    refs.headerForm.style.display = "none";
    refs.headerBtn.style.display = "flex";
}