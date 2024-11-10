const Repository = require("./Repository");
const createCard = require("./createCard");
const fetchMovies = require("./fetchMovies");
require("./formMovie");

const repository = new Repository();

const refresh = () => {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = "";

    const movies = repository.getMovies();

    movies.forEach(movie => {
        const card = createCard(movie);
        cardContainer.appendChild(card);
    });
}

fetchMovies(repository, refresh);



// capturar el formulario
// capturar la info de los inputs
// capturar el boton del submit y el clear
// al boton de submit -> addEvent
// objeto movie -> datos de los inputs
// funcion -> axios.post("http://localhost:3000/movies", movie)
// back
// crean la ruta -> post -> /movies
// crean un controlador -> req.body -> express.json()
// crean el servicio -> le llega la movie
// new Movie()
// movie.save()