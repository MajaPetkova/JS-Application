import * as api from './api.js'

const endpoints= {
    movies: '/data/movies'
}
export async function getAllMovies(){
  return api.get(endpoints.movies)
}