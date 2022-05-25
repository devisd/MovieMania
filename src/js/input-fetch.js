import API from './API-word'
// import cardTpl from '../templates/card.hbs'
import debounce from 'lodash.debounce'


const searchFormEl = document.querySelector('#search-form-movie')
const galleryDivEl = document.querySelector('.gallery')
const getApiServise = new API();

const searchBtn=document.querySelector('[data-modal-open]')
const mainEl=document.querySelector('.main')

// searchFormEl.addEventListener('input', debounce(onInput, 500))


function onInput(e) {
    
    e.preventDefault()
    if (e.target.nodeName !== 'INPUT') {
        return
    }

    const searchQuey=e.target.value

    movieSearch(searchQuey)
    console.log(searchQuey)
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
        <div class="movie__card">
            <img
                class="movie__image"
                src="https://image.tmdb.org/t/p/w500{${res.poster_path}"
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