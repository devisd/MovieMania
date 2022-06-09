
const KEY = '60778458bdbdfa7e14ca7e73fe4a1fef';
const URL ='https://api.themoviedb.org/3/';




const film = document.querySelector('.movies');
const searcForm = document.querySelector('form')
const movies = createMarkupFilmCard(results);



window.addEventListener("load", onSearch);
searcForm.addEventListener("submit", onSearch);
gallery.insertAdjacentHTML("beforeend", movies);


function onSearch(e) {
  e.preventDefault()
  const url = `${URL}genre/movie/list?api_key=${KEY}`;
  return fetch(url)
    .then(response => response.json())
    .then(results => {
      return results
    })
}


function createMarkupFilmCard(results) {

  return results.map(res => {
    return `
        <li class="movie__card">
            <img src="https://image.tmdb.org/t/p/w500${res.poster_path}" alt="${res.title}" class="movie__poster">
            <h2 class="movie__title">${res.title}</h2>
            <div class="movie__text-container">
                <p class="movie__description">${res.ganres} | ${res.release_date}</p>
                <p class="movie__rating">${res.vote_average}</p>
            </div>
        </li>
        `
  }).join('')
}

function renderMarkupFilm(cards) {
  film.insertAdjacentElement('beforeend', cards);
}