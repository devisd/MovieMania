import API from './API-word'
// import cardTpl from '../templates/card.hbs'
// import modalHbs from '../templates/modal.hbs'
import debounce from 'lodash.debounce'


const searchFormEl = document.querySelector('form')
const galleryDivEl = document.querySelector('.movies')
const modalPage = document.querySelector("[data-modal]")
const modalEl = document.querySelector('.modal__box')
const getApiServise = new API();

// const mainEl=document.querySelector('.main')

searchFormEl.addEventListener('submit', onInput)



function onInput(e) {
    
    e.preventDefault()
    console.log(e.currentTarget.input__movie.value)

    const searchQuey=e.currentTarget.elements[0].value

    movieSearch(searchQuey)
    // console.log(searchQuey)
}

function movieSearch(searchQuery) {
    getApiServise.query = searchQuery;
    return getApiServise.onFetch()
        .then(data => {
            console.log(data)
            return data.results
        })
        .then(createMarkapCard)
        .then(renderMarkap)
    //     // .catch(onError)

    
}

function createMarkapCard(results) {
    console.log(results)
    return results.map(res => {
        return `
        <li class="movie__card" name="li" id="${res.id}">
            <img src="https://image.tmdb.org/t/p/w500${res.poster_path}" alt="${res.title}" id="${res.id}" class="movie__poster">
            <h2 class="movie__title" >${res.title}</h2>
            <div class="movie__text-container">
                <p class="movie__description">${res.ganres} | ${res.release_date}</p>
                <p class="movie__rating">${res.vote_average}</p>
            </div>
        </li>
        `
    }).join('')

}

function renderMarkap(cards) {
    galleryDivEl.innerHTML = '';
    galleryDivEl.insertAdjacentHTML('beforeend', cards)

    const card = document.querySelector('.movies')
    card.addEventListener('click', onCardClick)

}

function onCardClick(e) {
    if (e.target.nodeName !== 'IMG') {
        return
    }
   
    const idMovie = e.target.id
    console.log(idMovie)
    getApiServise.movieId = idMovie
    modalPage.classList.toggle("is-hidden")
    getApiServise.onIdFetch()
        .then(res => {
            console.log(res)
            return res
        })
        .then(openModal)
        .then(renderModal)
        .then(console.log)
    
}

function openModal({backdrop_path, title, overview, genres, original_title, popularity, vote_average,}) {
    return `
        <div class="current__content">
            <img class="current_image" src="https://image.tmdb.org/t/p/w500${backdrop_path}" alt="#" />
        </div>

        <!-- правая сторона -->
        <div class="modal-rigth-side">
        <h3 class="modal-movie-name">${title}</h3>
        <!-- жанры и прочее -->
        <div class="modal-ul-wrapper">
            <ul class="modal-ul">
            <li>${vote_average}</li>
            <li>${popularity}</li>
            <li>${original_title}</li>
            <li>${genres}</li>
            </ul>
            <ul>
            <li>
                <span class="modal-vote">BLA</span> /
                <span class="modal-votes">BLA</span>
            </li>
            <li>BLABLABLA</li>
            <li>BLABLABLA</li>
            <li>BLABLABLA</li>
            </ul>
        </div>
        <!-- текст о -->
        <h4>About</h4>
        <p>
            ${overview}
        </p>
        <!-- кнопки -->
        <button class="modal-button modal-btn-orange" type="submit" data-button-del-watched>
            ADD TO WATCHED
        </button>
        <button class="modal-button modal-btn-orange" type="submit" data-button-del-queue>
            ADD TO QUEUE
        </button>
        </div>
    `
}

function renderModal(obj) {
    modalEl.innerHTML = obj
    
}