const axios = require("axios");

const fetchMovies = async (repository, refresh) => {
    try {
        const response = await axios.get("http://localhost:3000/movies");
        const data = response.data;
        console.log(data); 

        data.forEach(movie => {
            repository.createMovie(movie);
        });
        refresh();
    } catch (error) {
        console.error("Error: ", error.message);
    }
}


module.exports = fetchMovies;
