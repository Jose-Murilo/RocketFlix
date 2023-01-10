import { API_KEY, BASE_URL, IMG_URL, language } from "./api.js";

const imgMovie = document.querySelector(".imgMovie");
let movieTitle = document.querySelector(".movieTitle");
let movieDescription = document.querySelector(".movieDescription");
let releaseDate = document.querySelector(".releaseDate");
const containerMovie = document.querySelector(".containerMovie");
const buttonMovieRandom = document.querySelector(".buttonMovieRandom");
const container = document.querySelector(".container");
const main = document.querySelector("main");
const header = document.querySelector("header");

console.log('O erro no console é por conta do id random que foi criado, pois tem id que a api não tem, daí ela falha na requisição e retorna o erro 404');
buttonMovieRandom.addEventListener("click", async () => {
  const id = Math.floor(Math.random() * 550);
  const api = `${BASE_URL}${id}?${API_KEY}&${language}`;
  const response = await fetch(api).then((response) => response.json());
  const contentText = document.querySelector(".contentText");

  const releaseDateYear = new Date(response.release_date).getFullYear()
  const releaseDateDay = new Date(response.release_date).getDate()
  const releaseDateMonth = new Date(response.release_date).getMonth()

  if (id === response.id) {
    if (response.overview && response.title !== "") {
      contentText.style.display = "block";
      contentText.style.alignItems = "";
      header.style.paddingBottom = "0";
      containerMovie.style.display = "flex";
      imgMovie.src = IMG_URL + response.poster_path;
      movieTitle.innerHTML = response.title;
      movieDescription.innerHTML = response.overview;
      releaseDate.innerHTML = `<strong>Data: ${releaseDateDay}/${releaseDateMonth}/${releaseDateYear}</strong>`

      buttonMovieRandom.style.marginTop = "2.8rem";
      container.style.height = "100vh";
      main.style.marginTop = "2rem";
    }
  } else {
    contentText.style.display = "flex";
    contentText.style.alignItems = "center";
    imgMovie.src = "./assets/poster.svg";
    movieTitle.innerHTML = `Ops, hoje não é dia de assistir filme.
      Bora codar! 🚀`;
    movieDescription.innerText = "";
    releaseDate.innerHTML = "";
  }
});