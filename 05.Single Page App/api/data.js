import * as api from './api.js'

const endpoints= {
    movies: 'data/movies'
}
export async function getAllMovies(){
  api.get(endpoints.movies)
}