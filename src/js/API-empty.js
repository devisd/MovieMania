import { genres } from './genres-list.json';
import { movieSearch, onCardClick } from './input-fetch';

const KEY = '60778458bdbdfa7e14ca7e73fe4a1fef';

const filmGallery = document.querySelector('.movies');
const searcForm = document.querySelector('.header__form');
// const movies = createMarkupFilmCard(results);

window.addEventListener('load', onSearch);
// searcForm.addEventListener("submit", onSearch);
// gallery.insertAdjacentHTML("beforeend", movies);

function onSearch(e) {
  e.preventDefault();

  if (e.currentTarget.input__movie.value !== '') {
    movieSearch(e.currentTarget.input__movie.value);
  }

  return fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${KEY}`
  )
    .then(response => response.json())
    .then(data => {
      return data.results;
    })
    .then(createMarkupFilmCard)
    .then(renderMarkupFilm);
}

function createMarkupFilmCard(results) {
  return results
    .map(res => {
      return `
        <li class="movie__card" name="li" id="${res.id}">
            <img src="https://image.tmdb.org/t/p/w500${res.poster_path}" alt="${res.title}" id="${res.id}" class="movie__poster">
            <h2 class="movie__title" >${res.title}</h2>
            <div class="movie__text-container">
                <p class="movie__description">${res.genres_ids} | ${res.release_date}</p>
                <p class="movie__rating">${res.vote_average}</p>
            </div>
        </li>
        `;
    })
    .join('');
}

function renderMarkupFilm(cards) {
  filmGallery.innerHTML = '';
  filmGallery.insertAdjacentHTML('afterbegin', cards);

  const card = document.querySelector('.movies');
  card.addEventListener('click', onCardClick);
}
