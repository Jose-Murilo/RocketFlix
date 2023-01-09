import {
  API_KEY, BASE_URL,
  IMG_URL,
  language,
} from './api.js'

const imgMovie = document.querySelector('.imgMovie')
let movieTitle = document.querySelector('.movieTitle')
let movieDescription = document.querySelector('.movieDescription')
const buttonMovieRandom = document.querySelector('.buttonMovieRandom')
const container = document.querySelector('.container')
const containerTwo = document.querySelector('.containerTwo')
const main = document.querySelector('main')

buttonMovieRandom.addEventListener('click', async () => {
    const id = Math.floor(Math.random() * 500)
    const api = `${BASE_URL}${id}?${API_KEY}&${language}`
    const response = await fetch(api).then(response => response.json())
    
    if (response.overview && response.original_title !== "") {
      imgMovie.src = IMG_URL + response.poster_path
      movieTitle.innerHTML = response.original_title
      movieDescription.innerHTML = response.overview
      buttonMovieRandom.style.marginTop = '2.8rem'
      container.style.height = '100vh'
      main.style.marginTop = '2rem'
    }
  })
  
  if (window.innerWidth > 0) {
    containerTwo.style.height = '100vh'
  }