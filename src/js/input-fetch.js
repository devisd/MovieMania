import API from './API-word'
// import cardTpl from '../templates/card.hbs'
import debounce from 'lodash.debounce'


const searchFormEl = document.querySelector('form')
const galleryDivEl = document.querySelector('.movies')
const getApiServise = new API();

const mainEl=document.querySelector('.main')

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
        <li class="movie__card">
            <img src="https://image.tmdb.org/t/p/w500${res.poster_path}" alt="${res.title}" class="movie__poster">
            <h2 class="movie__title">${res.title}</h2>
            <div class="movie__text-container">
                <p class="movie__description">${res.ganres} | ${res.release_date}</p>
                <p class="movie__rating">${res.vote_average}</p>
            </div>
        </li>
        `

        return `
        <div class="movie__card">
            <img
                class="movie__image"
                src="https://image.tmdb.org/t/p/w500${res.poster_path}"
                alt="${res.title}"
                width="480"
            />
            <h2 class="movie__title">${res.title}</h2>
            <p class="movie__description">${res.overview}</p>
        </div>
        `
    }).join('')

}

function renderMarkap(cards) {
    galleryDivEl.innerHTML = '';
    galleryDivEl.insertAdjacentHTML('beforeend', cards)
}

// function onError() {
//     alert('Bad')
// }