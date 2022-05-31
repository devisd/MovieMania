const URL =
  "https://api.themoviedb.org/3/trending/movie/day?api_key=60778458bdbdfa7e14ca7e73fe4a1fef";







// const movies = createMarkapCard(results);



window.addEventListener("load", onSearch);
// refs.searcForm.addEventListener("submit", onSearch);
// gallery.insertAdjacentHTML("beforeend", movies);


function onSearch(e) {
  e.preventDefault();

  
  fetch(`${URL}`)
    .then((r) => r.json())
    .then(console.log);
}

// function renderFilm(film) {
//   const markup = film
//     .map((film) => {
//       return `
//         <div class="movies">
//         <div class="movies-card">

//         </div>
// </div>`;
//     })
//     .join("");
// }
// function createMarkapCard(results) {

//     return results.map(res => {
//         return `
//         <li class="movie__card">
//             <img src="https://image.tmdb.org/t/p/w500${res.poster_path}" alt="${res.title}" class="movie__poster">
//             <h2 class="movie__title">${res.title}</h2>
//             <div class="movie__text-container">
//                 <p class="movie__description">${res.ganres} | ${res.release_date}</p>
//                 <p class="movie__rating">${res.vote_average}</p>
//             </div>
//         </li>
//         `
//     }).join('')
// }
