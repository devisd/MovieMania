import API from './API-word'
import { genres } from './genres-list.json';

const searchFormEl = document.querySelector('form')
const galleryDivEl = document.querySelector('.movies')
const modalPage = document.querySelector("[data-modal]")
const modalEl = document.querySelector('.modal__box')
const getApiServise = new API();

searchFormEl.addEventListener('submit', onInput)

function onInput(e) {

  e.preventDefault();

  const searchQuey = e.currentTarget.elements[0].value;

  movieSearch(searchQuey);
}

function movieSearch(searchQuery) {
    getApiServise.query = searchQuery;
    return getApiServise.onFetch()
        .then(data => {
          return data.results;
        })
        .then(createMarkapCard)
        .then(renderMarkap)
}

function createMarkapCard(results) {
  return results.map(res => {
        return `
        <li class="movie__card" name="li" id="${res.id}">
            <div data-modal-open>
              <img src="https://image.tmdb.org/t/p/w500${res.poster_path}" alt="${res.title}" id="${res.id}" class="movie__poster">
              <h2 class="movie__title" >${res.title}</h2>
              <div class="movie__text-container">
                <p class="movie__description">${res.genres_ids} | ${res.release_date}</p>
                <p class="movie__rating">${res.vote_average}</p>
              </div>
            </div>
        </li>
        `
    }).join('')

}

function renderMarkap(cards) {
    galleryDivEl.innerHTML = '';
    galleryDivEl.insertAdjacentHTML('afterbegin', cards)

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
}

function openModal({poster_path, title, vote_count, overview, genres, original_title, popularity, vote_average,}) {
    return `
      <div class="current__content">
        <img class="current_image" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="#" />
      </div>

      <!-- правая сторона -->
      <div class="modal-rigth-side">
        <h3 class="modal-movie-name">${title}</h3>
        <!-- жанры и прочее -->
        <div class="modal-ul-wrapper">
          <ul class="modal-ul modal-ul-sec gray">
            <li>Vote / Votes</li>
            <li>Popularity</li>
            <li>Original Title</li>
            <li>Genre</li>
          </ul>
          <ul class="modal-ul-sec">
            <li class="gray">
              <span class="modal-vote">${vote_average}</span> /
              <span class="modal-votes">${vote_count}</span>
            </li>
            <li>${popularity}</li>
            <li>${original_title}</li>
            <li>${genres.map(res=>res.name)}</li>
          </ul>
        </div>
        <!-- текст о -->
        <h4 class="modal-about">ABOUT</h4>
        <p class="modal-text">
        ${overview}
        </p>
        <!-- кнопки -->
        <div class="modal-button-wrapper">
          <button
            class="modal-button modal-btn-orange"
            type="submit"
            data-button-del-watched
          >
            ADD TO WATCHED
          </button>
          <button class="modal-button" type="submit" data-button-del-queue>
            ADD TO QUEUE
          </button>
        </div>
      </div>

    `
}

function renderModal(obj) {
    modalEl.innerHTML = obj

}

export {
  movieSearch,
  onCardClick,
  openModal,
  renderModal
}