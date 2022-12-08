import { showSection, element } from "./dom.js";
import { getAllMovies } from "./api/data.js";

// import  * as api from './api/api.js'

const section = document.getElementById("catalogSection");
const ul = section.querySelector("ul");
section.remove();

export function showCatalogPage() {
  showSection(section);
  loadMovies();
}

async function loadMovies() {
  ul.replaceChildren(element("p", {}, "Loading..."));
  const movies = await getAllMovies();
  // console.log(movies);
  ul.replaceChildren(...movies.map(createMovieCard));
}

function createMovieCard(movie) {
  return element("li", {}, movie.title);
}
