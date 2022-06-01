const myLibrary = document.querySelector('#my_library');
const home = document.querySelector('#home');
const movies = document.querySelector('.movies');
const watched = document.querySelector('#watched');
const queue = document.querySelector('#queue');

const movieStorage = [];
const firstObj = { title: 'MONSTER HUNTER', genres: 'Drama, Action', year: '2020', rating: '8.0', img: 'https://www.mirf.ru/wp-content/uploads/2020/12/Chaos-Walking-1024x683.jpg' };
const secondObj = { title: 'MONSTER HUNTER', genres: 'Drama, Action', year: '2020', rating: '8.0', img: 'https://www.mirf.ru/wp-content/uploads/2020/12/Chaos-Walking-1024x683.jpg' };

watched.addEventListener('click', addMovie);
queue.addEventListener('click', addQueue);
myLibrary.addEventListener('click', renderMovies);

function addMovie() {
    movieStorage.push(firstObj);
    localStorage.setItem('watched', JSON.stringify(movieStorage));
};

function addQueue() {
    movieStorage.push(secondObj);
    localStorage.setItem('queue', JSON.stringify(movieStorage));
};

function renderMovies() {

    const moviesArray = localStorage.getItem('watched');
    const parsMovieArray = JSON.parse(moviesArray);

    const render = parsMovieArray.map(elem => {
        return `<li class="movie__cart">
                    <img class="movie__poster" src="${elem.img}">
                    <h2 class="movie__title">${elem.title}</h2>
                    <div class="movie__text-container">
                        <p class="movie__description">${elem.genres} | ${elem.year}</p>
                        <p class="movie__rating">${elem.rating}</p>
                    </div>
                </li>`
    }).join('');
    movies.insertAdjacentHTML('beforeend',render);
};