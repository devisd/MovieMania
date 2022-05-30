const myLibrary = document.querySelector('#my_library');
const home = document.querySelector('#home');
const movies = document.querySelector('.movies');
const watched = document.querySelector('#watched');
const queue = document.querySelector('#queue');

const x = [];
const firstObj = { title: 'ddd', autor: 'avgs', img: 'https://www.mirf.ru/wp-content/uploads/2020/12/Chaos-Walking-1024x683.jpg' };
const secondObj = { title: 'tttt', autor: 'fndnd', img: 'https://images.alphacoders.com/115/1159315.jpg' };

watched.addEventListener('click', addMovie);
myLibrary.addEventListener('click', renderMovies);

function addMovie() {
    x.push(firstObj);
    console.log(x);
    localStorage.setItem('my-data', JSON.stringify(x));
};

// movies.innerHTML = localStorage.getItem('my-data');

function renderMovies() {
    const moviesArray = localStorage.getItem('my-data');
    const parsMovieArray = JSON.parse(moviesArray);
    console.log(parsMovieArray);
    const render = parsMovieArray.map(elem => {
        return `
        <div class="movie__cart">
            <img src="${elem.img}" width=360>
            <h2>${elem.title}</h2>
            <p>${elem.autor}</p>
        </div>
        `
    }).join('');
    movies.innerHTML = render;
};