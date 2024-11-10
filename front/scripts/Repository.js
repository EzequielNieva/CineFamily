const Movie = require("./Movie");
class Repository {
    constructor() {
        this.movies = [];
    }

    createMovie(movie) {
        const { title, year, director, duration, genre, rate, poster } = movie;
        const newMovie = new Movie(title, year, director, duration, genre, rate, poster);
        this.movies.push(newMovie);
    }

    getMovies() {
        return this.movies;
    }
}

module.exports = Repository;