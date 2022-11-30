import { showSection, element } from "./dom.js";

export function showCatalogPage() {
  showSection("catalogSection");
  loadMovies()
}

async function loadMovies() {
  const res = await fetch("http://localhost:3030/data/movies");
  const movies = await res.json();
  document.querySelector('#catalogSection ul').replaceChildren(...movies.map(createMovieCard))
  console.log(movies);
}

function createMovieCard(movie){
return element('li', {}, movie.title)
}