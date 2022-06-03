const refs = {
    headerBG: document.querySelector('.header'),
    headerBtn: document.querySelector('.lybrary'),
    headerForm: document.querySelector('.header__form'),
    homeBtn: document.querySelector('#home'),
    lybraryBtn: document.querySelector('#my_library'),
    mainSection: document.querySelector('.main'),
}

refs.homeBtn.addEventListener('click', onOpenHome);
refs.lybraryBtn.addEventListener('click', onOpenLybrary);

function onOpenHome(e) {
    e.preventDefault()

    refs.headerBG.classList.remove("lib");
    refs.headerForm.style.display = "flex";
    refs.headerBtn.style.display = "none";
}

function onOpenLybrary(e) {
    e.preventDefault()

    refs.headerBG.classList.add("lib");
    refs.headerForm.style.display = "none";
    refs.headerBtn.style.display = "flex";
}